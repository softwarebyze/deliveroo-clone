import React from "react";
import { SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";

const PreparingOrderScreen = () => {
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
