import { Route, Routes } from "react-router";
import ProductList from "../pages/admin/Products/ProductList";
import { AdminRoutes } from "./admin.route";
import AdminLayout from "../pages/admin/AdminLayout";
export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route element={<AdminLayout />}>
        {AdminRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
    </Routes>
  );
}
