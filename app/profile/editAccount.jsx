import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { TextField } from "react-native-ui-lib";
import PrimaryButton from "../../components/PrimaryButton";
import { useRouter } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";

const editAccount = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ minHeight: "100%" }}>
        <View className="h-full bg-primaryBackground">
          <View className="relative mt-3">
            <TouchableOpacity
              onPress={() => router.back()}
              className="absolute left-2 px-2 py-1"
            >
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-center font-psemibold text-gray-600 text-xl ">
              Edit Account
            </Text>

            <View className="px-4 mt-3">
              <Text className="text-gray-600 font-pregular">
                Personal Information
              </Text>
              <TextField
                containerStyle={{
                  borderBlockColor: "rgb(190,190,190)",
                  borderBottomWidth: 1,
                  marginBottom: 5,
                }}
                placeholder={"First Name"}
                floatingPlaceholder
                onChangeText={(text) => console.log(text)}
              />
              <TextField
                containerStyle={{
                  borderBlockColor: "rgb(190,190,190)",
                  borderBottomWidth: 1,
                  marginBottom: 5,
                }}
                placeholder={"Last Name"}
                floatingPlaceholder
                onChangeText={(text) => console.log(text)}
              />
              <TextField
                containerStyle={{
                  borderBlockColor: "rgb(190,190,190)",
                  borderBottomWidth: 1,
                  marginBottom: 5,
                }}
                placeholder={"Middle Name"}
                floatingPlaceholder
                onChangeText={(text) => console.log(text)}
              />
              <TextField
                containerStyle={{
                  borderBlockColor: "rgb(190,190,190)",
                  borderBottomWidth: 1,
                  marginBottom: 5,
                }}
                placeholder={"Age"}
                floatingPlaceholder
                onChangeText={(text) => console.log(text)}
              />
              <TextField
                containerStyle={{
                  borderBlockColor: "rgb(190,190,190)",
                  borderBottomWidth: 1,
                  marginBottom: 10,
                }}
                placeholder={"Email"}
                floatingPlaceholder
                onChangeText={(text) => console.log(text)}
              />
              <Text className="text-gray-600 font-pregular">Address</Text>
              <TextField
                containerStyle={{
                  borderBlockColor: "rgb(190,190,190)",
                  borderBottomWidth: 1,
                  marginBottom: 5,
                }}
                placeholder={"Street"}
                floatingPlaceholder
                onChangeText={(text) => console.log(text)}
              />
              <TextField
                containerStyle={{
                  borderBlockColor: "rgb(190,190,190)",
                  borderBottomWidth: 1,
                  marginBottom: 5,
                }}
                placeholder={"Barangay"}
                floatingPlaceholder
                onChangeText={(text) => console.log(text)}
              />
              <TextField
                containerStyle={{
                  borderBlockColor: "rgb(190,190,190)",
                  borderBottomWidth: 1,
                  marginBottom: 5,
                }}
                placeholder={"City / Municipality"}
                floatingPlaceholder
                onChangeText={(text) => console.log(text)}
              />
              <TextField
                containerStyle={{
                  borderBlockColor: "rgb(190,190,190)",
                  borderBottomWidth: 1,
                  marginBottom: 5,
                }}
                placeholder={"Province"}
                floatingPlaceholder
                onChangeText={(text) => console.log(text)}
              />

              <PrimaryButton
                containerStyle="mt-4 rounded-xl"
                title="Save Changes"
                handlePress={() => {}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default editAccount;
