import { globalStyles } from "@/Styles/global";
import { Image, StyleSheet, Text, View } from "react-native";
import HomeHeader from "./components/HomeHeader";

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <HomeHeader />
      <View style={globalStyles.biggerContainer}>
        <Text style={globalStyles.title}>Información personal</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ alignContent: "center", justifyContent: "center" }}>
            <Text style={textStyle.info}>Diego Mieses</Text>
            <Text style={textStyle.info}>2024-0069</Text>
          </View>
          <Image
            source={require("@/assets/images/Foto.png")}
            style={{ width: 150, height: 150 }}
            resizeMode="center"
          />
        </View>
        <Text style={textStyle.info}>diegoalejandromieses@gmail.com</Text>
      </View>
    </View>
  );
}

const textStyle = StyleSheet.create({
  info: {
    fontSize: 25,
    fontWeight: "600",
    color: "#ffffff",
    margin: 10,
    textAlign: "center",
  },
});
