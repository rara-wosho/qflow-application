import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { TextField } from "react-native-ui-lib";
import React, { useState } from "react";

import Feather from "@expo/vector-icons/Feather";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  containerStyles,
  inputType,
}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <View className={`${containerStyles}`}>
      <View className="relative border-gray-300 border rounded-xl justify-cente bg-white">
        <View className="overflow-hidden rounded-lg absolute -top-3 left-1">
          <Text className="font-pregular bg-primaryBackground text-gray-500 px-2 text-base">
            {title}
          </Text>
        </View>
        <TextField
          value={value}
          onChangeText={handleChangeText}
          showClearButton={inputType !== "password"}
          containerStyle={{
            width: "100%",
          }}
          fieldStyle={{
            paddingVertical: 15,
            paddingHorizontal: 12,
          }}
          style={{
            fontSize: 18,
            color: "rgb(70,70,70)",
          }}
          placeholder={placeholder}
          secureTextEntry={!showPass && inputType === "password"}
          keyboardType={inputType == "numeric" ? "numeric" : ""}
        />

        {inputType === "password" && (
          <View className="absolute right-2 p-3">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => setShowPass((prevState) => !prevState)}
            >
              <Feather
                name={showPass ? "eye" : "eye-off"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default FormField;
