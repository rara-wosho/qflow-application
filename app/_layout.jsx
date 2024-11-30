import { useEffect } from "react";
import { TouchableOpacity, Text } from "react-native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useRouter } from "expo-router";

import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const router = useRouter();
  const [fontsLoaded, error] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="activeQueue/index"
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "#a976e5",
          title: "Queue",
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.push("activeQueue/queueDetails")}
            >
              <EvilIcons name="navicon" size={32} color="rgb(80,80,80) " />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="scanCode/index"
        options={{
          headerTitle: "Scan Code",
          headerBackTitleVisible: false,
          headerStyle: {
            height: 10,
            backgroundColor: "#fffaf5",
            borderBottomWidth: 0,
            shadowOpacity: 0,
          },
          headerTintColor: "#a976e5",
          title: "Scan Code",
          headerShown: true,
        }}
      />

      <Stack.Screen name="profile/index" />

      <Stack.Screen
        name="activeQueue/queueDetails"
        options={{
          presentation: "modal",
          headerShown: true,
          title: "Queue Details",
          headerTitleStyle: { color: "#a976e5" },
        }}
      />
      <Stack.Screen
        name="addQueue/index"
        options={{
          presentation: "modal",
          headerShown: true,
          title: "New Queue",
          headerTitleStyle: { color: "#a976e5" },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Text className="text-gray-600 font-pregular text-lg">
                Cancel
              </Text>
              {/* <AntDesign name="close" size={24} color="gray" /> */}
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

export default RootLayout;
