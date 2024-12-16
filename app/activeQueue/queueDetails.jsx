import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

import { Dialog } from "react-native-ui-lib";

const QueueDetails = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View className="w-full h-full bg-primaryBackground px-3 py-4 shadow-sm">
      <View className="rounded-lg bg-white shadow-sm px-3 pb-4 pt-3">
        <View className="relative mb-2 rounded-md py-4 px-2 bg-secondary-100 flex-row items-center justify-between">
          <Dialog
            visible={showModal}
            onDismiss={() => setShowModal(false)}
            panDirection={"DOWN"}
          >
            <View className="bg-white p-3 rounded-xl">
              <Text className="font-pregular text-secondary-600 pb-2">
                Update Queue Status
              </Text>
              <TouchableOpacity className="bg-secondary-200 rounded-lg  px-2 border-b border-gray-200 py-3">
                <Text className="text-gray-600 font-pregular text-lg">
                  Ongoing
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-2 border-b border-gray-200 py-3">
                <Text className="text-gray-600 font-pregular text-lg">
                  Paused
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-2 py-3">
                <Text className="text-gray-600 font-pregular text-lg">
                  Finished
                </Text>
              </TouchableOpacity>
            </View>
          </Dialog>
          <Text className="font-pregular text-[17px] text-gray-600">
            Status : Ongoing
          </Text>
          <TouchableOpacity onPress={() => setShowModal(true)} className="px-2">
            <SimpleLineIcons name="options" size={24} color="gray" />
          </TouchableOpacity>
        </View>
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
        <View className="pt-1 border-b border-gray-100 py-1">
          <Text className="font-pregular text-gray-500">Admin In Charge</Text>
          <Text className="font-pregular text-gray-600 text-lg">
            Irene Lapura
          </Text>
        </View>

        <View className="bg-gray-200 shadow-sm rounded-md mt-4 p-3">
          <Text
            className="text-red-500 font-pregular text-center text-[17px]
          "
          >
            Leave Queue
          </Text>
        </View>
      </View>
    </View>
  );
};

export default QueueDetails;
