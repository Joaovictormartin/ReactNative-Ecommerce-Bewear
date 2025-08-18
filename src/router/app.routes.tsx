import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { Category } from "../screens/Category";
import { AppStackProps } from "../@types/appStack";
import { ProductVariant } from "../screens/ProductVariant";

const RootStack = createNativeStackNavigator<AppStackProps>({
  initialRouteName: "Home",
  screens: { Home, Category, ProductVariant },
  screenOptions: {
    headerShown: false,
  },
});

export const AppStack = createStaticNavigation(RootStack);
