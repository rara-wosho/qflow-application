import { View, Text } from "react-native";
import React from "react";

const ProfileInformations = ({ userData }) => {
  return (
    <View className="px-2">
      <Text className="font-pregular text-gray-600">Personal Information</Text>
      <View className="py-2 border-b border-gray-200">
        <Text className="font-pregular text-lg">{userData?.email}</Text>
      </View>
      <View className="py-2 border-b border-gray-200">
        <Text className="font-pregular text-lg">{userData?.gender}</Text>
      </View>
      <Text className="font-pregular text-gray-600 mt-3">Address</Text>
      <View className="py-2 border-b border-gray-200">
        <Text className="font-pregular text-lg">
          {userData?.street + ", " + userData?.barangay}
        </Text>
      </View>
      <View className="py-2 border-b border-gray-200">
        <Text className="font-pregular text-lg">
          {userData?.city + ", " + userData?.province}
        </Text>
      </View>
      <View className="py-2 border-b border-gray-200">
        <Text className="font-pregular text-lg">{userData?.city} </Text>
      </View>
    </View>
  );
};

export default ProfileInformations;
