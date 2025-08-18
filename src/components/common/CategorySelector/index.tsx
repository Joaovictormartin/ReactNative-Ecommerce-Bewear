import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

import { CategoriesProps } from "../../../@types/categories";
import { NavigationCategoryProps } from "../../../@types/appStack";

import { styles } from "./styles";

interface CategorySelectorProps {
  categories: CategoriesProps[];
}

export const CategorySelector = ({ categories }: CategorySelectorProps) => {
  const { navigate } = useNavigation<NavigationCategoryProps>();

  const handleSelectCategory = (slug: string) => {
    navigate("Category", { slug });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            activeOpacity={0.7}
            style={styles.buttonCategory}
            onPress={() => handleSelectCategory(category.slug)}
          >
            <Text style={styles.textButtonCategory}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
