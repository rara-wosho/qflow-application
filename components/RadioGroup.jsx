import { View, Text } from "react-native";
import { RadioGroup, RadioButton } from "react-native-ui-lib";

const RadioGroupComponent = ({ label, options, color, initialValue }) => {
  return (
    <View className="mb-5 border-b pb-3 border-gray-200">
      <Text className="mb-[5px] text-gray-600 font-pregular">{label}</Text>
      <RadioGroup
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          flexWrap: "wrap",
        }}
        initialValue={initialValue}
      >
        {options.map((option, index) => (
          <View
            key={index} // Use a unique key for each item
            className="border-gray-300 border rounded-full p-1"
            style={{
              alignSelf: "flex-start",
            }}
          >
            <RadioButton
              value={option.value}
              label={option.label}
              labelStyle={{ marginLeft: 6 }}
              size={20}
              color={color}
              containerStyle={{ paddingRight: 6 }}
            />
          </View>
        ))}
      </RadioGroup>
    </View>
  );
};

export default RadioGroupComponent;
