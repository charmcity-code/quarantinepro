import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import DatePicker from "./components/DatePicker";

const W = Dimensions.get("window").width;

const customFont = {
  "Press-Start2p": require("./assets/fonts/PressStart2P-Regular.ttf"),
};

export default function App() {
  const [isLoaded] = useFonts(customFont);

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Are You a Quarantine Pro?`}</Text>
      <DatePicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffbd12",
  },
  title: {
    fontFamily: "Press-Start2p",
    fontSize: 20,
    marginTop: 50,
    paddingHorizontal: 20,
    lineHeight: 30,
  },
});
