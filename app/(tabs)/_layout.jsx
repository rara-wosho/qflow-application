import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";

import icons from "../../constants/icons";
import { StatusBar } from "expo-status-bar";
const TabLayout = () => {
  const TabIcon = ({ icon, color, label, focused }) => {
    return (
      <View className="items-center justify-center relative">
        {focused && (
          <View className="h-[2px] w-10 rounded-full bg-primary absolute -top-[6px] "></View>
        )}
        <Image
          source={icon}
          className="w-6 h-6"
          resizeMode="contain"
          tintColor={focused ? color : "rgb(40,40,40)"}
        />
        <Text
          className={`text-xs font-pregular ${
            focused ? "text-primary" : "text-slate-800"
          }`}
        >
          {label}
        </Text>
      </View>
    );
  };
  return (
    <>
      <Tabs screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                icon={icons.home}
                label="Home"
                color="#a976e5"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="notification"
          options={{
            title: "Notification",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                icon={icons.bell}
                label="Notifications"
                color="#a976e5"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                icon={icons.settings}
                label="Settings"
                color="#a976e5"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar style="dark"></StatusBar>
    </>
  );
};

export default TabLayout;
