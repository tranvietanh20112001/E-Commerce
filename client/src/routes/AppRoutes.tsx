import Home from "../components/Home/Home";
import { Route, Routes } from "react-router";

export default function AppRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
