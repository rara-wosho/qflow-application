import { View, Text, Image } from "react-native";
import av from "../constants/avatars";

const QueueCard = ({ name, slot }) => {
  return (
    <View className="w-full py-3 px-2 bg-secondary rounded-lg flex-row items-center justify-between mb-2">
      <View className="flex-row space-x-2 items-center">
        <Image className="w-10 h-10" source={av.businessman} />
        <Text className="text-base font-pregular">{name} </Text>
      </View>
      <Text className="text-base font-psemibold">{slot} </Text>
    </View>
  );
};

export default QueueCard;
