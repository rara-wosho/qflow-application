import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import icons from "../constants/icons";
import { useFrameCallback } from "react-native-reanimated";

const QueueInfo = ({ containerStyle, userData }) => {
  return (
    <View
      className={`rounded-r-xl shadow overflow-hidden border-l-4 border-l-secondary-400 ${containerStyle}`}
    >
      <LinearGradient
        colors={["#f7f0ff", "#b283e9"]}
        start={{
          x: 0.1,
          y: 0,
        }}
        end={{
          x: 1,
          y: 0,
        }}
      >
        <View className="px-3 py-1 w-full flex-row items-center justify-between">
          <View className="flex-1">
            <View className="flex-row items-center space-x-2">
              <Text className="text-xl font-psemibold text-primaryText">
                {userData.firstName + " " + userData.lastName}
              </Text>
              <Text className="text-xl font-psemibold text-primaryText">
                {userData.age}
              </Text>
            </View>
            <View className="flex-row">
              <Text className="text-md font-pregular text-gray-600 flex-shrink">
                {userData.street +
                  " " +
                  userData.barangay +
                  ", " +
                  userData.city +
                  ", " +
                  userData.province}
              </Text>
            </View>
            <View className="flex-row">
              <Text className="text-md font-pregular text-gray-600">
                {userData.gender === "male" ? "Male" : "Female"}
              </Text>
            </View>
          </View>
          <View className="items-center justify-items-center rounded-lg p-2">
            <Image
              source={icons.secondarySingle}
              className="w-16 h-16"
              resizeMode="contain"
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default QueueInfo;
