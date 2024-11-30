import { View, Text } from "react-native";
import React from "react";

const QueueStatusCard = () => {
  return (
    <View className="bg-secondary-200 border border-white shadow-sm p-4 rounded-xl mb-3 flex-row items-center justify-between">
      <View className="flex-[0.9] ">
        <Text
          numberOfLines={1}
          className="text-gray-600 font-psemibold text-xl"
        >
          School Credentials
        </Text>
        <Text className="text-gray-600 font-pregular">
          Queue Status : Ongoing
        </Text>
        <Text className="text-gray-600 font-pregular">
          Accommodated : 5/245
        </Text>
      </View>
      <View className=" px-2 py-2 rounded-lg bg-slate-50 shadow-sm items-center justify-center">
        <Text className="text-primaryText font-psemibold text-3xl text-center">
          221
        </Text>
        <Text className="text-gray-600 font-pregular text-[11px] text-center">
          Now Serving
        </Text>
      </View>
    </View>
  );
};

export default QueueStatusCard;
