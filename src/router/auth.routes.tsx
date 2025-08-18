import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { AuthStackProps } from "../@types/authStack";

const RootStack = createNativeStackNavigator<AuthStackProps>({
  screens: { Login, Register },
  screenOptions: {
    headerShown: false,
  },
});

export const AuthStack = createStaticNavigation(RootStack);
