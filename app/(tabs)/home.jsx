import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";

import DashboardCard from "../../components/DashboardCard.jsx";
import QueueInfo from "../../components/QueueInfo.jsx";
import RecentQueue from "../../components/RecentQueue.jsx";

import icons from "../../constants/icons.js";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";

const HomeTab = () => {
  const router = useRouter();
  const isAdmin = true;
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
                  Israel
                </Text>
              </View>
              <Text className="text-gray-500">Sunday, Nov 17</Text>
            </View>

            <View className="flex-row items-center space-x-3">
              {isAdmin ? (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => router.push("/addQueue")}
                >
                  <View className="p-1 bg-primary shadow-sm rounded-full">
                    <Entypo name="plus" size={29} color="white" />
                  </View>
                </TouchableOpacity>
              ) : (
                <Link href="#">
                  <Image
                    source={icons.premium}
                    resizeMode="contain"
                    className="w-8 h-8"
                  />
                </Link>
              )}
              <View className="shadow-sm">
                <TouchableOpacity onPress={() => router.push("../../profile")}>
                  <Image
                    source={require("../../assets/images/meme.jpg")}
                    resizeMode="cover"
                    className="w-10 h-10 rounded-full"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <QueueInfo containerStyle="mb-3" />
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
