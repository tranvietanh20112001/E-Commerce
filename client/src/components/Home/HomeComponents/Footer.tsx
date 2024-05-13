import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Box>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "48px",
          borderTop: "1px solid lightgray",
        }}
      >
        <Typography>© 2022 E-Commerce. All rights reserved.</Typography>
      </Box>
    </>
  );
};

export default Footer;
