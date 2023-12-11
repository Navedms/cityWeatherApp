import React, { useEffect } from "react";
import {
	View,
	StyleSheet,
	FlatList,
	ImageBackground,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import dayjs from "dayjs";
import { useSelector, useDispatch } from "react-redux";

import Activityindicator from "../components/Activityindicator";
import Screen from "../components/Screen";
import NoResults from "../components/NoResults";
import CurrentWeather from "../components/CurrentWeather";
import FiveDaysForecast from "../components/FiveDaysForecast";
import colors from "../config/colors";
import { Data } from "../api/data";
import {
	getCurrentWeather,
	getFiveDays,
	onFilter,
} from "../features/itemsData/itemsDataSlice";
import Text from "../components/Text";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import routes from "../navigation/routes";

function WeatherScreen({ navigation, route }) {
	const current = route.params;

	//state (redux)
	const {
		data,
		filters,
		loading,
		error,
		currentWeatherData,
		currentFiveDaysData,
	} = useSelector((store: any) => store.items);
	const dispatch: any = useDispatch();
	const currentKey = data.find((item: Data) => item.id === current.id)?.Key;

	// handle functions

	const handleGetCurrentWeatherData = async (key: string) => {
		await dispatch(getCurrentWeather(key));
	};
	const handleShowFiveDays = async (key: string, unit: boolean) => {
		const data = { key, unit };
		await dispatch(getFiveDays(data));
	};

	const handleOnPressUnitChangeFiveDays = (unit: string) => {
		handleShowFiveDays(currentKey, unit === "Metric" ? true : false);
	};

	const handleSetUnit = (unit: string) => {
		const tempFilters = {
			...filters,
			filters: {
				...filters.filters,
				unit: unit,
			},
		};
		dispatch(onFilter(tempFilters));
	};

	// use effects

	useEffect(() => {
		if (currentKey) {
			handleGetCurrentWeatherData(currentKey);
			handleShowFiveDays(
				currentKey,
				filters.filters.unit === "Metric" ? true : false
			);
		}
	}, [currentKey]);

	// render

	return (
		<ImageBackground
			style={styles.background}
			source={current.backgroundImage.full}>
			<View style={styles.backgroundLayer}></View>
			<Screen style={styles.container} backgroundColor={colors.opacity}>
				<Activityindicator visible={loading} />
				<TouchableOpacity
					style={styles.header}
					onPress={() => navigation.navigate(routes.MAIN.name)}>
					<MaterialCommunityIcons
						name='chevron-left'
						size={36}
						color={colors.black}
					/>
				</TouchableOpacity>
				{(!currentWeatherData ||
					currentWeatherData.length === 0 ||
					error) && (
					<NoResults
						title="CAN'T DISPLAY CURRENT WEATHER"
						text={
							error ||
							"Sorry we had a server issue. Please try again."
						}
						iconName='alert'
						flex={true}
					/>
				)}
				{currentWeatherData && currentWeatherData.length > 0 && (
					<CurrentWeather
						city={current.city}
						country={current.country}
						data={currentWeatherData[0]}
						onPress={(unit: string) =>
							handleOnPressUnitChangeFiveDays(unit)
						}
						unit={filters.filters.unit}
						setUnit={handleSetUnit}
					/>
				)}
				<View style={styles.fiveDaysContainer}>
					{currentFiveDaysData && currentFiveDaysData.length > 0 && (
						<FlatList
							data={currentFiveDaysData}
							showsVerticalScrollIndicator={true}
							keyExtractor={(item) => item.EpochDate.toString()}
							renderItem={({ item }) => (
								<FiveDaysForecast
									dateItem={dayjs(item.Date).format("DD/MM")}
									dayItem={dayjs(item.Date).format("ddd")}
									minTemp={Math.round(
										item.Temperature.Minimum.Value
									)}
									maxTemp={Math.round(
										item.Temperature.Maximum.Value
									)}
									unit={item.Temperature.Minimum.Unit}
								/>
							)}
						/>
					)}
				</View>
				{currentWeatherData && currentWeatherData.length > 0 && (
					<ScrollView
						style={styles.descriptionContainer}
						contentContainerStyle={styles.description}>
						<Text style={styles.descriptionText}>
							{current.description}
						</Text>
					</ScrollView>
				)}
			</Screen>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	background: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	backgroundLayer: {
		flex: 1,
		position: "absolute",
		left: 0,
		top: 0,
		backgroundColor: colors.opacityWhite,
		height: "100%",
		zIndex: 1,
		width: "100%",
	},
	container: {
		padding: 10,
		zIndex: 2,
		width: "100%",
	},
	header: {
		width: "100%",
		justifyContent: "flex-start",
	},
	fiveDaysContainer: {
		width: "100%",
	},
	descriptionContainer: {
		marginVertical: 10,
	},
	description: {
		padding: 10,
	},
	descriptionText: {
		textAlign: "justify",
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

export default WeatherScreen;
