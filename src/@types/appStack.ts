import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AppStackProps = {
  Home: undefined;
  Category: { slug: string };
  ProductVariant: { slug: string };
};

export type NavigationCategoryProps = NativeStackNavigationProp<
  AppStackProps,
  "Category"
>;

export type NavigationProductVariantProps = NativeStackNavigationProp<
  AppStackProps,
  "ProductVariant"
>;
