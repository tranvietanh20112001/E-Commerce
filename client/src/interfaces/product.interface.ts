export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageURL: string;
}

export interface IProductState {
  products: IProduct[];
  product: IProduct | null;
}

// Create a new product
export interface ICreateProductPayload {
  name: string;
  description: string;
  price: number;
  imageURL: string;
}

// Update a product
export interface IUpdateProductPayload {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageURL: string;
}

// Find products
export interface IFindProductsPayload {
  name?: string;
  skip?: number;
  limit?: number;
}

// Find a product by ID
export interface IFindProductByIdPayload {
  _id: string;
}

export interface IGetProductByIdPayload {
  _id: string;
}

// Delete a product
export interface IDeleteProductPayload {
  _id: string;
}
