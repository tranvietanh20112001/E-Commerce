import { IProduct } from "@interfaces/product.interface";
import { Box, styled } from "@mui/material";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;
export interface IProductCardProps {
  product: IProduct;
}

const ImageContainer = styled(Box)(`
  width:270px;
          height:270px;
`);
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
        <ImageContainer
          sx={{
            backgroundImage: `url(${product.imageURL})`,
            backgroundSize: "cover",
            position: "relative",
            display: "inline-block",
          }}
        >
          <Box
            width={"100%"}
            height={"41px"}
            sx={{
              backgroundColor: "black",
              opacity: "0",
              transition: "0.25s",
              "&:hover": {
                opacity: 0.8,
              },
              cursor: "pointer",
            }}
            borderRadius={"0 0 4px 4px"}
            position={"absolute"}
            bottom={0}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            onClick={() => alert("Add to cart")}
          >
            <Text style={{ fontWeight: "bold", color: "white" }}>
              Add To Cart
            </Text>
          </Box>
        </ImageContainer>

        <Title level={4} style={{ margin: 0 }}>
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
