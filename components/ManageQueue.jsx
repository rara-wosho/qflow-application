import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const ManageQueue = ({ isPremium }) => {
  if (!isPremium) return null;

  return (
    <View className="mt-3 mb-3">
      <Text className="text-lg font-psemibold text-gray-600">Manage Queue</Text>
      <TouchableOpacity
        activeOpacity={0.7}
        className="bg-primary rounded-xl pl-4 pt-2 pb-3 pr-4 shadow-sm flex-row items-center justify-between relative"
      >
        {/* <View className="bg-primaryBackground items-center justify-center mr-2 rounded-lg p-3">
          <Text className="font-psemibold text-[20px] text-gray-500">240</Text>
          </View> */}
        <View>
          <Text className="text-white text-[19px] font-psemibold">
            School Credentials
          </Text>
          <Text className="text-white">Accommodated : 5/245</Text>
          <Text className="text-white">Remaining : 240</Text>
        </View>
        <Text className=" bg-white rounded-md  px-3 py-2 text-[12px] ">
          Ongoing
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ManageQueue;
