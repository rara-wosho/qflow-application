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
    <View className={`${containerStyles}`}>
      <View className="relative border-gray-300 border rounded-xl justify-center">
        <Text className="absolute -top-3 left-2 bg-white px-2 font-pregular text-gray-500 mb-1 text-base">
          {title}
        </Text>
        <TextField
          showClearButton
          containerStyle={{
            paddingHorizontal: 15,
            paddingVertical: 18,
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
    // <View className={`space-y-1 mb-4 ${containerStyles}`}>
    //   <Text className="text-pregular text-primaryBlack opacity-70 text-lg">
    //     {title}
    //   </Text>
    //   <View
    //     className={`border-[1px] px-3 w-full rounded-xl ${
    //       isFocused ? "border-primary" : "border-gray-300"
    //     }`}
    //   >
    //     <TextInput
    //       style={{ height: 54 }}
    //       className="flex-1 text-gray-700 text-lg font-pregular"
    //       placeholder={placeholder}
    //       onFocus={() => setIsFocused(true)}
    //       onBlur={() => setIsFocused(false)}
    //       onChangeText={handleChangeText}
    //       value={value}
    //     />
    //   </View>
    // </View>
  );
};

export default FormField;
