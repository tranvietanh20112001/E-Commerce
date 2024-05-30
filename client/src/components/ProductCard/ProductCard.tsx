import { IProduct } from "@interfaces/product.interface";
import { Box } from "@mui/material";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;
import { Image } from "antd";
export interface IProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProductCardProps) {
  const navigate = useNavigate();
  return (
    <>
      <Box
        width={"270px"}
        height={"350px"}
        display={"flex"}
        flexDirection={"column"}
        sx={{ cursor: "pointer" }}
        onClick={() => navigate(`/product/${product._id}`)}
      >
        <Image
          src={product.imageURL}
          height={"270px"}
          width={"100%"}
          style={{ backgroundColor: "#F5F5F5" }}
        />

        <Title level={5} style={{ margin: 0 }}>
          {product.name}
        </Title>
        <Text style={{ color: "red", fontWeight: "bold" }}>
          $ {product.price}
        </Text>
        <Text>Rating</Text>
      </Box>
    </>
  );
}
