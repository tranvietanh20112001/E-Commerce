import { Box, InputAdornment, TextField, styled } from "@mui/material";
import { Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountIcon from "@mui/icons-material/AccountCircleOutlined";

const Title = styled(Typography)({
  margin: 0,
  fontWeight: "bold",
});
export const Navbar = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      marginTop={"20px"}
      height={"60px"}
    >
      <Title sx={{ fontSize: "24px" }}>Exclusive</Title>
      <Box
        display={"flex"}
        width={"20%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"100%"}
      >
        <Title>Home</Title>
        <Title>About</Title>
        <Title>Contact</Title>
      </Box>

      <Box
        display={"flex"}
        width={"30%"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"100%"}
      >
        <TextField
          label="What are you looking for ?"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchOutlined />
              </InputAdornment>
            ),
          }}
        />

        <CartIcon fontSize="large" />
        <AccountIcon fontSize="large" />
      </Box>
    </Box>
  );
};
