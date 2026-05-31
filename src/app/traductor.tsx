import { globalStyles } from "@/Styles/global";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import HomeHeader from "./components/HomeHeader";

const numeroATexto = (num: number): string => {
  const unidades = [
    "",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];

  const especiales = [
    "diez",
    "once",
    "doce",
    "trece",
    "catorce",
    "quince",
    "dieciséis",
    "diecisiete",
    "dieciocho",
    "diecinueve",
  ];

  const decenas = [
    "",
    "",
    "veinte",
    "treinta",
    "cuarenta",
    "cincuenta",
    "sesenta",
    "setenta",
    "ochenta",
    "noventa",
  ];

  const centenas = [
    "",
    "ciento",
    "doscientos",
    "trescientos",
    "cuatrocientos",
    "quinientos",
    "seiscientos",
    "setecientos",
    "ochocientos",
    "novecientos",
  ];

  if (num === 1000) return "mil";
  if (num === 100) return "cien";

  let resultado = "";

  const centena = Math.floor(num / 100);
  const resto = num % 100;

  if (centena > 0) {
    resultado += centenas[centena] + " ";
  }

  if (resto < 10) {
    resultado += unidades[resto];
  } else if (resto < 20) {
    resultado += especiales[resto - 10];
  } else if (resto < 30) {
    if (resto === 20) {
      resultado += "veinte";
    } else {
      resultado += "veinti" + unidades[resto - 20];
    }
  } else {
    const decena = Math.floor(resto / 10);
    const unidad = resto % 10;

    resultado += decenas[decena];

    if (unidad > 0) {
      resultado += " y " + unidades[unidad];
    }
  }

  return resultado.trim();
};

export default function Traductor() {
  const [numero, setNumero] = useState("");

  const valor = Number(numero);

  return (
    <View style={globalStyles.container}>
      <HomeHeader />
      <View style={globalStyles.biggerContainer}>
        <TextInput
          style={globalStyles.textAreaBig}
          keyboardType="numeric"
          value={numero}
          onChangeText={setNumero}
          placeholder="Ingrese un número"
        />

        {valor >= 1 && valor <= 1000 && (
          <Text style={globalStyles.resultTitle}>{numeroATexto(valor)}</Text>
        )}
      </View>
    </View>
  );
}
