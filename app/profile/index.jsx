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

import avatar from "../../constants/avatars";
import icons from "../../constants/icons";
import { useRouter } from "expo-router";
import { useState } from "react";

const Profile = () => {
  const router = useRouter();
  const userID = router.query?.userID;

  const [screenLoading, setScreenLoading] = useState(false);

  console.log(userID);
  if (screenLoading) {
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
                source={avatar.businessman}
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
            <Text className="text-center font-psemibold text-gray-600 text-2xl pb-3"></Text>
            <ProfileActions />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
