import { useEffect, useState } from "react";
import { Image, ScrollView, View } from "react-native";

import { api } from "../../api";
import banner01 from "../../assets/banner-01.png";
import banner02 from "../../assets/banner-02.png";
import { ProductsProps } from "../../@types/products";
import { Header } from "../../components/common/Header";
import { ProductList } from "../../components/common/ProductList";

import { styles } from "./styles";

export const Home = () => {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const getProducts = async () => {
    try {
      const response = await api.get("/products");

      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />

      <View style={styles.content}>
        <View style={styles.wrapperBanners}>
          <Image source={banner01} style={styles.banners} />
        </View>

        <ProductList title="Mais vendidos" products={products} />

        <View style={styles.wrapperBanners}>
          <Image source={banner02} style={styles.banners} />
        </View>
      </View>
    </ScrollView>
  );
};
