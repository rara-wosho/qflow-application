import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const PlanActions = ({ plan, setPlan }) => {
  return (
    <View className="py-3">
      <View className="flex-row justify-center space-x-2">
        <TouchableOpacity onPress={() => setPlan(70)}>
          <View
            className={`${
              plan === 70 ? "bg-secondary-200" : "bg-white"
            } items-center  border border-white p-3 rounded-lg shadow-md`}
          >
            <MaterialIcons name="workspace-premium" size={28} color="blue" />
            <Text className="mt-2 font-psemibold text-gray-600 text-base">
              Starter Plan
            </Text>
            <Text className="text-gray-600 font-pregular">1-5 queues</Text>
            <Text className="text-2xl font-psemibold text-secondary-500 mt-2">
              ₱70
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPlan(150)}>
          <View
            className={`${
              plan === 150 ? "bg-secondary-200" : "bg-white"
            } items-center  border border-white p-3 rounded-lg shadow-md`}
          >
            <MaterialIcons name="workspace-premium" size={28} color="green" />
            <Text className="mt-2 font-psemibold text-gray-600 text-base">
              Medium Plan
            </Text>
            <Text className="text-gray-600 font-pregular">6-20 queues</Text>
            <Text className="text-2xl font-psemibold text-secondary-500 mt-2">
              ₱150
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPlan(200)}>
          <View
            className={`${
              plan === 200 ? "bg-secondary-200" : "bg-white"
            } items-center  border border-white p-3 rounded-lg shadow-md`}
          >
            <MaterialIcons name="workspace-premium" size={28} color="violet" />
            <Text className="mt-2 font-psemibold text-gray-600 text-base">
              Premium Plan
            </Text>
            <Text className="text-gray-600 font-pregular">21+ queues</Text>
            <Text className="text-2xl font-psemibold text-secondary-500 mt-2">
              ₱200
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlanActions;
