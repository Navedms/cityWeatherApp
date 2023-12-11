import React from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Platform,
	ImageBackground,
} from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

import Text from "../components/Text";
import defaultStyle from "../config/style";
import dinamicIconFormat from "./dinamicIconFormat";
import { CurrentWeatherData, Unit } from "../api/currentWeather";

interface CurrentWeatherProps {
	city: string;
	country: string;
	data: CurrentWeatherData;
	onPress: (unit: string) => void;
	unit: string;
	setUnit: (unit: string) => void;
}

function CurrentWeather({
	city,
	country,
	data,
	onPress,
	unit,
	setUnit,
}: CurrentWeatherProps) {
	const unitMark = data.Temperature[unit as Unit].Unit;
	const currentTemp = Math.round(data.Temperature[unit as Unit].Value);
	const max = Math.round(
		data.TemperatureSummary.Past24HourRange.Maximum[unit as Unit].Value
	);
	const min = Math.round(
		data.TemperatureSummary.Past24HourRange.Minimum[unit as Unit].Value
	);
	const wind = Math.round(data.Wind.Speed[unit as Unit].Value);
	const windUnit = data.Wind.Speed[unit as Unit].Unit;

	const handleSetUnit = () => {
		const result = unit === "Metric" ? "Imperial" : "Metric";
		onPress(result);
		setUnit(result);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{city}</Text>
			<Text style={styles.subTitle}>{country}</Text>
			<View style={styles.tempContainer}>
				<View style={styles.tempContainerInner}>
					<Text style={styles.currentTemp}>{currentTemp}</Text>
					<MaterialCommunityIcons
						style={styles.degree}
						name='checkbox-blank-circle-outline'
						size={12}
						color={defaultStyle.colors.primary}
					/>
					<TouchableOpacity
						style={styles.unitContainer}
						onPress={handleSetUnit}>
						<Text style={styles.unit}>{unitMark}</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.minMaxContainer}>
					<Text style={styles.minMax}>
						{`/ ${min}°${unitMark} - ${max}°${unitMark}`}
					</Text>
				</View>
			</View>
			<View style={styles.weantherInWordsContainer}>
				<Feather
					name={dinamicIconFormat.name(data.WeatherIcon)}
					size={50}
					color={dinamicIconFormat.color(data.WeatherIcon)}
				/>
				<Text style={styles.weantherInWords}>{data.WeatherText}</Text>
			</View>
			<View style={styles.extraDetailsContainer}>
				<View style={styles.extraDetails}>
					<MaterialCommunityIcons
						name='weather-windy'
						size={20}
						color={defaultStyle.colors.secondary}
					/>
					<Text style={styles.extraText}>
						{wind} {windUnit}
					</Text>
				</View>
				<View style={styles.extraDetails}>
					<MaterialCommunityIcons
						name='water'
						size={20}
						color={defaultStyle.colors.secondary}
					/>
					<Text style={styles.extraText}>
						{data.RelativeHumidity}%
					</Text>
				</View>
				<View style={[styles.extraDetails, styles.extraDetailsLast]}>
					<Text style={styles.extraTextUV}>UV Max</Text>
					<Text style={styles.extraText}>{data.UVIndex}</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		paddingBottom: 10,
	},
	title: {
		fontSize: 26,
		color: defaultStyle.colors.black,
		fontWeight: "bold",
		textAlign: "center",
	},
	subTitle: {
		fontSize: 20,
		color: defaultStyle.colors.dark,
		textAlign: "center",
	},
	tempContainer: {
		flexDirection: "row",
		justifyContent: "center",
		height: Platform.OS === "android" ? 78 : 74,
		marginTop: 30,
		marginBottom: 20,
	},
	tempContainerInner: {
		flexDirection: "row",
	},
	currentTemp: {
		fontSize: 72,
		color: defaultStyle.colors.primary,
	},
	degree: {
		paddingTop: 16,
		marginLeft: Platform.OS === "android" ? 4 : -3,
		marginRight: Platform.OS === "android" ? -5 : 0,
	},
	unitContainer: {
		marginTop: 10,
		marginLeft: 3,
		alignItems: "center",
		justifyContent: "center",
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: defaultStyle.colors.secondary,
	},
	unit: {
		fontSize: 18,
		fontWeight: "bold",
		color: defaultStyle.colors.white,
	},
	minMaxContainer: {
		alignSelf: "flex-end",
	},
	minMax: {
		marginLeft: -40,
		marginRight: 0,
		color: defaultStyle.colors.dark,
	},
	weantherInWordsContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	weantherInWords: {
		fontSize: 22,
	},
	extraDetailsContainer: {
		flexDirection: "row",
		paddingVertical: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	extraDetails: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 6,
		borderRightWidth: Platform.OS === "android" ? 0 : 1,
		borderLeftWidth: Platform.OS === "android" ? 1 : 0,
		borderStyle: "solid",
		borderColor: defaultStyle.colors.light,
	},
	extraDetailsLast: {
		borderRightWidth: 0,
		borderLeftWidth: 0,
	},
	extraText: {
		fontSize: 16,
		paddingLeft: 3,
		color: defaultStyle.colors.black,
	},
	extraTextUV: {
		fontSize: 8,
		width: 20,
		textAlign: "center",
		lineHeight: 8,
		alignSelf: "flex-end",
		color: defaultStyle.colors.secondary,
	},
});

export default CurrentWeather;
