import { StyleSheet } from "react-native";

import theme from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  scrollView: {
    gap: 25,
  },
  wrapperBanner: {
    position: "relative",
  },
  buttonBack: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 100,
  },
  imageBanner: {
    width: "100%",
    height: 380,
    borderRadius: 24,
  },
  name: {
    fontSize: 18,
    color: theme.colors.black,
    fontFamily: theme.fonts.semiBold,
  },
  nameVariant: {
    fontSize: 14,
    color: theme.colors.gray,
    fontFamily: theme.fonts.medium,

    paddingTop: 4,
  },
  price: {
    fontSize: 18,
    color: theme.colors.black,
    fontFamily: theme.fonts.semiBold,

    paddingTop: 12,
  },
  quantity: {
    gap: 10,
  },
  titleQuantity: {
    fontSize: 16,
    color: theme.colors.black,
    fontFamily: theme.fonts.medium,
  },
  contentQuantity: {
    gap: 24,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",

    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,

    borderWidth: 1.6,
    borderStyle: "solid",
    borderColor: theme.colors.secondary,
    backgroundColor: theme.colors.white,
  },
  textQuantity: {
    fontSize: 16,
    color: theme.colors.black,
    fontFamily: theme.fonts.regular,
  },
  buttonActions: {
    gap: 10,
  },
  button: {
    borderRadius: 99,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  addCart: {
    borderWidth: 1.6,
    borderStyle: "solid",
    borderColor: theme.colors.secondary,
    backgroundColor: theme.colors.white,
  },
  buyNow: {
    backgroundColor: theme.colors.primary,
  },
  textButtonAddCart: {
    fontSize: 14,
    color: theme.colors.black,
    fontFamily: theme.fonts.semiBold,
  },
  buttonBuyNow: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.colors.secondary,

    borderRadius: 24,
    paddingVertical: 20,
  },
  textButtonBuyNow: {
    fontSize: 14,
    color: theme.colors.white,
    fontFamily: theme.fonts.semiBold,
  },
  description: {
    marginBottom: 40,
    fontSize: 14,
    color: theme.colors.black,
    fontFamily: theme.fonts.regular,
  },
  likelyProducts: {
    marginBottom: 40,
  },
});
