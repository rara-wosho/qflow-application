import { View, Text, ScrollView, Image } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import FormField from "../../components/FormField";
import PrimaryButton from "../../components/PrimaryButton";

import icons from "../../constants/icons";

const SignIn = () => {
  const [form, setForm] = useState({
    username: "John Doe",
    password: "1234",
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="min-h-full w-full items-center justify-start">
          <View className="items-center w-full pt-3 pb-2">
            <Image
              className="w-48 h-20"
              resizeMode="contain"
              source={icons.secondaryLogo}
            />
          </View>
          <View className="bg-white px-5 pt-4 w-full rounded-t-3xl flex-1">
            <View className="flex-row space-x-2 items-end justify-center pt-8 pb-10">
              <Image
                source={icons.profile}
                resizeMode="contain"
                className="w-8 h-8"
              />
              <Text className="text-3xl text-primary font-pbold text-center">
                Sign In
              </Text>
            </View>

            <FormField
              title="Email"
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e })}
              containerStyles="mb-5"
              placeholder="Enter your email"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              containerStyles="mb-3"
              placeholder="Enter password"
            />
            <Text className=" text-primaryBlack">Forgot password?</Text>
            <PrimaryButton
              containerStyle="w-full mt-8 rounded-xl "
              title="Sign In"
              handlePress={() => router.push("../home")}
            />
            <Link href="../home">Home</Link>
            <Link href="/">index</Link>

            <View className="relative  mt-12 mb-10">
              <View className="w-28 h-[1px] bg-gray-300 top-[7px] absolute left-6"></View>
              <View className="w-28 h-[1px] bg-gray-300 top-[7px] absolute right-6"></View>
              <Text className="text-secondaryBlack text-center">
                Or Sign in with
              </Text>
            </View>
            <View className="flex-row justify-center items-center">
              <View className="p-1 mx-3">
                <Image
                  resizeMode="contain"
                  className=" w-8 h-8"
                  source={require("../../assets/logo/google.png")}
                ></Image>
              </View>
              <View className="p-1 mx-3">
                <Image
                  resizeMode="contain"
                  className=" w-8 h-8"
                  source={require("../../assets/logo/facebook.png")}
                ></Image>
              </View>
              <View className="p-1 mx-3">
                <Image
                  resizeMode="contain"
                  className=" w-8 h-8"
                  source={require("../../assets/logo/linkedin.png")}
                ></Image>
              </View>
            </View>
            <View className="flex-row justify-center pt-7">
              <Text className=" text-secondaryBlack text-lg">
                Don't have an account?{" "}
              </Text>
              <Link
                href="/sign-up"
                className="text-primary font-psemibold text-lg"
              >
                Sign Up
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
