import { StyleSheet } from "react-native";

import theme from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 24,
    backgroundColor: theme.colors.magnolia,
  },
  content: {
    gap: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCategory: {
    width: "48%",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 24,
    paddingVertical: 14,
    backgroundColor: theme.colors.white,
  },
  textButtonCategory: {
    fontSize: 13,
    color: theme.colors.black,
    fontFamily: theme.fonts.semiBold,
  },
});
