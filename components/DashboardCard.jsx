import { View, Text, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function DashboardCard({ icon, title, containerStyle, link }) {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push(link)}
      className={` bg-white py-3 px-3 flex-1 shadow-2xl rounded-xl ${containerStyle} items-center space-y-2`}
    >
      <View className=" rounded-lg shadow-sm items-center">
        <Image source={icon} className="w-10 h-10" resizeMode="contain" />
      </View>
      <View>
        <Text className="font-pregular text-[14px] text-slate-700">
          {title}
        </Text>
      </View>
    </Pressable>
  );
}
