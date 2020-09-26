import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import QuarantineLevel from "./QuarantineLevel";

const W = Dimensions.get("window").width;

const DatePicker = props => {
  const [pickedDate, setPickedDate] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [days, setDays] = useState("");

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

  function daysRemaining() {
    // user's input
    let eventdate = moment(pickedDate);
    // getting current date
    let todaysdate = moment();
    let remainingDays = todaysdate.diff(eventdate, "days");
    setDays(remainingDays);
    return remainingDays;
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
      <View style={styles.showDateContainer}>
        <Text style={styles.showDateText}>
          You started isolating on{" "}
          {pickedDate && (
            <Text style={styles.showDateText}>
              {moment(pickedDate).format("YYYY-MM-DD")}.
            </Text>
          )}
        </Text>
        <TouchableWithoutFeedback onPress={daysRemaining}>
          <View style={styles.evaluateButtonContainer}>
            <Text style={styles.evaluateButtonText}>Check your level</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <QuarantineLevel days={days} />
    </>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    marginTop: 15,
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

  showDateContainer: {
    marginTop: 15,
    backgroundColor: "#F95A2C",
    width: W / 1.2,
    height: W / 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",

    alignItems: "center",
  },
  showDateText: {
    fontFamily: "Press-Start2p",
    fontSize: 14,
    padding: 10,
    marginTop: 5,
    lineHeight: 20,
  },
  evaluateButtonContainer: {
    backgroundColor: "#1947E5",
    width: W / 1.4,
    height: W / 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderBottomWidth: 5,
    borderBottomColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  evaluateButtonText: {
    color: "#fff",
    fontFamily: "Press-Start2p",
    fontSize: 13,
    paddingHorizontal: 2,
    lineHeight: 20,
  },
});

export default DatePicker;
