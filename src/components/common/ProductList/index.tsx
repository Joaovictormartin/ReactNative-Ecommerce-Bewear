import { ScrollView, Text, View } from "react-native";

import { ProductItem } from "../ProductItem";
import { ProductsProps } from "../../../@types/products";

import { styles } from "./styles";

interface ProductListProps {
  title: string;
  products: ProductsProps[];
}

export const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
  );
};
