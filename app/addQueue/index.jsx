import { View, Text, ScrollView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import PrimaryButton from "../../components/PrimaryButton";
import AddQueueDetails from "../../components/AddQueueDetails";
import CheckBoxGroupComponent from "../../components/CheckBoxGroup";
import RadioGroupComponent from "../../components/RadioGroup";

import { db } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import {
  PRIORITY_OPTIONS,
  CAPACITY_OPTIONS,
  SORT_BY_OPTIONS,
} from "../../constants/queue-options";

const AddQueue = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [queueDetails, setQueueDetails] = useState({
    queueName: "Library Payment",
    queueCode: "2fjru3",
    location: "gym",
  });
  const [priorityOptions, setPriorityOptions] = useState(PRIORITY_OPTIONS);

  const handlePrioChange = (index) => {
    setPriorityOptions((prevPrio) =>
      prevPrio.map((option, i) =>
        i === index ? { ...option, value: !option.value } : option
      )
    );
  };

  const handleAddQueue = async () => {
    setIsLoading(true);
    if (
      !queueDetails.queueName ||
      !queueDetails.queueCode ||
      !queueDetails.location
    ) {
      setIsLoading(false);
      alert("Please fill in all required fields.");
      console.log("Please fill in all required fields.");
      return;
    }

    try {
      const queueCollection = collection(db, "queues");
      const payload = {
        ...queueDetails,
        priorityOptions: priorityOptions.filter((opt) => opt.value),
        createdAt: new Date(),
      };
      await addDoc(queueCollection, payload);
      setIsLoading(false);
      alert("Queue added successfully!");
      console.log("queue added");
    } catch (error) {
      setIsLoading(false);
      console.error("Error adding queue: ", error);
      alert("Failed to add queue.");
    }
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
              initialValue="no-one"
              label="Special priority (default : no one)"
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
      <View className="flex-row py-3 bg-primaryBackground px-4">
        <PrimaryButton
          containerStyle="rounded-xl flex-1"
          title="Add Queue"
          handlePress={handleAddQueue}
          isLoading={isLoading}
        />
      </View>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </SafeAreaView>
  );
};

export default AddQueue;
