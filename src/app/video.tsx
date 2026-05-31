import { globalStyles } from "@/Styles/global";
import { useState } from "react";
import { Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import HomeHeader from "./components/HomeHeader";

export default function VideoScreen() {
  const [playing, setPlaying] = useState(false);

  return (
    <View style={globalStyles.container}>
      <HomeHeader />
      <View style={globalStyles.biggerContainer}>
        <Text style={globalStyles.title}>Video explicativo!!!</Text>
        <View style={{ width: "100%" }}>
          <YoutubePlayer height={300} play={playing} videoId="D2RdhuRVFng" />
        </View>
      </View>
    </View>
  );
}
