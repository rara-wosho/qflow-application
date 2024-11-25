import { useEffect } from "react";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, Tabs } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
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
    </Stack>
  );
};

export default RootLayout;
