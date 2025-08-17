import { StyleSheet } from "react-native";

import theme from "../../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    gap: 16,
    maxWidth: 200,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 24,
  },
  name: {
    fontSize: 14,
    color: theme.colors.black,
    fontFamily: theme.fonts.medium,
  },
  description: {
    fontSize: 14,
    color: theme.colors.gray,
    fontFamily: theme.fonts.medium,

    paddingTop: 4,
  },
  price: {
    fontSize: 14,
    color: theme.colors.black,
    fontFamily: theme.fonts.semiBold,

    paddingTop: 12,
  },
});
