import { View, Text, ScrollView, Image, Pressable, Alert } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import FormField from "../../components/FormField";
import { RadioButton } from "react-native-ui-lib";

// FIREBASE
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth } from "../../firebaseConfig";
import { db } from "../../firebaseConfig";

// COMPONENTS
import PrimaryButton from "../../components/PrimaryButton";
import DotPagination from "../../components/DotPagination";

import icons from "../../constants/icons";
import Ionicons from "@expo/vector-icons/Ionicons";

const SignUp = () => {
  const router = useRouter();

  // change visible form
  const [activeForm, setActiveForm] = useState(1);
  const [buttonLoading, setButtonLoading] = useState(false);

  // registation details
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    age: "",
    gender: "male",
    street: "",
    barangay: "",
    city: "",
    province: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // validate form field for each forms
  const handleNext = () => {
    if (activeForm === 1) {
      if (!form.firstName) {
        alert("First Name is required");
      } else if (!form.lastName) {
        alert("Last Name is required");
      } else if (!form.age) {
        alert("Age is required");
      } else if (form.age < 2) {
        alert("Please enter a valid age");
      } else {
        setActiveForm((prev) => prev + 1);
      }
    } else if (activeForm === 2) {
      if (!form.street) {
        alert("Street is required");
      } else if (!form.barangay) {
        alert("Barangay is required");
      } else if (!form.city) {
        alert("City/Municipality is required");
      } else if (!form.province) {
        alert("Province is required");
      } else {
        setActiveForm((prev) => prev + 1);
      }
    }
  };
  const handlePrev = () => {
    if (activeForm !== 1) {
      setActiveForm((prev) => prev - 1);
    }
  };

  const handleSignUp = async () => {
    if (!form.email) {
      alert("Email is required");
    } else if (!form.password || !form.confirmPassword) {
      alert("Password is required");
    } else if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
    } else if (form.password !== form.confirmPassword) {
      alert("Passwords don't match");
    } else {
      setButtonLoading(true);

      try {
        // Create user with Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          form.email,
          form.password
        );
        const user = userCredential.user;

        // Save additional user information to Firestore
        const userData = {
          firstName: form.firstName,
          lastName: form.lastName,
          middleName: form.middleName,
          age: form.age,
          gender: form.gender,
          street: form.street,
          barangay: form.barangay,
          city: form.city,
          province: form.province,
          email: form.email,
          queueCount: 0,
          isPremium: 0,
          userID: user.uid,
          createdAt: new Date().toISOString(),
        };

        await setDoc(doc(db, "users", user.uid), userData);

        // Optionally, navigate to another screen
        Alert.alert("Signed Up Successfully", "Welcome to QFlow");
        router.replace("/home");
      } catch (error) {
        console.error("Error during sign-up: ", error.message);
        alert("Failed to sign up: " + error.message);
      } finally {
        setButtonLoading(false);
      }
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className=" min-h-full w-full items-center justify-start">
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
          <View className="px-3 pb-8 pt-4 w-full rounded-t-3xl bg-white flex-1">
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
            <Text className="mb-4 mt-4 text-primary font-psemibold text-base">
              {activeForm === 1 && "Personal Information"}
              {activeForm === 2 && "Address"}
              {activeForm === 3 && "Credentials"}
            </Text>
            {activeForm === 1 && (
              <View className="personal-info-form">
                <FormField
                  title="First Name"
                  value={form.firstName}
                  handleChangeText={(e) => setForm({ ...form, firstName: e })}
                  containerStyles="mb-5 "
                  placeholder="John"
                />
                <FormField
                  title="Last Name"
                  value={form.lastName}
                  handleChangeText={(e) => setForm({ ...form, lastName: e })}
                  containerStyles="mb-5"
                  placeholder="Doe"
                />
                <View className="flex-row">
                  <FormField
                    title="Middle Name"
                    value={form.middleName}
                    handleChangeText={(e) =>
                      setForm({ ...form, middleName: e })
                    }
                    containerStyles="mb-5 flex-1 mr-3"
                    placeholder="Miller"
                  />
                  <FormField
                    title="Age"
                    value={form.age}
                    handleChangeText={(e) => setForm({ ...form, age: e })}
                    containerStyles="w-28"
                    placeholder=""
                    inputType="numeric"
                  />
                </View>
                <View className="flex-row space-x-3 items-center rounded-lg justify-center">
                  <View className="flex-1">
                    <RadioButton
                      containerStyle={{
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: "rgb(210,210,210) ",
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
                      onPress={() => {
                        if (form.gender !== "male") {
                          setForm({ ...form, gender: "male" });
                        }
                      }}
                    />
                  </View>
                  <View className="flex-1">
                    <RadioButton
                      containerStyle={{
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: "rgb(210,210,210) ",
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
                      onPress={() => {
                        if (form.gender !== "female") {
                          setForm({ ...form, gender: "female" });
                        }
                      }}
                    />
                  </View>
                </View>
              </View>
            )}

            {activeForm === 2 && (
              <View className="address-form">
                <FormField
                  title="Street"
                  value={form.street}
                  handleChangeText={(e) => setForm({ ...form, street: e })}
                  containerStyles="mb-5"
                  placeholder="e.g. Purok-23"
                />
                <FormField
                  title="Barangay"
                  value={form.barangay}
                  handleChangeText={(e) => setForm({ ...form, barangay: e })}
                  containerStyles="mb-5"
                  placeholder="e.g. Adorable"
                />
                <FormField
                  title="City/Municipality"
                  value={form.city}
                  handleChangeText={(e) => setForm({ ...form, city: e })}
                  containerStyles="mb-5"
                  placeholder="e.g. Jimenez"
                />
                <FormField
                  title="Province"
                  value={form.province}
                  handleChangeText={(e) => setForm({ ...form, province: e })}
                  containerStyles="mb-5"
                  placeholder="e.g. Misamis Occidental"
                />
              </View>
            )}

            {activeForm === 3 && (
              <>
                <View className="credential-form">
                  <FormField
                    title="Email"
                    value={form.email}
                    handleChangeText={(e) => setForm({ ...form, email: e })}
                    containerStyles="mb-5"
                    placeholder="sample@gmail.com"
                  />
                  <FormField
                    title="Password"
                    value={form.password}
                    handleChangeText={(e) => setForm({ ...form, password: e })}
                    containerStyles="mb-5"
                    inputType="password"
                    placeholder="••••"
                  />
                  <FormField
                    title="Repeat Password"
                    value={form.confirmPassword}
                    handleChangeText={(e) =>
                      setForm({ ...form, confirmPassword: e })
                    }
                    containerStyles="mb-5"
                    inputType="password"
                    placeholder="••••"
                  />
                </View>
                <PrimaryButton
                  containerStyle="w-full mt-3 rounded-xl "
                  title="Sign Up"
                  handlePress={handleSignUp}
                  isLoading={buttonLoading}
                />
              </>
            )}

            <DotPagination
              activePage={activeForm}
              handleNext={handleNext}
              handlePrev={handlePrev}
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
