import { RootState, AppDispatch } from "../../../stores/index.store";
import { findallProducts } from "../../../stores/product.store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";
const ProductList = () => {
  const { products } = useSelector((state: RootState) => state.productState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findallProducts({}));
  }, [dispatch]);

  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(4);

  const showMoreProducts = () => {
    setSkip(skip + limit);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          paddingTop: "20px",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {products.slice(skip, skip + limit).map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </Box>
    </>
  );
};

export default ProductList;
