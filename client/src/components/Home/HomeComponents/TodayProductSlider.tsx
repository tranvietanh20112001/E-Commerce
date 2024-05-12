import { Box, Typography } from "@mui/material";
import TimeCount from "./TimeCount";
import ProductList from "./ProductList";
const TodayProductSlider = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          marginTop: "20px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "20px",
            height: "40px",
            backgroundColor: "red",
            borderRadius: "4px",
            marginRight: "10px",
          }}
        />
        <Typography variant="h6" color={"red"} fontWeight={"bold"}>
          Today's Deals
        </Typography>
      </Box>
      <Box sx={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
        <Typography variant="h5">Flash Sale</Typography>
        <TimeCount />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <ProductList />
      </Box>
    </Box>
  );
};

export default TodayProductSlider;
