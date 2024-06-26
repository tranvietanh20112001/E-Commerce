import { Route, Routes } from "react-router";
import { AdminRoutes } from "./admin.route";
import AdminLayout from "../pages/admin/AdminLayout";
import HomeLayout from "../pages/home/HomeLayout";
import { HomeRoutes } from "./home.route";
import AuthLayout from "../pages/auth/authLayout";
import { AuthRoutes } from "./auth.route";
export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        {HomeRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
      <Route element={<AdminLayout />}>
        {AdminRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
      <Route element={<AuthLayout />}>
        {AuthRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
    </Routes>
  );
}
