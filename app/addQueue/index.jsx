import { View, Text, ScrollView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AddQueueDetails from "../../components/AddQueueDetails";
import RadioGroupComponent from "../../components/RadioGroup";
import CheckBoxGroupComponent from "../../components/CheckBoxGroup";

import {
  PRIORITY_OPTIONS,
  CAPACITY_OPTIONS,
  SORT_BY_OPTIONS,
} from "../../constants/queue-options";

const AddQueue = () => {
  const [queueDetails, setQueueDetails] = useState({
    queueName: "Library Payment",
    queueCode: "2fjru3",
    location: "",
  });
  const [priorityOptions, setPriorityOptions] = useState(PRIORITY_OPTIONS);

  const handlePrioChange = (index) => {
    setPriorityOptions((prevPrio) =>
      prevPrio.map((option, i) =>
        i === index ? { ...option, value: !option.value } : option
      )
    );
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerStyle={{ minHeight: "100vh" }}>
        <View className="w-full min-h-full px-4">
          <AddQueueDetails
            queueDetails={queueDetails}
            setQueueDetails={setQueueDetails}
          />

          <View className="pb-3 pt-4">
            <Text className="font-psemibold text-primaryText-1 text-lg mb-2">
              Queue Customizations
            </Text>
            <CheckBoxGroupComponent
              label="Special priority for"
              options={priorityOptions}
              handlePrioChange={handlePrioChange}
              color="#c452e2"
            />

            <RadioGroupComponent
              label="Capacity"
              options={CAPACITY_OPTIONS}
              color="#5280e2"
              initialValue="no-limit"
            />

            <RadioGroupComponent
              label="Sorting Method"
              options={SORT_BY_OPTIONS}
              color="#e25252"
              initialValue="join-time"
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </SafeAreaView>
  );
};

export default AddQueue;
