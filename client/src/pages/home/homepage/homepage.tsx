import { useDispatch, useSelector } from "react-redux";
import Carousel from "./carousel/carousel";
import { AppDispatch, RootState } from "@stores/index.store";
import { getProducts } from "@stores/product.store";
import { useEffect } from "react";
import { Box } from "@mui/material";
import ProductCard from "@components/ProductCard/ProductCard";
import { Typography } from "antd";

const { Title } = Typography;

const Homepage = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Carousel />
      <Box
        width={"100%"}
        display={"flex"}
        gap={"4px"}
        alignItems={"center"}
        m={"40px 0"}
      >
        <Box
          width={"20px"}
          height={"40px"}
          borderRadius={"4px"}
          bgcolor={"#DB4444"}
        />
        <Title level={3} style={{ color: "#DB4444", margin: 0 }}>
          Our Products
        </Title>
      </Box>
      <Box width={"100%"} display={"flex"} gap={2} flexWrap={"wrap"}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Box>
    </>
  );
};

export default Homepage;
