import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { LoaderScreen } from "react-native-ui-lib";
import useLogout from "../custom-hooks/useLogout";
import { useRouter } from "expo-router";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";

const ProfileActions = () => {
  const router = useRouter();
  const { handleLogout, isLogoutLoading } = useLogout();
  const [editLoading, setEditLoading] = useState(false);

  return (
    <View className="items-center justify-center flex-row space-x-1">
      <View className=" w-20">
        {editLoading ? (
          <LoaderScreen color="#a976e5" />
        ) : (
          <TouchableOpacity
            onPress={() => router.push("/profile/editAccount")}
            className="py-3 items-center justify-center space-y-1"
          >
            <Feather name="edit" size={28} color="rgb(90,90,90)" />
            <Text className="font-pregular text-gray-600">Edit</Text>
          </TouchableOpacity>
        )}
      </View>
      <View className=" w-20">
        {isLogoutLoading ? (
          <LoaderScreen color="#a976e5" />
        ) : (
          <TouchableOpacity
            className="items-center justify-center space-y-1 py-3"
            onPress={handleLogout}
          >
            <MaterialIcons name="logout" size={28} color="red" />
            <Text className="font-pregular text-red-500">Log out</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ProfileActions;
