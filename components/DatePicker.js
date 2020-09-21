import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Fontisto,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const W = Dimensions.get("window").width;

const DatePicker = props => {
  const [pickedDate, setPickedDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  function showDatePicker() {
    setDatePickerVisibility(true);
  }

  function hideDatePicker() {
    setDatePickerVisibility(false);
  }

  function handleConfirm(date) {
    console.log("A date has been picked: ", date);
    hideDatePicker();
    setPickedDate(date);
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={showDatePicker}>
        <View style={styles.pickerContainer}>
          <Fontisto style={styles.icon} name='calendar' size={48} />
          <Text style={styles.pickerText}>{`Tap here to\nselect a date`}</Text>
        </View>
      </TouchableWithoutFeedback>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode='date'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        headerTextIOS='When did you start isolating?'
      />
    </>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  pickerContainer: {
    marginTop: 20,
    backgroundColor: "#00c6ae",
    width: W / 1.2,
    height: W / 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderBottomWidth: 5,
    borderBottomColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  pickerText: {
    fontFamily: "Press-Start2p",
    fontSize: 14,
    paddingHorizontal: 10,
    lineHeight: 20,
  },
  icon: {
    color: "#000",
  },
});
