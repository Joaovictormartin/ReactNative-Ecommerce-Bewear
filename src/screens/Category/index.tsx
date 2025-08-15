import { useEffect, useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { api } from "../../api";
import { ProductsProps } from "../../@types/products";
import { AppStackProps } from "../../@types/appStack";
import { Header } from "../../components/common/Header";
import { Footer } from "../../components/common/Footer";
import { CategoriesProps } from "../../@types/categories";
import { ProductItem } from "../../components/common/ProductItem";

import { styles } from "./styles";

type CategoryProps = NativeStackScreenProps<AppStackProps, "Category">;

export const Category = ({ route }: CategoryProps) => {
  const { slug } = route.params;
  const { goBack } = useNavigation();

  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [category, setCategory] = useState<CategoriesProps>();

  const getData = async (slug: string) => {
    try {
      const responseCategory = await api.get(`/categories?slug=${slug}`);
      if (responseCategory.status !== 200) return;

      const responseProducts = await api.get(
        `/products?categoryId=${responseCategory.data[0].id}`
      );
      if (responseProducts.status !== 200) return [];

      setProducts(responseProducts.data);
      setCategory(responseCategory.data[0]);
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    getData(slug);
  }, []);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.7} onPress={goBack}>
            <Feather name="arrow-left" size={24} color="#656565" />
          </TouchableOpacity>

          <Text style={styles.title}>{category?.name}</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.wrapperProducts}
        >
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              stylesItem={{ maxWidth: "45%" }}
              stylesImage={{ width: "auto", height: "auto", minHeight: 150 }}
            />
          ))}
        </ScrollView>

        <Footer />
      </View>
    </View>
  );
};
