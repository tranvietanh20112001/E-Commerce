import Product from "../components/ManagementPages/Product/Product";
import { IRoute } from "../interfaces/common.interfaces";

export const managementRoutes: IRoute[] = [
  {
    path: "manage/products",
    component: <Product />,
  },
];
