import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import { LoaderScreen } from "react-native-ui-lib";

// FIREBASE
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

import DashboardCard from "../../components/DashboardCard.jsx";
import QueueInfo from "../../components/QueueInfo.jsx";
import RecentQueue from "../../components/RecentQueue.jsx";

import icons from "../../constants/icons.js";
import Entypo from "@expo/vector-icons/Entypo";

const HomeTab = () => {
  console.log("home");
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
    <SafeAreaView className="h-full bg-primaryBackground relative">
      <ScrollView>
        <View className="w-full min-h-full py-4 px-4">
          {/* HEADING */}
          <View className="heading rounded-xl shadow-sm pt-2 pb-4 flex-row space-x-3 justify-between items-center">
            <View className="flex-col">
              <View className="flex-row">
                <Text className="text-2xl font-pregular text-gray-600">
                  Hello,{" "}
                </Text>
                <Text className="text-2xl font-psemibold text-primary">
                  {user?.firstName || "User"}
                </Text>
              </View>
              <Text className="text-gray-500">
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "short",
                  day: "numeric",
                })}
              </Text>
            </View>

            <View className="flex-row items-center space-x-3">
              {user?.isPremium ? (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => router.push("/addQueue")}
                >
                  <View className="p-1 bg-primary shadow-sm rounded-full">
                    <Entypo name="plus" size={29} color="white" />
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => router.push("/subscription")}>
                  <Image
                    source={icons.premium}
                    resizeMode="contain"
                    className="w-8 h-8"
                  />
                </TouchableOpacity>
              )}
              <View className="shadow-sm">
                <TouchableOpacity
                  onPress={() => router.push(`/profile?userID=${user?.userID}`)}
                >
                  <Image
                    source={
                      user?.profilePic
                        ? { uri: user.profilePic }
                        : require("../../assets/images/meme.jpg")
                    }
                    resizeMode="cover"
                    className="w-10 h-10 rounded-full"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <QueueInfo containerStyle="mb-3" userData={user} />
          {/* DASHBOARD BODY */}
          <View className="dashboard cards py-1 flex-row">
            <DashboardCard
              title="Active Queue"
              containerStyle="mr-1"
              icon={icons.queue}
              link="/activeQueue"
            />
            <DashboardCard
              title="Scan & Join"
              containerStyle="ml-1"
              icon={icons.qr}
              link="/scanCode"
            />
          </View>
          <View className="dashboard cards py-1 flex-row">
            <DashboardCard
              title="History"
              containerStyle="mr-1"
              icon={icons.history}
            />
            <DashboardCard
              title="VIP tokens"
              containerStyle="mx-1"
              icon={icons.token}
            />
            <DashboardCard
              title="Help"
              containerStyle="ml-1"
              icon={icons.question}
            />
          </View>
          <RecentQueue />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeTab;
