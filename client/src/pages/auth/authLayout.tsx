import { Navigate, Outlet, useSearchParams } from "react-router-dom";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Box } from "@mui/material";
import { Navbar } from "../../components/navbar/navbar";
import { Divider } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../stores/index.store";
import { Image } from "antd";
import banner5 from "@assets/banner5.jpg";
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
          <Box width={"100%"} display={"flex"}>
            <Box width={"50%"}>
              <Image
                src={banner5}
                style={{ width: "100%", height: "100%" }}
                preview={false}
              />
            </Box>
            <Box
              width={"50%"}
              height={"648px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Outlet />
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};
export default AuthLayout;
