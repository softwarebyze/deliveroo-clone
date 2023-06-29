import React from "react";
import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CategoryCard */}
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Tessting" />
      <CategoryCard
        imgUrl="https://links.papareact.com/wru"
        title="Tessting 2"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/wru"
        title="Tessting 3"
      />
    </ScrollView>
  );
};

export default Categories;
