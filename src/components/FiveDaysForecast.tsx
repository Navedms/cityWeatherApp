import React from "react";
import { View, StyleSheet } from "react-native";

import Text from "./Text";
import defaultStyle from "../config/style";

interface FiveDaysForecastProps {
	dateItem: string;
	dayItem: string;
	minTemp: number;
	maxTemp: number;
	unit: string;
}

function FiveDaysForecast({
	dateItem,
	dayItem,
	minTemp,
	maxTemp,
	unit,
}: FiveDaysForecastProps) {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.dateItem}>{dateItem}</Text>
				<Text style={styles.dayItem}>{dayItem}</Text>
			</View>
			<View style={styles.description}>
				<Text style={styles.minMaxItem}>
					{`${minTemp}° ${unit} - ${maxTemp}° ${unit}`}
				</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 10,
		borderBottomWidth: 1,
		borderColor: defaultStyle.colors.light,
		height: 55,
		justifyContent: "space-between",
	},
	header: {
		justifyContent: "center",
		alignItems: "center",
	},
	description: {
		justifyContent: "center",
		alignItems: "center",
	},
	minMaxItem: {
		color: defaultStyle.colors.primary,
		fontSize: 18,
	},
	dateItem: {
		fontSize: 14,
		color: defaultStyle.colors.dark,
	},
	dayItem: {
		color: defaultStyle.colors.black,
		fontSize: 16,
		fontWeight: "100",
	},
});

export default FiveDaysForecast;
