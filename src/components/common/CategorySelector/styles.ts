import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 24,
    backgroundColor: "#F4EFFF",
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
    backgroundColor: "#FFFFFF",
  },
  textButtonCategory: {
    fontSize: 13,
    color: "#000000",
    fontWeight: "600",
  },
});
