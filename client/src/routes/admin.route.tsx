import { IRoute } from "@interfaces/route.interface";
import ProductList from "@pages/admin/Products/ProductList";
import AuthorizedPage from "@components/AuthorizedPage/AuthorizedPage";
export const AdminRoutes: IRoute[] = [
  {
    path: "admin/products",
    component: (
      <AuthorizedPage>
        <ProductList />,
      </AuthorizedPage>
    ),
  },
];
