import { StyleSheet } from "react-native";

import theme from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 4,
    padding: 30,
    backgroundColor: theme.colors.gray_light,
  },
  copyright: {
    fontSize: 12,
    color: theme.colors.black,
    fontFamily: theme.fonts.medium,
  },
  rightsReserved: {
    fontSize: 12,
    color: theme.colors.gray,
    fontFamily: theme.fonts.medium,
  },
});
