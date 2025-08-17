import { StyleSheet } from "react-native";

import theme from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,

    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: theme.colors.white,
  },
  imageLogo: {
    width: 100,
    height: 26.14,
  },
  wrapperActions: {
    gap: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    width: 2,
    height: 24,
    backgroundColor: theme.colors.gray_medium,
  },
});
