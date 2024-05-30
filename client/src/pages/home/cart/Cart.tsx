import { Box, styled } from "@mui/material";
import { Typography } from "antd";
const Line = styled(Box)({
  width: "100%",
  height: "72px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const { Text } = Typography;
const Cart = () => {
  return (
    <Box width={"100%"} display={"flex"} flexDirection={"column"} gap={"12px"}>
      <Line>
        <Box
          width={"90%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text style={{ fontWeight: "bold" }}>Product</Text>
          <Text style={{ fontWeight: "bold" }}>Price</Text>
          <Text style={{ fontWeight: "bold" }}>Quantity</Text>
          <Text style={{ fontWeight: "bold" }}>Total</Text>
        </Box>
      </Line>
    </Box>
  );
};

export default Cart;
