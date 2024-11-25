import { Text, TouchableOpacity } from "react-native";
import React from "react";

const SecondaryButton = ({ title, containerStyle, handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`border-third border-2 rounded-xl py-4 justify-center items-center ${containerStyle}`}
    >
      <Text className="text-third font-psemibold text-xl px-5">{title}</Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
