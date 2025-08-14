type ProductVariant = {
  id: string;
  name: string;
  productId: string;
  color: string;
  imageUrl: string;
  priceInCents: number;
  slug: string;
};

export interface ProductsProps {
  id: string;
  name: string;
  slug: string;
  description: string;
  categoryId: string;
  variants: ProductVariant[];
}
