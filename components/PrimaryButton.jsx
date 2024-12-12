import { Text, TouchableOpacity, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

const PrimaryButton = ({ title, containerStyle, handlePress, isLoading }) => {
  return (
    <View
      className={`justify-center items-center ${containerStyle} overflow-hidden`}
    >
      <LinearGradient
        colors={["#a976e5", "#e085da"]}
        start={{
          x: 1,
          y: 0,
        }}
        end={{
          x: 0,
          y: 0,
        }}
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          className="py-[14px] w-full items-center justify-center"
          onPress={handlePress}
          activeOpacity={0.7}
        >
          <Text className="text-white font-psemibold text-xl px-5">
            {isLoading ? "Please wait..." : title}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default PrimaryButton;
