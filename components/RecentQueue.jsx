import { View, Text, TouchableOpacity } from "react-native";
import RecentQueueCard from "./RecentQueueCard.jsx";

const RecentQueue = () => {
  return (
    <View className="py-3">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-lg font-psemibold text-gray-600">
          Recent Queue
        </Text>
        <TouchableOpacity className="bg-primary rounded-md p-2">
          <Text className="text-white">View All</Text>
        </TouchableOpacity>
      </View>
      <RecentQueueCard name="Admission Forms" slot={23} />
      <RecentQueueCard name="SSC Penalty" slot={45} />
    </View>
  );
};

export default RecentQueue;
