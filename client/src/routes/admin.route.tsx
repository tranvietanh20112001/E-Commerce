import { IRoute } from "@interfaces/route.interface";
import ProductList from "@pages/admin/Products/ProductList";
import AuthorizedPage from "@components/AuthorizedPage/AuthorizedPage";
import { Orders } from "@pages/admin/Orders/Orders";
import { Dashboard } from "@pages/admin/Dashboard/Dashboard";
import { Users } from "@pages/admin/Users/Users";
export const AdminRoutes: IRoute[] = [
  {
    path: "admin/products",
    component: (
      <AuthorizedPage>
        <ProductList />,
      </AuthorizedPage>
    ),
  },

  {
    path: "admin/dashboard",
    component: (
      <AuthorizedPage>
        <Dashboard />,
      </AuthorizedPage>
    ),
  },

  {
    path: "admin/orders",
    component: (
      <AuthorizedPage>
        <Orders />,
      </AuthorizedPage>
    ),
  },

  {
    path: "admin/users",
    component: (
      <AuthorizedPage>
        <Users />,
      </AuthorizedPage>
    ),
  },
];
