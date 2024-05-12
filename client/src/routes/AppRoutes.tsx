import Home from "../components/Home/Home";
import { Route, Routes } from "react-router";
import { managementRoutes } from "./managementRoutes";
import Layout from "../components/ManagementPages/layout/layout";
export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        {managementRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
    </Routes>
  );
}
