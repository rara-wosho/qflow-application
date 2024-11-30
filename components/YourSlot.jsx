import { View, Text } from "react-native";
import React from "react";

const YourSlot = ({ slotNumber }) => {
  return (
    <View className="absolute right-8 z-10 bottom-8 border border-white shadow-md px-3 py-3 bg-secondary-200 rounded-xl items-center justify-center">
      <Text className="font-pregular text-gray-600 text-[11px] ">Your #</Text>
      <Text className="text-[24px] font-psemibold text-primaryText text-center">
        {slotNumber}
      </Text>
    </View>
  );
};

export default YourSlot;
