import { globalStyles } from "@/Styles/global";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import HomeHeader from "./components/HomeHeader";

export default function TablaScreen() {
  const [number, setNumber] = useState("");
  return (
    <View style={globalStyles.container}>
      <HomeHeader />
      <View style={globalStyles.biggerContainer}>
        <Text style={globalStyles.title}>Tabla de multiplicar</Text>
        <TextInput
          style={globalStyles.textAreaBig}
          placeholder="Escriba un numero"
          onChangeText={(newNumber) => setNumber(newNumber)}
          defaultValue={number}
        />
        {Array.from({ length: 12 }, (_, i) => i + 1).map((multiplier) => (
          <Text style={globalStyles.resultTitle} key={multiplier}>
            {number} * {multiplier} = {Number(number) * multiplier}
          </Text>
        ))}
      </View>
    </View>
  );
}
