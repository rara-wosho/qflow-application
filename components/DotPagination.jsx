import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";

const DotPagination = ({ activePage, setActivePage, totalPage }) => {
  return (
    <View className="pt-5 flex-row items-center justify-between">
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={activePage === 1}
        className={`bg-primary rounded-xl p-3 ${
          activePage === 1 && "opacity-50"
        }`}
        onPress={() => setActivePage(activePage - 1)}
      >
        <Text className=" text-white">Prev</Text>
      </TouchableOpacity>
      <View className="flex-row">
        <View
          className={`${
            activePage == 1 ? "px-2 bg-primary" : "px-1 bg-slate-300"
          }  mx-1 py-1 rounded-full`}
        ></View>
        <View
          className={`${
            activePage == 2 ? "px-2 bg-primary" : "px-1 bg-slate-300"
          }  mx-1 py-1 rounded-full`}
        ></View>
        <View
          className={`${
            activePage == 3 ? "px-2 bg-primary" : "px-1 bg-slate-300"
          }  mx-1 py-1 rounded-full`}
        ></View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={activePage === totalPage}
        className={`bg-primary rounded-xl p-3 ${
          activePage === totalPage && "opacity-50"
        }`}
        onPress={() => setActivePage(activePage + 1)}
      >
        <Text className=" text-white">Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DotPagination;
