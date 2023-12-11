import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

import { store } from "./src/features/store";
import { navigationRef } from "./src/navigation/rootNavigation";
import navigationTheme from "./src/navigation/navigationTheme";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer ref={navigationRef} theme={navigationTheme}>
				<AppNavigator />
			</NavigationContainer>
		</Provider>
	);
}
