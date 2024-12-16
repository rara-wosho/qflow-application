import { View, Text, Image } from "react-native";
import icons from "../constants/icons";
import Entypo from "@expo/vector-icons/Entypo";
const RecentQueueCard = ({ name, date, totalCatered, slot }) => {
  return (
    <View className="w-full bg-white shadow-sm rounded-xl py-2 pl-2 pr-3 mb-2 flex-row items-center space-x-2">
      <View className="bg-primaryBackground p-2 rounded-lg">
        <Image
          source={icons.recent}
          resizeMode="contain"
          className="w-10 h-10"
        />
      </View>
      <View className="justify-center flex-1">
        <Text className="text-base font-pregular">{name}</Text>
        <Text className="text-gray-600 font-pregular">Nov 12, 2024</Text>
      </View>
      <View className="rounded-lg shadow-sm flex-row items-center space-x-2">
        <Text className="text-gray-500 text-[25px] rounded-lg font-psemibold">
          {slot}
        </Text>
        <Entypo name="chevron-thin-right" size={18} color="rgb(150,150,150)" />
      </View>
    </View>
  );
};

export default RecentQueueCard;
