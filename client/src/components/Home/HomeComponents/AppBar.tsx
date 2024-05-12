import {
  Box,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const AppBar = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          margin: "40px 0 20px 0",
          height: "40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" fontWeight={"bold"}>
          Exclusive
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            justifyContent: "space-evenly",
            width: "300px",
          }}
        >
          <Link href="/" underline="hover" color="black">
            {"Home"}
          </Link>
          <Link href="/contact" underline="hover" color="black">
            {"Contact"}
          </Link>
          <Link href="/about" underline="hover" color="black">
            {"About"}
          </Link>
        </Box>

        <Box
          sx={{
            width: "450px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
          }}
        >
          <TextField
            id="outlined-basic"
            label="What are you looking for ?"
            variant="outlined"
            sx={{ width: "260px", padding: 0 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <ShoppingCartOutlinedIcon
            sx={{ fontSize: "40px", cursor: "pointer" }}
          />
          <AccountCircleOutlinedIcon
            sx={{ fontSize: "40px", cursor: "pointer" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default AppBar;
