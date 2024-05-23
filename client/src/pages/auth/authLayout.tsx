import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Box } from "@mui/material";
import { Navbar } from "../../components/navbar/navbar";
import { Divider } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/index.store";
const AuthLayout = () => {
  const [searchParams] = useSearchParams();
  const { user } = useSelector((state: RootState) => state.users);
  return (
    <>
      <Header />
      <Box width={"100%"} display={"flex"} justifyContent={"center"}>
        <Box width={"90%"}>
          <Navbar />
          <Divider />
          {user && <Navigate to={searchParams.get("redirect") || "/home"} />}
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </>
  );
};
export default AuthLayout;
