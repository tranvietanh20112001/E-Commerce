import { Box } from "@mui/material";
import { IProduct } from "@interfaces/product.interface";

export interface IProductCard {
  product: IProduct;
}

export default function ProductCard({ product }: IProductCard) {
  return (
    <Box sx={{ width: "270px", height: "350px" }}>
      <image></image>
    </Box>
  );
}
