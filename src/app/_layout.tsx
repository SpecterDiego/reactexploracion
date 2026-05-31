import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="sumar" />
      <Stack.Screen name="multiTabla" />
      <Stack.Screen name="traductor"/>
      <Stack.Screen name="video" />
    </Stack>
  );
}
