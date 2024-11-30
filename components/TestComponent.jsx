import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Picker, Button } from "react-native-ui-lib";

const TestComponent = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <View flex center>
      <Button label="Select an Option" onPress={() => setIsVisible(true)} />

      <Picker
        placeholder="Select an option"
        value={selectedValue}
        onChange={(item) => {
          setSelectedValue(item.value);
          setIsVisible(false); // Close modal on selection
        }}
        visible={isVisible}
        onDismiss={() => setIsVisible(false)}
        topBarProps={{
          title: "Choose an Option",
          rightButtonProps: {
            label: "Close",
            onPress: () => setIsVisible(false),
          },
        }}
        renderCustomModal={(modalProps) => (
          <View style={styles.halfScreenModal}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Choose an Option</Text>
              <TouchableOpacity onPress={() => setIsVisible(false)}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.optionsContainer}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={styles.optionItem}
                  onPress={() => {
                    setSelectedValue(option.value);
                    setIsVisible(false);
                  }}
                >
                  <Text>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  halfScreenModal: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "50%", // Covers half the screen
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingBottom: 8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeText: {
    color: "#007AFF",
    fontSize: 16,
  },
  optionsContainer: {
    marginTop: 16,
  },
  optionItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
});

export default TestComponent;
