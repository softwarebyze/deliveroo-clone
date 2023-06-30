import React from "react";
import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import { db } from "../db";

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
      {db.categories.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </ScrollView>
  );
};

export default Categories;
