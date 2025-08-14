import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

import Router from "./router";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Router />
    </SafeAreaView>
  );
}
