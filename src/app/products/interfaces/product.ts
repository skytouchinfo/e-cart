export interface Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  gender: string;
  category: string;
  size?: number[] | null;
  color?: string[] | null;
  price: number;
  discountPrice?: number | null;
  is_in_inventory: boolean;
  items_left: number;
  imageURL: string;
  slug: string;
}

export interface ProductCount {
  inStock: number;
  outOfStock: number;
  total: number;
}
