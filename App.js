import React from "react";
import { View, Text } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

const customFont = {
  "Press-Start2p": require("./assets/fonts/PressStart2P-Regular.ttf"),
};

export default function App() {
  const [isLoaded] = useFonts(customFont);

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffbd12",
      }}
    >
      <Text
        style={{
          fontFamily: "Press-Start2p",
          fontSize: 24,
          marginTop: 80,
          paddingHorizontal: 20,
        }}
      >
        {`Are You a Quarantine Pro?`}
      </Text>
    </View>
  );
}
