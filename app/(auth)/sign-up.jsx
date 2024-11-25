import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import FormField from "../../components/FormField";
import { RadioButton } from "react-native-ui-lib";

import PrimaryButton from "../../components/PrimaryButton";
import DotPagination from "../../components/DotPagination";

import icons from "../../constants/icons";
import Ionicons from "@expo/vector-icons/Ionicons";

const SignUp = () => {
  const router = useRouter();
  const [activeForm, setActiveForm] = useState(1);

  const [form, setForm] = useState({
    username: "",
    password: "",
    gender: "male",
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="min-h-full w-full items-center justify-start">
          <View className="items-center w-full pt-3 pb-2 relative">
            <Image
              className="w-48 h-20"
              resizeMode="contain"
              source={icons.secondaryLogo}
            />

            <Pressable
              onPress={() => router.back()}
              style={{ position: "absolute", left: 15, top: 15 }}
            >
              <Ionicons name="chevron-back" size={24} color="white" />
            </Pressable>
          </View>
          <View className="px-4 pb-8 pt-4 w-full rounded-t-3xl bg-white flex-1">
            <View className="flex-row space-x-2 items-end justify-center py-3">
              <Image
                source={icons.profile}
                resizeMode="contain"
                className="w-8 h-8"
              />
              <Text className="text-3xl text-primary font-pbold text-center">
                Sign Up
              </Text>
            </View>
            {activeForm === 1 && (
              <View className="personal-info-form">
                <Text className="mb-3 mt-4 text-primary font-psemibold text-base">
                  Personal Information
                </Text>
                <FormField
                  title="First Name"
                  value={form.username}
                  handleChangeText={(e) => setForm({ ...form, username: e })}
                  containerStyles="mb-5 "
                  placeholder="John"
                />
                <FormField
                  title="Last Name"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  containerStyles="mb-5"
                  placeholder="Doe"
                />
                <FormField
                  title="Middle Name"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  containerStyles="mb-5"
                  placeholder="Miller"
                />
                <View className="flex-row items-center">
                  <FormField
                    title="Age"
                    value={form.password}
                    handleChangeText={(e) => setForm({ ...form, password: e })}
                    containerStyles="flex-1 mb-5"
                    placeholder=""
                  />
                </View>
                <View className="flex-row space-x-3 items-center rounded-lg justify-center">
                  <View className="flex-1">
                    <RadioButton
                      containerStyle={{
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: "gray",
                        padding: 16,
                        borderRadius: 12,
                      }}
                      iconOnRight
                      iconSource={icons.male}
                      iconStyle={{
                        width: 23,
                        height: 23,
                        resizeMode: "contain",
                      }}
                      size={20}
                      label={"Male"}
                      selected={form.gender === "male"}
                      onPress={() => setForm({ ...form, gender: "male" })}
                    />
                  </View>
                  <View className="flex-1">
                    <RadioButton
                      containerStyle={{
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: "gray",
                        padding: 16,
                        borderRadius: 12,
                      }}
                      iconSource={icons.female}
                      iconStyle={{
                        width: 23,
                        height: 23,
                        resizeMode: "contain",
                      }}
                      iconOnRight
                      size={20}
                      color="#b27bff"
                      label={"Female"}
                      selected={form.gender === "female"}
                      onPress={() => setForm({ ...form, gender: "female" })}
                    />
                  </View>
                </View>
              </View>
            )}

            {activeForm === 2 && (
              <View className="address-form">
                <Text className="mb-3 mt-4 text-primary font-psemibold text-base">
                  Address
                </Text>
                <FormField
                  title="Street"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  containerStyles="mb-5"
                  placeholder="e.g. Purok-23"
                />
                <FormField
                  title="Barangay"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  containerStyles="mb-5"
                  placeholder="e.g. Adorable"
                />
                <FormField
                  title="City/Municipality"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  containerStyles="mb-5"
                  placeholder="e.g. Jimenez"
                />
                <FormField
                  title="Province"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  containerStyles="mb-5"
                  placeholder="e.g. Misamis Occidental"
                />
              </View>
            )}

            {activeForm === 3 && (
              <>
                <View className="credential-form">
                  <Text className="mb-3 mt-4 text-primary font-psemibold text-base">
                    Credentials
                  </Text>
                  <FormField
                    title="Email"
                    value={form.password}
                    handleChangeText={(e) => setForm({ ...form, password: e })}
                    containerStyles="mb-5"
                    placeholder="sample@gmail.com"
                  />
                  <FormField
                    title="Password"
                    value={form.password}
                    handleChangeText={(e) => setForm({ ...form, password: e })}
                    containerStyles="mb-5"
                    placeholder=""
                  />
                  <FormField
                    title="Repeat Password"
                    value={form.password}
                    handleChangeText={(e) => setForm({ ...form, password: e })}
                    containerStyles="mb-5"
                    placeholder=""
                  />
                </View>
                <PrimaryButton
                  containerStyle="w-full mt-3 rounded-xl "
                  title="Sign Up"
                />
              </>
            )}

            <DotPagination
              setActivePage={setActiveForm}
              activePage={activeForm}
              totalPage={3}
            />
            <View className="flex- flex-row justify-center pt-7">
              <Text className=" text-gray-600 text-lg">
                Already have an account?{" "}
              </Text>
              <Link
                href="/sign-in"
                className="text-primary font-psemibold text-lg"
              >
                Sign In
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
