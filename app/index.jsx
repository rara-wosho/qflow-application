import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrimaryButton from "../components/PrimaryButton";
import { router } from "expo-router";

import icons from "../constants/icons";

export default function app() {
  return (
    <SafeAreaView className="h-full bg-primaryBackground">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[100vh] items-center justify-center px-4 pb-5">
          <Image
            className="w-48 h-28"
            resizeMode="contain"
            source={icons.primaryLogo}
          />
          <Text className="text-3xl text-primary text-center font-psemibold mb-1">
            Smart Queues, Happier Customers
          </Text>
          <Image className="w-52 h-52 mb-4" source={icons.queueBG} />
          <Text className="text-gray-600 text-center text-base font-pregular">
            Reduce wait times and keep customers updated in real-time. Let’s
            make long wait a thing of the past.
          </Text>
          <PrimaryButton
            handlePress={() => router.push("/sign-in")}
            title="Get Started  "
            containerStyle="mt-10 w-full rounded-xl"
          />

          {/* <SecondaryButton
            containerStyle="w-full mt-3"
            title="Continue with Google"
          ></SecondaryButton> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
