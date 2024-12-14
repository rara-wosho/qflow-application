import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanActions from "../../components/PlanActions";
import PaymentOption from "../../components/PaymentOption";
import PrimaryButton from "../../components/PrimaryButton";

import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

const SubscriptionScreen = () => {
  const router = useRouter();
  const [plan, setPlan] = useState(0);
  const [paymentOption, setPaymentOption] = useState("gcash");

  const [buttonLoading, setButtonLoading] = useState(false);

  const handleSubscription = () => {
    setButtonLoading(true);
    setTimeout(() => {
      setButtonLoading(false);
    }, 2000);
  };
  return (
    <SafeAreaView className="bg-primaryBackground h-full">
      <ScrollView>
        <View className="px-3">
          <View className="py-5 pr-3 flex-row justify-between">
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={24} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity>
              <SimpleLineIcons name="options" size={24} color="gray" />
            </TouchableOpacity>
          </View>
          <View className="justify-start items-center">
            <Text className="text-3xl font-psemibold text-primary text-center mb-3">
              Upgrade your experience
            </Text>
            <Text className="text-center font-pregular text-gray-600 text-lg">
              Take control and manage your own queues efficiently.
            </Text>
            <Image
              className="w-44 h-44"
              resizeMode="contain"
              source={require("../../assets/images/Upgrade-pana.png")}
            />
          </View>
          <Text className="text-center text-gray-600 font-pregular mt-4 px-3">
            Select your monthly subscription plan. Depending on the plan you
            choose, you’ll be able to create and manage a specified number of
            queues.
          </Text>

          <PlanActions plan={plan} setPlan={setPlan} />

          <View className="py-5 mb-5 bg-white rounded-lg shadow-sm px-4 mt-3">
            <View className="flex-row justify-between border-b border-gray-300 mb-2 py-3">
              <Text className=" text-gray-600 font-pregular text-lg">
                Total Amount
              </Text>
              <Text className="text-primary font-psemibold text-2xl">
                ₱{plan}
              </Text>
            </View>

            <Text className=" text-gray-600 font-pregular text-lg mb-3">
              Payment Option
            </Text>
            <PaymentOption
              paymentOption={paymentOption}
              setPaymentOption={setPaymentOption}
            />
            <Text className=" text-gray-600 font-pregular text-lg mb-1 mt-3">
              Confirm Payment
            </Text>
            <PrimaryButton
              isLoading={buttonLoading}
              disabled={plan === 0}
              containerStyle="rounded-xl"
              title="Pay Now"
              handlePress={handleSubscription}
            />
            <View className="mb-3 mt-4">
              <TouchableOpacity className="bg-gray-200 rounded-xl py-3">
                <Text className="font-psemibold text-center text-xl text-red-400">
                  Cancel Subscription
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SubscriptionScreen;
