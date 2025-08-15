import {
  Text,
  View,
  Image,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TouchableOpacity,
} from "react-native";

import { ProductsProps } from "../../../@types/products";
import { formatCentsToBRL } from "../../../helpers/money";

import { styles } from "./styles";

interface ProductItemProps {
  product: ProductsProps;
  stylesItem?: StyleProp<ViewStyle>;
  stylesImage?: StyleProp<ImageStyle>;
}

export const ProductItem = ({
  product,
  stylesItem,
  stylesImage,
}: ProductItemProps) => {
  const firstVariant = product?.variants[0];

  return (
    <TouchableOpacity style={[styles.container, stylesItem]}>
      <Image
        style={[styles.image, stylesImage]}
        source={{ uri: firstVariant.imageUrl }}
      />

      <View>
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
