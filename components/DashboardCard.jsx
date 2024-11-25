import { View, Text, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function DashboardCard({ icon, title, containerStyle, link }) {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push(link)}
      className={`p-4 bg-white py-5 flex-1 shadow-2xl rounded-xl ${containerStyle} items-center space-y-3`}
    >
      <View className="">
        <Image source={icon} resizeMode="contain" className="w-10 h-10" />
      </View>
      <View>
        <Text className="font-pregular text-slate-700">{title}</Text>
      </View>
    </Pressable>
  );
}
