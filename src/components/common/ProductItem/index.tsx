import { Image, Text, TouchableOpacity, View } from "react-native";

import { ProductsProps } from "../../../@types/products";
import { formatCentsToBRL } from "../../../helpers/money";

import { styles } from "./styles";

interface ProductItemProps {
  product: ProductsProps;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  const firstVariant = product.variants[0];

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: firstVariant.imageUrl }} style={styles.image} />

      <View style={styles.productInfo}>
        <Text numberOfLines={1} style={styles.name}>
          {product.name}
        </Text>
        <Text numberOfLines={1} style={styles.description}>
          {product.description}
        </Text>
        <Text numberOfLines={1} style={styles.price}>
          {formatCentsToBRL(firstVariant.priceInCents)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
