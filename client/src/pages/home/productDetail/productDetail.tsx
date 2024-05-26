import { useParams } from "react-router-dom";
import { getProductById } from "@stores/product.store";
import { AppDispatch, RootState } from "@stores/index.store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { Divider, Image } from "antd";
import { Typography } from "antd";
import { Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import QuantityInput from "@components/QuantityInput/QuantityInput";
import PaidIcon from "@mui/icons-material/Paid";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
const { Title, Text } = Typography;
const productDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { product } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [dispatch, id]);

  if (!product) {
    return (
      <Box
        width={"100%"}
        height={"600px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        Loading...
      </Box>
    );
  }

  const inStockText = {
    text: product && product.stock_quantity > 0 ? "In Stock" : "Out of Stock",
    color: product && product.stock_quantity > 0 ? "green" : "red",
  };

  return (
    <>
      <Box
        width={"100%"}
        height={"600px"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box
          width={"170px"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Image
            src={product.imageURL}
            width={"100%"}
            height={"138px"}
            style={{ backgroundColor: "#F5F5F5" }}
          />
          <Image
            src={product.imageURL}
            width={"100%"}
            height={"138px"}
            style={{ backgroundColor: "#F5F5F5" }}
          />

          <Image
            src={product.imageURL}
            width={"100%"}
            height={"138px"}
            style={{ backgroundColor: "#F5F5F5" }}
          />
          <Image
            src={product.imageURL}
            width={"100%"}
            height={"138px"}
            style={{ backgroundColor: "#F5F5F5" }}
          />
        </Box>
        <Box width={"500px"} height={"100%"}>
          <Image
            src={product.imageURL}
            style={{ backgroundColor: "#F5F5F5" }}
            height={"100%"}
            width={"500px"}
          />
        </Box>
        <Box
          width={"400px"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Title level={3} style={{ margin: 0 }}>
            {product.name}
          </Title>
          <Text style={{ color: inStockText.color }}>{inStockText.text}</Text>
          <Title level={4} style={{ margin: 0 }}>
            ${product.price}
          </Title>
          <Text>{product.description}</Text>
          <Divider />
          <Box display={"flex"} justifyContent={"space-between"}>
            <QuantityInput />
            <Button type="primary">Add to cart</Button>
            <Button icon={<HeartOutlined />} />
          </Box>

          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            border={"1px solid black"}
            borderRadius={"4px"}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"90px"}
            >
              <LocalShippingIcon sx={{ fontSize: "24px" }} />
              <Text>Free Delivery</Text>
            </Box>

            <Divider style={{ margin: 0 }} />
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"90px"}
            >
              <PaidIcon sx={{ fontSize: "24px" }} />
              <Text style={{ margin: 0, fontSize: "20px" }}>
                Best price online
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default productDetail;
