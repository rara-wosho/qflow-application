import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileActions from "../../components/ProfileActions";
import { LoaderScreen } from "react-native-ui-lib";
import { useState, useEffect } from "react";

// FIREBASE
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import avatar from "../../constants/avatars";
import icons from "../../constants/icons";
import { useRouter } from "expo-router";
import ProfileInformations from "../../components/ProfileInformations";

const Profile = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleDeleteAccount = () => {};
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            setUser(userDoc.data());
          } else {
            console.warn("No such user data found!");
          }
        } catch (error) {
          console.error("Error fetching user data: ", error.message);
        }
      } else {
        router.replace("/sign-in");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <SafeAreaView className="h-full bg-primaryBackground flex items-center justify-center">
        <LoaderScreen color="#a976e5" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-full relative pt-28">
          <View className="absolute items-center justify-center w-full">
            <Image
              resizeMode="contain"
              className=" w-44 h-28"
              source={icons.secondaryLogo}
            ></Image>
          </View>
          <View className="bg-primaryBackground rounded-t-3xl flex-1 relative pt-24 px-3">
            <View className="items-center absolute -top-16 justify-center w-[100vw] ">
              <Image
                source={require("../../assets/images/meme.jpg")}
                resizeMode="contain"
                className="w-36 h-36 shadow rounded-full"
              />
            </View>
            <TouchableOpacity
              onPress={() => router.back("/home")}
              className="absolute top-5 left-5"
            >
              <Image
                onPress={() => router.back()}
                source={icons.back}
                resizeMode="contain"
                className="w-6 h-6 opacity-75"
              />
            </TouchableOpacity>
            <Text className="text-center font-psemibold text-gray-600 text-2xl pb-3">
              {user?.firstName + " " + user?.lastName}
            </Text>
            <ProfileActions />
            <ProfileInformations userData={user} />
            <View className="py-2 px-2 mt-5 flex-row items-center space-x-2">
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleDeleteAccount}
              >
                <Text className="text-red-500 font-pregular text-lg">
                  Delete Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
