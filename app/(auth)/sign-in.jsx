import { View, Text, Image } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import FormField from "../../components/FormField";
import PrimaryButton from "../../components/PrimaryButton";
import { Alert } from "react-native";
import { useRouter } from "expo-router";

// FIREBASE
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import icons from "../../constants/icons";

const SignIn = () => {
  const auth = getAuth();
  const router = useRouter();

  const [buttonIsLoading, setbuttonIsLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = () => {
    if (!form.email) {
      Alert.alert("Email is required", "Please provide a valid email address");
    } else if (!form.password) {
      Alert.alert("Password is required", "Please input a password");
    } else {
      setbuttonIsLoading(true);
      signInWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setbuttonIsLoading(false);

          // Redirect to the homepage
          router.replace("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert("Credentials Didn't Match", "Please try again");
          setbuttonIsLoading(false);
        });
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="min-h-full">
        <View className="px-3 min-h-full w-full items-center justify-start">
          <View className="items-center w-full pt-3 pb-5">
            <Image
              className="w-48 h-20"
              resizeMode="contain"
              source={icons.secondaryLogo}
            />
            <Text className="text-white px-3 font-pregular text-center text-lg py-3 ">
              Welcome to QFlow. Please provide your credentials to continue.
            </Text>
          </View>
          <View className="bg-white px-3 pt-4 w-full rounded-t-3xl flex-1">
            <View className="flex-row space-x-2 items-end justify-center pt-6 pb-8">
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
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              containerStyles="mb-5"
              placeholder="Enter your email"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              containerStyles="mb-3"
              placeholder="Enter password"
              inputType="password"
            />
            <Text className=" text-primaryBlack">Forgot password?</Text>
            <PrimaryButton
              containerStyle="w-full mt-5 rounded-xl "
              title="Sign In"
              handlePress={handleSignIn}
              isLoading={buttonIsLoading}
            />
            <Link href="../home">Home</Link>
            <Link href="/">index</Link>

            <View className="relative  mt-7 mb-5">
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
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
