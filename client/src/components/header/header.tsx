import { Box } from "@mui/material";
import { Typography as Text } from "antd";

export const Header = () => {
  return (
    <Box
      width={"100%"}
      height={"48px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ backgroundColor: "black" }}
    >
      <Text style={{ color: "white" }}>E-Commerce by TVA</Text>
    </Box>
  );
};
