import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Category } from "../screens/Category";
import { AppStackProps } from "../@types/appStack";

const RootStack = createNativeStackNavigator<AppStackProps>({
  initialRouteName: "Home",
  screens: {
    Home: {
      screen: Home,
    },
    Category: {
      screen: Category,
    },
  },
  screenOptions: {
    headerShown: false,
  },
});

export const AppStack = createStaticNavigation(RootStack);
