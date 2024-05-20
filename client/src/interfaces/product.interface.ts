export interface IProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
}

export interface ICreateProductPayload {
  _id: string;
  name: string;
  price: number;
  description: string;
}

export interface IDeleteProductPayload {
  _id: string;
}
