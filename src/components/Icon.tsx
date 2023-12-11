import React, { ComponentProps } from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

interface IconProps {
	name: ComponentProps<typeof MaterialCommunityIcons>["name"];
	size?: number;
	backgroundColor?: string;
	iconColor?: string;
	borderRadius?: number;
	style?: any;
}

function Icon({
	name,
	size = 40,
	backgroundColor = colors.primary,
	iconColor = colors.white,
	borderRadius = size / 2,
	style,
}: IconProps) {
	return (
		<View
			style={[
				{
					width: size,
					height: size,
					borderRadius: borderRadius,
					backgroundColor,
					justifyContent: "center",
					alignItems: "center",
				},
				style,
			]}>
			<MaterialCommunityIcons
				name={name}
				color={iconColor}
				size={size * 0.5}
			/>
		</View>
	);
}

export default Icon;
