import { useState } from "react";
import { Text, TextInput, TextStyle, View } from "react-native";

interface MyComponentProps {
  styles: {
    title: TextStyle;
    textArea: TextStyle;
    sectionTitle: TextStyle;
    resultTitle: TextStyle;
  };
  operation: (a: number, b: number) => number;
  title: string;
}

export default function Calculadora({
  styles,
  operation,
  title,
}: MyComponentProps) {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.sectionTitle}>Ingresa 2 numeros:</Text>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <TextInput
          style={styles.textArea}
          placeholder="Numero 1 aquí"
          onChangeText={(newNumber) => setNumber1(newNumber)}
          defaultValue={number1}
        />
        <TextInput
          style={styles.textArea}
          placeholder="Numero 2 aquí"
          onChangeText={(newNumber) => setNumber2(newNumber)}
          defaultValue={number2}
        />
      </View>
      <Text style={styles.resultTitle}>
        Resultado: {operation(Number(number1), Number(number2))}
      </Text>
    </>
  );
}
