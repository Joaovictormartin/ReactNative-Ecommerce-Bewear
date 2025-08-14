import { useEffect, useState } from "react";
import { Image, ScrollView, View } from "react-native";

import banner01 from "../../assets/banner-01.png";
import banner02 from "../../assets/banner-02.png";

import { api } from "../../api";
import { ProductsProps } from "../../@types/products";
import { Header } from "../../components/common/Header";
import { Footer } from "../../components/common/Footer";
import { CategoriesProps } from "../../@types/categories";
import { ProductList } from "../../components/common/ProductList";
import { CategorySelector } from "../../components/common/CategorySelector";

import { styles } from "./styles";

export const Home = () => {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [categories, setCategories] = useState<CategoriesProps[]>([]);
  const [newlyCreatedProducts, setNewlyCreatedProducts] = useState<
    ProductsProps[]
  >([]);

  const getProducts = async () => {
    try {
      const response = await api.get("/products");
      if (response.status !== 200) return [];

      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const getCategories = async () => {
    try {
      const response = await api.get("/categories");
      if (response.status !== 200) return [];

      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const getData = async () => {
    const [products, categories] = await Promise.all([
      getProducts(),
      getCategories(),
    ]);

    setProducts(products);
    setCategories(categories);
    setNewlyCreatedProducts(newlyCreatedProducts.reverse());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <Header />

      <View style={styles.content}>
        <View style={styles.wrapperBanners}>
          <Image source={banner01} style={styles.banners} />
        </View>

        <ProductList title="Mais vendidos" products={products} />

        <View style={styles.wrapperCategorySelector}>
          <CategorySelector categories={categories} />
        </View>

        <View style={styles.wrapperBanners}>
          <Image source={banner02} style={styles.banners} />
        </View>

        <ProductList title="Novos produtos" products={newlyCreatedProducts} />

        <Footer />
      </View>
    </ScrollView>
  );
};
