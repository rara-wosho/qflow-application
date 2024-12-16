import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import PrimaryButton from "../../components/PrimaryButton";
import { LoaderScreen } from "react-native-ui-lib";

import icons from "../../constants/icons";

const ScanCode = () => {
  const router = useRouter();
  const [manualCode, setManualCode] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [codeLoading, setCodeLoading] = useState(false);

  const handleScan = () => {
    setCodeLoading(true);
    setTimeout(() => {
      setCodeLoading(false);
      router.replace({
        pathname: "/activeQueue",
        params: { queueCode: "Queue2365" }, // Pass parameters here
      });
    }, 2000);
  };
  const handlePress = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.replace({
        pathname: "/activeQueue",
        params: { queueCode: "Queue2365" }, // Pass parameters here
      });
    }, 2000);
  };

  return (
    <SafeAreaView className="h-full bg-primaryBackground">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full px-4 min-h-full justify-start pt-14 items-center">
          {codeLoading ? (
            <View className="p-7 rounded-3xl border-dashed border mb-4">
              <View className=" w-40 h-40">
                <LoaderScreen color="#a976e5" />
              </View>
            </View>
          ) : (
            <TouchableOpacity
              onPress={handleScan}
              className="p-7 rounded-3xl border-dashed border mb-4"
            >
              <Image
                className="w-40 h-40"
                source={icons.qr}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
          <Text className="font-psemibold mb-2 text-gray-600 text-2xl">
            Scan Queue Code
          </Text>
          <Text className="text-gray-600 text-center font-pregular text-base">
            Each queue has a unique code. Enter the code below to join the
            queue, or simply scan the QR code.
          </Text>

          <TextInput
            className="p-2 text-center text-base font-pregular bg-primaryBackground border-b-[1px] border-gray-500 mt-16"
            value={manualCode}
            placeholder="Enter the queue code manually"
            onChangeText={(e) => setManualCode(e)}
          />

          <PrimaryButton
            containerStyle={`rounded-xl mt-6 w-full ${
              manualCode ? "opacity-100" : "opacity-60"
            }`}
            title="Enter Now"
            isLoading={isLoading}
            handlePress={handlePress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScanCode;
