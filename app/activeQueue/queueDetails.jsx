import { View, Text } from "react-native";
import React from "react";

const QueueDetails = () => {
  return (
    <View className="w-full h-full bg-primaryBackground px-3 py-4 shadow-sm">
      <View className="rounded-lg bg-white shadow-sm px-3 pb-4 pt-3">
        <View className="border-b border-gray-100 mb-2 py-1">
          <Text className="font-pregular text-gray-500">Name</Text>
          <Text className="font-pregular text-gray-600 text-lg">
            School Credentials
          </Text>
        </View>
        <View className="border-b border-gray-100 mb-2 py-1">
          <Text className="font-pregular text-gray-500">Queue code</Text>
          <Text className="font-pregular text-gray-600 text-lg">
            SampleCode23544
          </Text>
        </View>
        <View className="border-b border-gray-100 mb-2 py-1">
          <Text className="font-pregular text-gray-500">Arrangement</Text>
          <Text className="font-pregular text-gray-600 text-lg">
            First come first serve
          </Text>
        </View>
        <View className="border-b border-gray-100 mb-2 py-1">
          <Text className="font-pregular text-gray-500">Area/Location</Text>
          <Text className="font-pregular text-gray-600 text-lg">
            School Library
          </Text>
        </View>
        <View className="pt-1">
          <Text className="font-pregular text-gray-500">Admin In Charge</Text>
          <Text className="font-pregular text-gray-600 text-lg">
            Irene Lapura
          </Text>
        </View>
      </View>
    </View>
  );
};

export default QueueDetails;
