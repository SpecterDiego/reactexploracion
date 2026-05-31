import { globalStyles } from "@/Styles/global";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeHeader() {
  return (
    <View>
      <Text style={globalStyles.title}>Por Diego Mieses 2024-0069</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Link style={globalStyles.navLink} href="/">
          Home
        </Link>
        <Link style={globalStyles.navLink} href="/sumar">
          Sumadora
        </Link>
        <Link style={globalStyles.navLink} href="/multiTabla">
          Tabla
        </Link>
        <Link style={globalStyles.navLink} href="/traductor">
          Traducir
        </Link>
        <Link style={globalStyles.navLink} href="/video">
          Video
        </Link>
      </View>
    </View>
  );
}
