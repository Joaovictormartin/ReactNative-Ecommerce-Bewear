import { useNavigation } from "@react-navigation/native";
import { Image, ScrollView, TouchableOpacity } from "react-native";

import { ProductVariantProps } from "../../../../@types/products";
import { NavigationProductVariantProps } from "../../../../@types/appStack";

import { styles } from "./styles";

interface VariantSelectorProps {
  variants: ProductVariantProps[];
}

const VariantSelector = ({ variants }: VariantSelectorProps) => {
  const { push } = useNavigation<NavigationProductVariantProps>();

  const handleNavigateDetail = (slug: string) => {
    push("ProductVariant", { slug });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.variants}
    >
      {variants.map((variant) => (
        <TouchableOpacity
          key={variant.id}
          onPress={() => handleNavigateDetail(variant.slug)}
        >
          <Image
            style={styles.imageVariant}
            source={{ uri: variant.imageUrl }}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default VariantSelector;
