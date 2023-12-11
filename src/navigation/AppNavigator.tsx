import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import routes from "./routes";
import WeatherScreen from "../screens/WeatherScreen";
import Main from "../screens/Main";

const Stack = createStackNavigator();

const AppNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerShown: false,
			presentation: "card",
		}}>
		<Stack.Screen name={routes.MAIN.name} component={Main} />
		<Stack.Screen name={routes.WEATHER.name} component={WeatherScreen} />
	</Stack.Navigator>
);

export default AppNavigator;
