import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { formatCurrency } from "react-native-format-currency";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";

const DishRow = ({ id, name, description, price, image_url }) => {
  const [isPressed, setIsPressed] = useState(false);

  const [priceWithCurrencySymbol, priceWithoutCurrencySymbol, currencySymbol] =
    formatCurrency({
      amount: price,
      code: "USD",
    });
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              {priceWithCurrencySymbol}
            </Text>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              source={{ uri: image_url }}
              className="h-20 w-20 rounded-sm"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <MinusCircleIcon size={40} />
            </TouchableOpacity>

            <Text>0</Text>

            <TouchableOpacity>
              <PlusCircleIcon size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
