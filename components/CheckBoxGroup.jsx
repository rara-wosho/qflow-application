import { View, Text, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-ui-lib";

const CheckBoxGroupComponent = ({
  label,
  options,
  color,
  handlePrioChange,
}) => {
  return (
    <View className="mb-5 border-b pb-3 border-gray-200">
      <Text className="mb-[5px] text-gray-600 font-pregular">{label}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        {options.map((option, index) => (
          <TouchableOpacity
            onPress={() => handlePrioChange(index)}
            activeOpacity={1}
            key={index}
            className="rounded-full p-1 "
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              alignSelf: "flex-start",
              borderColor: option.value ? color : "rgb(220,220,220)",
              borderWidth: 1.1,
            }}
          >
            <Checkbox
              value={option.value}
              size={20}
              color={option.value ? color : "rgb(220,220,220)"}
              borderRadius={50}
              onValueChange={() => handlePrioChange(index)}
            />
            <Text className="text-sm pr-1 font-pregular text-gray-700">
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CheckBoxGroupComponent;
