import { View, Text } from "react-native";
import { TextField } from "react-native-ui-lib";

const InputElement = ({
  label,
  containerStyle,
  placeholder,
  icon,
  value,
  onChangeText,
}) => {
  return (
    <View className={`mb-2 ${containerStyle}`}>
      <Text className="mb-[2px] text-gray-600 font-pregular">{label}</Text>
      <View className="bg-gray-100 rounded-lg flex-row items-center">
        {icon && <View className="px-2 border-r border-gray-300">{icon}</View>}
        <TextField
          value={value}
          onChangeText={onChangeText}
          containerStyle={{ width: "100%" }}
          fieldStyle={{
            paddingVertical: 15,
            paddingHorizontal: 10,
          }}
          placeholder={placeholder}
          style={{ fontSize: 18 }}
        />
      </View>
    </View>
  );
};

export default InputElement;
