import { StyleSheet } from "react-native";

import theme from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    gap: 4,
    padding: 30,
    backgroundColor: "#F9F9F9",
  },
  copyright: {
    fontSize: 12,
    color: "#000000",
    fontFamily: theme.fonts.medium,
  },
  rightsReserved: {
    fontSize: 12,
    color: "#656565",
    fontFamily: theme.fonts.medium,
  },
});
