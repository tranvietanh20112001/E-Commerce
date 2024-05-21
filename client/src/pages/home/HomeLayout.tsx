import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Box } from "@mui/material";
import { Navbar } from "../../components/navbar/navbar";
import { Divider } from "antd";
const HomeLayout = () => {
  return (
    <>
      <Header />
      <Box width={"100%"} display={"flex"} justifyContent={"center"}>
        <Box width={"90%"}>
          <Navbar />
          <Divider />
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </>
  );
};
export default HomeLayout;
