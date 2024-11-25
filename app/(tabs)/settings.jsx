import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Settings = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView>
        <Text>Settings</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
