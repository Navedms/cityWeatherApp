import React from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
	ImageBackground,
} from "react-native";

import Text from "./Text";
import colors from "../config/colors";

interface CardItemProps {
	title: string;
	subTitle?: string;
	image: string;
	description: string;
	onPress: () => void;
}

function CardItem({
	title,
	subTitle,
	image,
	description,
	onPress,
}: CardItemProps) {
	return (
		<TouchableOpacity onPress={onPress} activeOpacity={!onPress ? 1 : 0.5}>
			<ImageBackground
				style={styles.container}
				imageStyle={styles.imageStyle}
				source={image}>
				<View style={styles.backgroundLayer}></View>
				<View style={styles.innerContainer}>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>{title}</Text>
						<Text style={styles.subTitle}>{subTitle}</Text>
					</View>
					<Text style={styles.description} numberOfLines={4}>
						{description}
					</Text>
				</View>
			</ImageBackground>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		width: Dimensions.get("window").width / 2 - 12,
		marginVertical: 2,
		marginHorizontal: 4,
		minHeight: 160,
		borderRadius: 10,
	},
	imageStyle: {
		borderRadius: 10,
	},
	backgroundLayer: {
		flex: 1,
		position: "absolute",
		left: 0,
		top: 0,
		backgroundColor: colors.opacityBlack,
		height: "100%",
		zIndex: 1,
		width: "100%",
		borderRadius: 10,
	},
	innerContainer: {
		zIndex: 2,
		padding: 8,
	},
	titleContainer: {
		marginBottom: 15,
	},
	title: {
		color: colors.white,
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 22,
	},
	subTitle: {
		color: colors.light,
		textAlign: "center",
	},
	description: {
		color: colors.white,
		fontSize: 12,
	},
});

export default CardItem;
