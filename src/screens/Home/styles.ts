import { StyleSheet } from "react-native";

import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
  },
  content: {
    gap: 24,
  },
  wrapperBanners: {
    paddingHorizontal: 10,
  },
  wrapperCategorySelector: {
    paddingHorizontal: 10,
  },
  banners: {
    width: "100%",
    height: 460,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
  },
});
