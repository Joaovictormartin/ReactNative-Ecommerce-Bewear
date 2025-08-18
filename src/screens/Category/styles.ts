import { StyleSheet } from "react-native";

import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  title: {
    fontSize: 18,
    color: theme.colors.black,
    fontFamily: theme.fonts.semiBold,
  },
  content: {
    flex: 1,
    gap: 20,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  header: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  wrapperProducts: {
    gap: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
