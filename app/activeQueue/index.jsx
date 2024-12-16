import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";

import icons from "../../constants/icons";
import QueueCard from "../../components/QueueCard";
import QueueStatusCard from "../../components/QueueStatusCard";
import YourSlot from "../../components/YourSlot";

const ActiveQueue = () => {
  const { queueCode } = useLocalSearchParams();
  const [activeQueue, setActiveQueue] = useState(null);
  const router = useRouter();

  console.log(queueCode);
  return (
    <SafeAreaView className="h-full bg-primaryBackground">
      {true ? (
        <>
          <View className="px-3">
            <QueueStatusCard />
          </View>
          <YourSlot slotNumber={223} />
          <ScrollView
            contentContainerStyle={{ minHeight: "100vh", paddingBottom: 10 }}
          >
            <View className="w-full min-h-full px-3 relative">
              <QueueCard name="JOne Doe" slot={223} isPrio={true} />
              <QueueCard name="JOshua Mae" slot={224} isPrio={true} />
              <QueueCard name="Karina Aguas" slot={225} />
              <QueueCard name="James Herbert" slot={226} />
              <QueueCard name="JOshua Mae" slot={227} />
              <QueueCard name="Karina Aguas" slot={228} hasLeft={true} />
              <QueueCard name="James Herbert" slot={229} hasLeft={true} />
              <QueueCard name="JOne Doe" slot={230} />
              <QueueCard name="JOshua Mae" slot={231} />
              <QueueCard name="Karina Aguas" slot={232} />
              <QueueCard name="James Herbert" slot={233} />
              <QueueCard
                name="Rafael AlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonos"
                slot={234}
              />
              <QueueCard
                name="Rafael AlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonos"
                slot={235}
              />
              <QueueCard
                name="Rafael AlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonos"
                slot={236}
              />
            </View>
          </ScrollView>
        </>
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
