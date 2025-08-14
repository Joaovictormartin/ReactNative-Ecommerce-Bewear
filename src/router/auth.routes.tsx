import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "../screens/Login";
import { Register } from "../screens/Register";

type AuthStackProps = {
  Login: undefined;
  Register: undefined;
};

const RootStack = createNativeStackNavigator<AuthStackProps>({
  screens: {
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
  },
  screenOptions: {
    headerShown: false,
  },
});

export const AuthStack = createStaticNavigation(RootStack);
