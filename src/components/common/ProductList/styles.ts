import { StyleSheet } from "react-native";

import theme from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  scrollView: {
    gap: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    color: theme.colors.black,
    fontFamily: theme.fonts.semiBold,
    paddingHorizontal: 10,
  },
});
