import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { api } from "../../api";
import theme from "../../styles/theme";
import { AppStackProps } from "../../@types/appStack";
import { formatCentsToBRL } from "../../helpers/money";
import { ProductsProps, ProductVariantProps } from "../../@types/products";

import { Header } from "../../components/common/Header";
import { Footer } from "../../components/common/Footer";
import VariantSelector from "./components/VariantSelector";
import { ProductList } from "../../components/common/ProductList";

import { styles } from "./styles";

type Props = NativeStackScreenProps<AppStackProps, "ProductVariant">;

type ProductVariantWithProduct = ProductVariantProps & {
  product: ProductsProps;
};

export const ProductVariant = ({ route }: Props) => {
  const { slug } = route.params;
  const { black, gray } = theme.colors;

  const { goBack } = useNavigation();

  const [quantity, setQuantity] = useState<number>(1);
  const [likelyProducts, setLikelyProducts] = useState<ProductsProps[]>([]);
  const [productVariant, setProductVariant] =
    useState<ProductVariantWithProduct>();

  const getData = async (slug: string) => {
    try {
      const urlProductsVariant = `/productVariants?slug=${slug}`;
      const respProductsVariant = await api.get(urlProductsVariant);

      if (respProductsVariant.status !== 200) return [];

      const urlProduct = `/products?id=${respProductsVariant.data[0].productId}`;
      const respProduct = await api.get(urlProduct);

      if (respProduct.status !== 200) return [];

      const urlCategory = `/products?categoryId=${respProduct.data[0].categoryId}`;
      const respCategory = await api.get(urlCategory);

      if (respCategory.status !== 200) return [];

      const categoryFiltered = respCategory.data.filter(
        (item: ProductsProps) => item.id !== respProduct.data[0].id
      );

      setLikelyProducts(categoryFiltered);
      setProductVariant({
        ...respProductsVariant.data[0],
        product: respProduct.data[0],
      });
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);

  const handleDecrement = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddCart = () => {};
  const handleBuyNow = () => {};

  useEffect(() => {
    getData(slug);
  }, []);

  if (!productVariant || !likelyProducts) {
    return <ActivityIndicator size="large" color={black} />;
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
        >
          {/* Banner do produto */}
          <View style={styles.wrapperBanner}>
            <TouchableOpacity
              onPress={goBack}
              activeOpacity={0.7}
              style={styles.buttonBack}
            >
              <Feather name="arrow-left" size={24} color={gray} />
            </TouchableOpacity>

            <Image
              style={styles.imageBanner}
              source={{ uri: productVariant.imageUrl }}
            />
          </View>

          {/* Variações do produto */}
          <VariantSelector variants={productVariant.product?.variants} />

          {/*Info do produto */}
          <View>
            <Text numberOfLines={1} style={styles.name}>
              {productVariant.product?.name}
            </Text>
            <Text numberOfLines={1} style={styles.nameVariant}>
              {productVariant.name}
            </Text>
            <Text numberOfLines={1} style={styles.price}>
              {formatCentsToBRL(productVariant.priceInCents)}
            </Text>
          </View>

          {/* Quantidade do produto */}
          <View style={styles.quantity}>
            <Text style={styles.titleQuantity}>Quantidade</Text>

            <View style={styles.contentQuantity}>
              <TouchableOpacity activeOpacity={0.7} onPress={handleDecrement}>
                <Feather name="minus" size={20} color={gray} />
              </TouchableOpacity>

              <Text style={styles.textQuantity}>{quantity}</Text>

              <TouchableOpacity activeOpacity={0.7} onPress={handleIncrement}>
                <Feather name="plus" size={20} color={gray} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Ações do produto */}
          <View style={styles.buttonActions}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleAddCart}
              style={[styles.button, styles.addCart]}
            >
              <Text style={styles.textButtonAddCart}>Adicionar à sacola</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handleBuyNow}
              style={[styles.button, styles.buyNow]}
            >
              <Text style={styles.textButtonBuyNow}>Comprar agora</Text>
            </TouchableOpacity>
          </View>

          {/* Descrição do produto */}
          <Text style={styles.description}>
            {productVariant.product?.description}
          </Text>

          {/* Produtos relacionados */}
          <View style={styles.likelyProducts}>
            <ProductList
              products={likelyProducts}
              title="Você também pode gostar"
            />
          </View>

          <Footer />
        </ScrollView>
      </View>
    </View>
  );
};
