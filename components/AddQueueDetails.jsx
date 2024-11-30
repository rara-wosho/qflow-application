import { View, Text, TouchableOpacity } from "react-native";
import InputElement from "./InputElement";

import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const AddQueueDetails = ({ queueDetails, setQueueDetails }) => {
  return (
    <View className="border-b border-gray-200 pb-3">
      <Text className="font-psemibold text-primaryText-1 text-lg mb-2">
        Queue Details
      </Text>
      <InputElement
        label="Queue Name"
        icon={
          <MaterialCommunityIcons
            name="human-queue"
            size={24}
            color="rgb(90,90,90)"
          />
        }
        placeholder="Enter the queue name"
        value={queueDetails.queueName}
        onChangeText={setQueueDetails}
      />
      <View className="flex-row">
        <InputElement
          icon={<AntDesign name="qrcode" size={24} color="black" />}
          label="Queue Code"
          containerStyle="flex-1"
          placeholder="Code can be use to join queue"
          value={queueDetails.queueCode}
        />
        <View className=" justify-start px-2">
          <Text className="mb-[2px] text-gray-600 font-pregular">Random</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            className=" py-2 items-center rounded-lg bg-gray-100"
          >
            <Ionicons name="dice-outline" size={32} color="rgb(90,90,90)" />
          </TouchableOpacity>
        </View>
      </View>
      <InputElement
        label="Venue/Location"
        icon={<SimpleLineIcons name="location-pin" size={22} color="black" />}
        placeholder="Provide the area or venue"
      />
    </View>
  );
};

export default AddQueueDetails;
