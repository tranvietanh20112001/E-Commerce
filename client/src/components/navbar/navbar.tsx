import { Box, InputAdornment, TextField, styled } from "@mui/material";
import { Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import CartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser } from "@stores/user.store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@stores/index.store";
import { useEffect } from "react";
import Dropdown from "./dropdownButton/dropdownButton";
const Title = styled(Typography)({
  margin: 0,
  fontWeight: "bold",
});

export const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getCurrentUser(token));
    }
  }, [dispatch, navigate]);

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

        <CartIcon
          fontSize="large"
          onClick={() => navigate("/cart")}
          style={{ cursor: "pointer" }}
        />
        <Dropdown />
      </Box>
    </Box>
  );
};
