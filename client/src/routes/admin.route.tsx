import { IRoute } from "../interfaces/route.interface";
import ProductList from "../pages/admin/Products/ProductList";
export const AdminRoutes: IRoute[] = [
  {
    path: "admin/products",
    component: <ProductList />,
  },
];
