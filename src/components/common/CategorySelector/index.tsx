import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

import { CategoriesProps } from "../../../@types/categories";

import { styles } from "./styles";

interface CategorySelectorProps {
  categories: CategoriesProps[];
}

export const CategorySelector = ({ categories }: CategorySelectorProps) => {
  const { navigate } = useNavigation();

  const handleSelectCategory = (category: CategoriesProps) => {
    if (!category) return;
    navigate("Category", { slug: category.slug });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            activeOpacity={0.7}
            style={styles.buttonCategory}
            onPress={() => handleSelectCategory(category)}
          >
            <Text style={styles.textButtonCategory}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
