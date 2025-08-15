import { StyleSheet } from "react-native";

import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 18,
    color: "#000000",
    fontFamily: theme.fonts.semiBold,
  },
  content: {
    flex: 1,
    gap: 20,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  wrapperProducts: {
    gap: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
