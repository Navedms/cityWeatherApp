import React, { useEffect, useMemo } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import dayjs from "dayjs";
import { useSelector, useDispatch } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import type { RouteProp } from "@react-navigation/native";

import Activityindicator from "../components/Activityindicator";
import NoResults from "../components/NoResults";
import Screen from "../components/Screen";
import CardItem from "../components/cardItem";
import Filters, { SelectedFilters } from "../components/forms/Filters";
import routes from "../navigation/routes";
import {
	defaultFilters,
	getData,
	onFilter,
	findCity,
} from "../features/itemsData/itemsDataSlice";
import { Data } from "../api/data";
import colors from "../config/colors";
import Text from "../components/Text";

var duration = require("dayjs/plugin/duration");
dayjs.extend(duration);

interface Props {
	navigation: any;
}

function Main({ navigation }: Props) {
	//state (redux)
	const { data, filters, loading, error } = useSelector(
		(store: any) => store.items
	);
	const dispatch: any = useDispatch();
	const isFocused = useIsFocused();

	// APIs
	const apiData = async (selectedFilters?: SelectedFilters) => {
		await dispatch(getData(selectedFilters || filters));
	};

	// Filters

	const filtersSortData = useMemo(
		() => [
			{
				type: "FormGroupPicker",
				id: `sortType-${filters.sort.sorttype}`,
				name: "sorttype",
				list: [
					{
						id: "city",
						value: "City Name",
					},
					{
						id: "distance",
						value: "Distance (tlv)",
					},
				],
				label: "Sort by:",
				value: filters.sort.sorttype,
				verticalElementInIT: {
					id: `sortDirection-${filters.sort.sortdirection}`,
					name: "sortdirection",
					list: [
						{
							id: "asc",
							value: "",
							icon: "chevron-up",
						},
						{
							id: "desc",
							value: "",
							icon: "chevron-down",
						},
					],
					value: filters.sort.sortdirection,
				},
			},
			{
				type: "FormGroupPicker",
				id: `unit-${filters.filters.unit}`,
				name: "unit",
				list: [
					{
						id: "Metric",
						value: "Celsius (°C)",
					},
					{
						id: "Imperial",
						value: "Fahrenheit (°F)",
					},
				],
				label: "Show temperature units by:",
				value: filters.filters.unit,
			},
		],
		[filters]
	);

	const searchData = {
		firstValue: filters.filters.text,
		name: "text",
		onChangeCallBack: (text: string) => handleSearchChangeText(text),
		onRemoveValue: () => handleSearchRemoveText,
		placeholder: "Search by city or country",
		icon: "home-search",
		disabled: false,
	};

	// Handle Functions

	const handleOnPress = async (item: Data) => {
		const result = await dispatch(findCity(item.city));
		if (result.payload?.Code === "ServiceUnavailable") {
			return;
		}
		navigation.navigate(routes.WEATHER.name, item);
	};

	const handleFilters = (selectedFilters: SelectedFilters) => {
		dispatch(onFilter(selectedFilters));
		apiData(selectedFilters);
	};

	const handleResetFilters = () => {
		const tempFilters = {
			sort: defaultFilters.sort,
			filters: { ...filters.filters, unit: defaultFilters.filters.unit },
		};
		dispatch(onFilter(tempFilters));
		apiData(tempFilters);
	};

	const handleRefreshList = () => {
		apiData();
	};

	const handleSearchChangeText = (text: string) => {
		const tempFilters = {
			...filters,
			filters: { ...filters.filters, text: text },
		};
		dispatch(onFilter(tempFilters));
		apiData(tempFilters);
	};

	const handleSearchRemoveText = () => {
		const tempFilters = {
			...filters,
			filters: { ...filters.filters, text: "" },
		};
		dispatch(onFilter(tempFilters));
		apiData(tempFilters);
	};

	// use effects

	useEffect(() => {
		if (isFocused) {
			apiData();
		}
	}, [isFocused, navigation]);

	// render

	return (
		<Screen>
			<Activityindicator visible={loading} />

			<Filters
				onSetFilters={handleFilters}
				onResetFilters={handleResetFilters}
				firstData={filtersSortData}
				defaultFilters={defaultFilters}
				search={searchData}
			/>
			{!data?.length && !loading ? (
				<NoResults
					title={"No results found"}
					text='Sorry, that filter combination has no reaults...'
					iconName='home-city'
				/>
			) : (
				<View style={styles.grid}>
					<FlatList
						data={data}
						numColumns={2}
						keyExtractor={(item: Data) => item.id.toString()}
						refreshing={loading}
						onRefresh={handleRefreshList}
						renderItem={({ item }) => (
							<CardItem
								key={item.id?.toString()}
								image={item.backgroundImage.preview}
								title={item.city}
								subTitle={item.country}
								description={item.description}
								onPress={() => handleOnPress(item)}
							/>
						)}
					/>
				</View>
			)}
			{error && (
				<View style={styles.errorContainer}>
					<Text style={styles.error}>{error}</Text>
				</View>
			)}
		</Screen>
	);
}

const styles = StyleSheet.create({
	grid: {
		paddingTop: 10,
		paddingBottom: 30,
		paddingHorizontal: 4,
		flex: 1,
	},
	errorContainer: {
		padding: 10,
		paddingBottom: 30,
		width: "100%",
	},
	error: {
		color: colors.delete,
		textAlign: "center",
	},
});

export default Main;
