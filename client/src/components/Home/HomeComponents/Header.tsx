import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "48px",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography>E-Commerce Example</Typography>
    </Box>
  );
};

export default Header;
