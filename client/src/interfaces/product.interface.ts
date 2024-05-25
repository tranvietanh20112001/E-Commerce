export interface IProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageURL?: string;
  created_at: Date;
  updated_at: Date;
  category: string;
  stock_quantity: number;
  sold: number;
  rating: number;
}
export interface ProductsState {
  items: IProduct[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface ICreateProductPayload {
  name: string;
  price: number;
  description: string;
  image?: File;
}

export interface IDeleteProductPayload {
  _id: string;
}
