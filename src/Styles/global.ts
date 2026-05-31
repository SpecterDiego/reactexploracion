import { StyleSheet } from "react-native";

export const colors = {
  background: "#1a1a2e",
  secBackground: "#464674",
  header: "#242444",
  surface: "#2a2a4a",
  primary: "#4fc3f7",
  text: "#ffffff",
  textSecondary: "#d6c794",
  alert: "#ff5252",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  biggerContainer: {
    alignItems: "center",
    flex: 2,
    backgroundColor: colors.secBackground,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    margin: 10,
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textSecondary,
    marginTop: 5,
    marginBottom: 5,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textSecondary,
    marginTop: 5,
    marginBottom: 5,
    textAlign: "center",
  },
  empty: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textArea: {
    fontSize: 20,
    width: 150,
    color: colors.text,
    justifyContent: "center",
    textAlign: "center",
  },
  textAreaBig: {
    fontSize: 20,
    width: 200,
    color: colors.text,
    justifyContent: "center",
    textAlign: "center",
  },
  navLink: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.textSecondary,
    marginTop: 5,
    marginBottom: 5,
    textAlign: "center",
  },
});
