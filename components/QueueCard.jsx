import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Dialog } from "react-native-ui-lib";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Feather from "@expo/vector-icons/Feather";

const QueueCard = ({ name, slot, type, isPrio, status, hasLeft }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPremium, setIsPremium] = useState(true);
  const borderColor = {
    default: "transparent",
    accommodating: "#a976e5",
    priority: "#eb2697",
    inline: "#2680eb",
    left: "#e33535",
  };
  let queueStatus = borderColor.priority;
  return (
    <>
      <Dialog
        visible={isVisible}
        onDismiss={() => setIsVisible(false)}
        panDirection="DOWN"
      >
        <View className="bg-white shadow-xl p-5 rounded-xl">
          <View className="flex-row items-center justify-between border-b border-gray-200 pb-3 mb-3">
            <Text className="text-2xl font-psemibold text-primaryText-2">
              Number {slot}
            </Text>
            <TouchableOpacity
              className="p-2 bg-secondary-100 items-center justify-center w-10 h-10 rounded-full"
              onPress={() => setIsVisible(false)}
            >
              <AntDesign name="close" size={18} color="black" />
            </TouchableOpacity>
          </View>
          <View className="border-b border-gray-200">
            {isPremium && (
              <>
                <Text className="py-1 text-[17px] font-pregular text-gray-600">
                  Name : {name}{" "}
                </Text>
                <Text className="py-1 text-[17px] font-pregular text-gray-600">
                  Gender : Male
                </Text>
                <Text className="py-1 text-[17px] font-pregular text-gray-600">
                  Address : Purok 2, Punta Panaon, Jimenez Misamis Occidental
                </Text>
                <Text className="py-1 text-[17px] font-pregular text-gray-600">
                  Address : Purok 2, Punta Panaon, Jimenez Misamis Occidental
                </Text>
              </>
            )}
            <Text className="pt-1 pb-4 text-[17px] font-pregular text-gray-600">
              Status : Waiting
            </Text>
          </View>
          {isPremium && (
            <View className="flex-row items-center justify-center space-x-2  mt-4">
              <TouchableOpacity className="flex-row items-center justify-center rounded-lg px-3 py-2 shadow-lg bg-green-300">
                <Text className="font-pregular">Finished</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-center rounded-lg px-3 py-2 shadow-lg bg-pink-300">
                <Text className="font-pregular">Prioritize</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-row items-center justify-center rounded-lg px-3 py-2 shadow-lg bg-red-300">
                <Text className="font-pregular">Remove</Text>
              </TouchableOpacity>
            </View>
          )}
          {/* <View className="mt-5">
            <Text className="mb-2 font-pregular text-gray-600">
              What the colors mean:
            </Text>
            <View className="items-center flex-row space-x-2 mb-3">
              <View
                style={{ backgroundColor: borderColor.inline }}
                className="w-4 h-4 rounded-full"
              ></View>
              <Text className="text-gray-600 font-pregular">
                Currently in physical queue
              </Text>
            </View>
            <View className="items-center flex-row space-x-2 mb-3">
              <View
                style={{ backgroundColor: borderColor.inline }}
                className="w-4 h-4 rounded-full"
              ></View>
              <Text className="text-gray-600 font-pregular">
                Currently in physical queue
              </Text>
            </View>
            <View className="items-center flex-row space-x-2 mb-3">
              <View
                style={{ backgroundColor: borderColor.left }}
                className="w-4 h-4 rounded-full"
              ></View>
              <Text className="text-gray-600 font-pregular">
                Left the queue
              </Text>
            </View>
          </View> */}
        </View>
      </Dialog>

      <TouchableOpacity activeOpacity={0.7} onPress={() => setIsVisible(true)}>
        <View
          className={`${
            hasLeft ? "bg-gray-200 opacity-40" : "bg-white shadow-sm"
          } w-full py-2 pl-3 pr-2 rounded-xl flex-row items-center justify-between mb-2 relative`}
        >
          {/* <View className="absolute w-6 h-6 right-20 top-6 rounded-full bg-primary"></View> */}
          <View className="flex-row space-x-3 items-center flex-[0.97]">
            <View
              // style={{
              //   borderColor: `${queueStatus}`,
              //   borderWidth: 2,
              // }}
              className="rounded-full border-primary border-2 overflow-hidden"
            >
              <Image
                resizeMode="cover"
                className="w-12 h-12 rounded-full"
                source={require("../assets/images/meme.jpg")}
              />
            </View>
            <View className="flex-col flex-1">
              {/* <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                className="text-base text-gray-600 font-pregular"
              >
                {name}
              </Text> */}

              <Text className="text-[22px] text-primaryText-2 font-psemibold">
                {slot}
              </Text>
              {isPremium && (
                <Text numberOfLines={1} className="text-gray-600 font-pregular">
                  {name}
                </Text>
              )}
            </View>
          </View>
          <View className="flex-row items-center  space-x-2 rounded-xl px-3 py-1">
            {isPrio && <FontAwesome name="heart-o" size={20} color="red" />}

            {hasLeft && (
              <Text className="font-pregular text-[12px] ">Left the Queue</Text>
            )}
          </View>
          {/* <Entypo name="chevron-thin-down" size={15} color="black" /> */}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default QueueCard;
