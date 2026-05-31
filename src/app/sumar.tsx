import { globalStyles } from "@/Styles/global";
import { View } from "react-native";
import Calculadora from "./components/Calculadora";
import HomeHeader from "./components/HomeHeader";

export default function SumarScreen() {
  return (
    <View style={globalStyles.container}>
      <HomeHeader />
      <View style={globalStyles.biggerContainer}>
        <Calculadora
          title="Sumadora"
          styles={globalStyles}
          operation={(a: number, b: number) => a + b}
        />
      </View>
    </View>
  );
}
