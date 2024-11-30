import { View, Text, TextInput } from "react-native";
import { TextField } from "react-native-ui-lib";
import React, { useState } from "react";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  containerStyles,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={` ${containerStyles}`}>
      <View className="relative border-gray-300 border rounded-xl justify-center">
        <Text className="absolute -top-3 left-2 bg-white px-2 font-pregular text-gray-500 mb-1 text-base">
          {title}
        </Text>
        <TextField
          showClearButton
          containerStyle={{
            width: "100%",
          }}
          fieldStyle={{
            paddingVertical: 15,
            paddingHorizontal: 10,
          }}
          style={{
            fontSize: 18,
          }}
          placeholder={placeholder}
          validateOnChange
          validate={["required", (value) => value.length > 0]}
          validationMessage={["Field is required", "Password is too short"]}
          maxLength={30}
        />
      </View>
    </View>
  );
};

export default FormField;
