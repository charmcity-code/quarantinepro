import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

const W = Dimensions.get("window").width;

const QuarantineLevel = props => {
  function renderAchievements() {
    if (props.days > 1 && props.days < 5) {
      return (
        <>
          <MaterialCommunityIcons
            name='guy-fawkes-mask'
            color='#000'
            size={22}
          />
          <Text style={styles.resultText}>
            Quarantine Noob. Don't forget to wear a mask. Keep self-isolating.
          </Text>
        </>
      );
    } else if (props.days >= 5 && props.days <= 7) {
      return (
        <>
          <MaterialCommunityIcons name='glass-wine' color='#000' size={22} />
          <Text style={styles.resultText}>
            Quarantine Connoisseur. Welcome to the (literal) dark side!
          </Text>
        </>
      );
    } else if (props.days >= 8 && props.days <= 15) {
      return (
        <>
          <MaterialCommunityIcons
            name='seat-legroom-reduced'
            color='#000'
            size={22}
          />
          <Text style={styles.resultText}>
            Quarantine Proficient. AKA “What is pants?”
          </Text>
        </>
      );
    } else if (props.days >= 16 && props.days <= 22) {
      return (
        <>
          <MaterialCommunityIcons
            name='star-circle-outline'
            color='#000'
            size={22}
          />
          <Text style={styles.resultText}>
            Quarantine Veteran. #StayHome became your life motto.
          </Text>
        </>
      );
    } else if (props.days >= 23) {
      return (
        <>
          <FontAwesome name='paint-brush' color='#000' size={22} />
          <Text style={styles.resultText}>
            THE ULTIMATE QUARANTINE PRO! You are part of the solution - thank
            you!
          </Text>
        </>
      );
    } else
      return (
        <Text style={styles.resultText}>Your level will be shown here.</Text>
      );
  }
  return <View style={styles.resultContainer}>{renderAchievements()}</View>;
};

const styles = StyleSheet.create({
  resultContainer: {
    marginTop: 15,
    paddingTop: 10,
    backgroundColor: "#FF89BB",
    width: W / 1.2,
    height: W / 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  resultText: {
    color: "#fff",
    fontFamily: "Press-Start2p",
    fontSize: 14,
    padding: 15,
    lineHeight: 20,
  },
});

export default QuarantineLevel;
