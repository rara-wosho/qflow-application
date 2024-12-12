import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import icons from "../../constants/icons";
import QueueCard from "../../components/QueueCard";
import { Dialog } from "react-native-ui-lib";
import QueueStatusCard from "../../components/QueueStatusCard";
import YourSlot from "../../components/YourSlot";

const ActiveQueue = () => {
  const [activeQueue, setActiveQueue] = useState(null);
  const router = useRouter();

  return (
    <SafeAreaView className="h-full bg-primaryBackground">
      {activeQueue ? (
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
              <QueueCard name="JOshua Mae" slot={224} />
              <QueueCard name="Karina Aguas" slot={225} />
              <QueueCard name="James Herbert" slot={226} isPrio={true} />
              <QueueCard name="JOshua Mae" slot={227} />
              <QueueCard name="Karina Aguas" slot={228} />
              <QueueCard name="James Herbert" slot={229} />
              <QueueCard name="JOne Doe" slot={230} />
              <QueueCard name="JOshua Mae" slot={231} />
              <QueueCard name="Karina Aguas" slot={232} />
              <QueueCard name="James Herbert" slot={233} />
              <QueueCard name="JOne Doe" slot={2} />
              <QueueCard
                name="Rafael AlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonos"
                slot={443}
              />
              <QueueCard
                name="Rafael AlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonos"
                slot={443}
              />
              <QueueCard
                name="Rafael AlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonosAlfonos"
                slot={443}
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
