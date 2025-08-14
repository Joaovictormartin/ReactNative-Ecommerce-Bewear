import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";

type AppStackProps = {
  Home: undefined;
};

const RootStack = createNativeStackNavigator<AppStackProps>({
  initialRouteName: "Home",
  screens: {
    Home: {
      screen: Home,
    },
  },
  screenOptions: {
    headerShown: false,
  },
});

export const AppStack = createStaticNavigation(RootStack);
