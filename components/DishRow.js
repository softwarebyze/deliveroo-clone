import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { formatCurrency } from "react-native-format-currency";

const DishRow = ({ key, id, name, description, price, image_url }) => {
  const [priceWithCurrencySymbol, priceWithoutCurrencySymbol, currencySymbol] =
    formatCurrency({
      amount: price,
      code: "USD",
    });
  return (
    <TouchableOpacity className="bg-white border p-4 border-gray-200">
      <View className="flex-row">
        <View className="flex-1 pr-2">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="text-gray-400 mt-2">{priceWithCurrencySymbol}</Text>
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
  );
};

export default DishRow;
