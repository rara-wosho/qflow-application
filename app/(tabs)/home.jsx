import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import DashboardCard from "../../components/DashboardCard.jsx";
import QueueInfo from "../../components/QueueInfo.jsx";
import RecentQueue from "../../components/RecentQueue.jsx";

import avatars from "../../constants/avatars.js";
import icons from "../../constants/icons.js";

const HomeTab = () => {
  const userPhoto = avatars.businessman;
  return (
    <SafeAreaView className="h-full bg-primaryBackground">
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

            <Link href="../../profile">
              <View className="justify-center">
                <Image
                  source={userPhoto}
                  resizeMode="contain"
                  className="w-10 h-10"
                />
              </View>
            </Link>
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
              icon={icons.qrcode}
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
