import { View, Text, Image } from "react-native";
import icons from "../constants/icons";

const RecentQueueCard = ({ name, date, totalCatered }) => {
  return (
    <View className="w-full bg-white shadow-sm rounded-xl py-4 px-3 mb-3 flex-row items-center space-x-2">
      <Image source={icons.recent} resizeMode="contain" className="w-10 h-10" />
      <View className="justify-center flex-1">
        <Text className="text-base font-pregular">RecentQueueCard</Text>
        <Text className="text-gray-600 font-pregular">Nov 12, 2024</Text>
      </View>
      <Text className="text-gray-500 text-2xl pr-3 font-psemibold">23</Text>
    </View>
  );
};

export default RecentQueueCard;
