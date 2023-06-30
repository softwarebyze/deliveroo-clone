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
    <TouchableOpacity>
      <View>
        <Text className="text-lg mb-1">{name}</Text>
        <Text className="text-gray-400">{description}</Text>
        <Text className="text-gray-400 mt-2">{priceWithCurrencySymbol}</Text>
      </View>

      <View>
        <Image source={{ uri: image_url }} className="h-20 w-20 rounded-sm" />
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
