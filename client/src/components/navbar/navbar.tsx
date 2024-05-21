/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, InputAdornment, TextField, styled } from "@mui/material";
import { Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";

const Title = styled(Typography)({
  margin: 0,
  fontWeight: "bold",
});

const items: MenuProps["items"] = [
  {
    label: "Manage Account",
    key: "0",
  },
  {
    label: "My Wishlist",
    key: "1",
  },
  {
    label: <a href="/login">Login</a>,
    key: "2",
  },
  {
    type: "divider",
  },
  {
    label: "Logout",
    key: "3",
  },
];

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
        <Link to="/">
          <Title>Home</Title>
        </Link>

        <Link to="/about">
          <Title>About</Title>
        </Link>

        <Link to="/contact">
          <Title>Contact</Title>
        </Link>
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

        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <AccountIcon fontSize="large" />
          </a>
        </Dropdown>
      </Box>
    </Box>
  );
};
