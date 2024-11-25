import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import avatar from "../../constants/avatars";
import icons from "../../constants/icons";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-full relative pt-28">
          <Image
            resizeMode="contain"
            className="absolute w-44 h-28 right-1/2 translate-x-[-50%]"
            source={icons.secondaryLogo}
          ></Image>
          <View className="bg-primaryBackground rounded-t-3xl flex-1 relative pt-24 px-3">
            <View className="items-center absolute -top-16 justify-center w-full">
              <Image
                source={avatar.businessman}
                resizeMode="contain"
                className="w-36 h-36 shadow rounded-full"
              />
            </View>
            <TouchableOpacity
              onPress={() => router.back()}
              className="absolute top-5 left-5"
            >
              <Image
                onPress={() => router.back()}
                source={icons.back}
                resizeMode="contain"
                className="w-6 h-6 opacity-75"
              />
            </TouchableOpacity>
            <TouchableOpacity className="absolute top-5 right-5">
              <Image
                source={icons.edit}
                resizeMode="contain"
                className="w-6 h-6 opacity-75"
              />
            </TouchableOpacity>
            <Text className="text-center font-psemibold text-gray-600 text-2xl pb-4">
              Israel De Vera
            </Text>
            <Text className="text-center font-pregular text-gray-500 text-lg">
              P-3 Macabayao Jimenez, Misamis Occidental
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
