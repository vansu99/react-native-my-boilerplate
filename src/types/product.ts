export interface Category {
  _id: string;
  name: string;
}

export interface ProductTypes {
  _id: string;
  images: string[];
  price: number;
  rating: number;
  price_before_discount: number;
  quantity: number;
  sold: number;
  view: number;
  name: string;
  category: Category;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ProductResponse = Array<ProductTypes>;
