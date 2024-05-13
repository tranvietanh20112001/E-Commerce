import { Box, Typography } from "@mui/material";
import { IProduct } from "@interfaces/product.interface";
import styled from "styled-components";

export interface IProductCard {
  product: IProduct;
}

const ProductImage = styled.img`
  width: 270px;
  height: 250px;
  border-radius: 4px;
`;

export default function ProductCard({ product }: IProductCard) {
  return (
    <Box sx={{ width: "270px", height: "350px", cursor: "pointer" }}>
      <ProductImage src={product.imageURL}></ProductImage>
      <Typography fontWeight={"bold"} margin={"10px 0"}>
        {product.name}
      </Typography>
      <Typography color={"red"}>${product.price}</Typography>
    </Box>
  );
}
