import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import AntDesign from "@expo/vector-icons/AntDesign";

const PaymentOption = ({ paymentOption, setPaymentOption }) => {
  return (
    <View className="space-y-2 border-b border-gray-300 pb-6">
      <TouchableOpacity
        onPress={() => setPaymentOption("gcash")}
        className={`${
          paymentOption === "gcash" && "bg-secondary-100"
        } items-center space-x-2 p-2 rounded-lg flex-row`}
      >
        <Image
          resizeMode="contain"
          className="w-10 h-10"
          source={require("../assets/images/gcash.png")}
        />
        <Text className="text-gray-600 font-pregular">Gcash</Text>
        {paymentOption === "gcash" && (
          <View className="absolute right-4">
            <AntDesign name="checkcircleo" size={20} color="green" />
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setPaymentOption("paypal")}
        className={`${
          paymentOption === "paypal" && "bg-secondary-100"
        } items-center space-x-2 p-2 rounded-lg flex-row`}
      >
        <Image
          resizeMode="contain"
          className="w-10 h-10"
          source={require("../assets/images/paypal.png")}
        />
        <Text className="text-gray-600 font-pregular">Paypal</Text>
        {paymentOption === "paypal" && (
          <View className="absolute right-4">
            <AntDesign name="checkcircleo" size={20} color="green" />
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setPaymentOption("credit-card")}
        className={`${
          paymentOption === "credit-card" && "bg-secondary-100"
        } items-center space-x-2 p-2 rounded-lg flex-row`}
      >
        <Image
          resizeMode="contain"
          className="w-10 h-10"
          source={require("../assets/images/money.png")}
        />
        <Text className="text-gray-600 font-pregular">Credit Card</Text>
        {paymentOption === "credit-card" && (
          <View className="absolute right-4">
            <AntDesign name="checkcircleo" size={20} color="green" />
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setPaymentOption("apple-pay")}
        className={`${
          paymentOption === "apple-pay" && "bg-secondary-100"
        } items-center space-x-2 p-2 rounded-lg flex-row`}
      >
        <Image
          resizeMode="contain"
          className="w-10 h-10"
          source={require("../assets/images/apple.png")}
        />
        <Text className="text-gray-600 font-pregular">Apple Pay</Text>
        {paymentOption === "apple-pay" && (
          <View className="absolute right-4">
            <AntDesign name="checkcircleo" size={20} color="green" />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PaymentOption;
