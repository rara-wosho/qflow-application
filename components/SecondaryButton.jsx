import { Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SecondaryButton = ({ title, containerStyle, handlePress }) => {
  return (
    <View className={`${containerStyle}`}>
      <TouchableOpacity
        className="py-4 w-full items-center justify-center"
        onPress={handlePress}
        activeOpacity={0.7}
      >
        <Text className="text-primaryText-2 font-psemibold text-xl px-5">
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SecondaryButton;
