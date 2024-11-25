import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import icons from "../../constants/icons";
import QueueCard from "../../components/QueueCard";

const ActiveQueue = () => {
  const [activeQueue, setActiveQueue] = useState(null);
  const router = useRouter();

  return (
    <SafeAreaView className="h-full bg-primaryBackground">
      {activeQueue ? (
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full min-h-full px-3">
            <QueueCard name="JOne Doe" slot={2} />
            <QueueCard name="Rafael Alfonos" slot={3} />
            <QueueCard name="JOshua Mae" slot={4} />
            <QueueCard name="Karina Aguas" slot={5} />
            <QueueCard name="James Herbert" slot={6} />
          </View>
        </ScrollView>
      ) : (
        <View className="my-auto items-center justify-center">
          <View className="flex-row items-center">
            <Text className="font-pregular text-lg text-gray-400">
              You are not in a Queue.{" "}
            </Text>
            <Text
              className="font-pregular text-lg text-primary"
              onPress={() => router.replace("../scanCode")}
            >
              Click here to join
            </Text>
          </View>
          <Image
            className="w-72 h-72 opacity-70"
            resizeMode="contain"
            source={icons.nodata}
          ></Image>
        </View>
      )}
    </SafeAreaView>
  );
};

export default ActiveQueue;
