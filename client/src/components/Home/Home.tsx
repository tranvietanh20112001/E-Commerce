import Box from "@mui/material/Box";
import Header from "./HomeComponents/Header";
// import ProductList from "./HomeComponents/ProductList";
import AppBar from "./HomeComponents/AppBar";
import { Divider } from "@mui/material";
import TodayProductSlider from "./HomeComponents/today/TodayProductSlider";
import Categories from "./HomeComponents/Categories/Categories";
import Footer from "./HomeComponents/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "0 10%",
        }}
      >
        <AppBar />
        <Divider sx={{ width: "100%", height: "2px" }} />
        <TodayProductSlider />
        <Divider sx={{ width: "100%", height: "2px" }} />
        <Categories />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
