import React from "react";
import { Text } from "react-native";

import defaultStyle from "../config/style";

interface AppText {
	children: string;
	style?: Object;
	numberOfLines?: number;
}

function AppText({ children, style, ...otherProps }: AppText) {
	return (
		<Text style={[defaultStyle.text, style]} {...otherProps}>
			{children}
		</Text>
	);
}

export default AppText;
