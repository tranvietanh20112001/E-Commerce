export interface IProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
}

export interface IDeleteProductPayload {
  _id: string;
}
