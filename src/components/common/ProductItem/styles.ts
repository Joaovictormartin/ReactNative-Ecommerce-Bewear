import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 24,
  },
  productInfo: {
    maxWidth: 200,
  },
  name: {
    fontSize: 14,
    color: "#000000",
    fontWeight: "500",
  },
  description: {
    fontSize: 14,
    color: "#656565",
    fontWeight: "500",

    paddingTop: 4,
  },
  price: {
    fontSize: 14,
    color: "#000000",
    fontWeight: "600",

    paddingTop: 12,
  },
});
