import NextPrevButtons from "../../../../components/Buttons/NextPrevButtons";
import { Box, Typography } from "@mui/material";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import ComputerIcon from "@mui/icons-material/Computer";
import WatchIcon from "@mui/icons-material/Watch";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
const BoxStyled = {
  width: "170px",
  height: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  border: "1px solid lightgray",
  cursor: "pointer",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "#DB4444",
    color: "white",
  },
};
const Categories = () => {
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
          Categories
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography variant="h5">Browse By Category</Typography>
        </Box>

        <NextPrevButtons />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Box sx={BoxStyled}>
          <SmartphoneIcon fontSize="large" />
          <Typography variant="h6">Mobiles</Typography>
        </Box>

        <Box sx={BoxStyled}>
          <ComputerIcon fontSize="large" />
          <Typography variant="h6">Computers</Typography>
        </Box>

        <Box sx={BoxStyled}>
          <WatchIcon fontSize="large" />
          <Typography variant="h6">Watches</Typography>
        </Box>

        <Box sx={BoxStyled}>
          <HeadphonesIcon fontSize="large" />
          <Typography variant="h6">Headphones</Typography>
        </Box>

        <Box sx={BoxStyled}>
          <PhotoCameraIcon fontSize="large" />
          <Typography variant="h6">Camera</Typography>
        </Box>

        <Box sx={BoxStyled}>
          <SportsEsportsIcon fontSize="large" />
          <Typography variant="h6">Gaming</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Categories;
