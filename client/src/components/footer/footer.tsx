import { Box, InputAdornment, TextField, styled } from "@mui/material";
import { Typography } from "antd";
import { SendOutlined } from "@ant-design/icons";
import {
  createTheme,
  ThemeProvider,
  Theme,
  useTheme,
} from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

const Text = styled(Typography)({
  color: "white",
  margin: "24px 0",
  fontSize: "16px",
});

const Title = styled(Typography)({
  color: "white",
  fontSize: "30px",
});

const InputField = styled(TextField)({
  color: "white",
  borderColor: "white",
});

const customTheme = (outerTheme: Theme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
            "& label": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

export const Footer = () => {
  const outerTheme = useTheme();
  return (
    <Box
      width={"100%"}
      sx={{ backgroundColor: "black" }}
      height={"440px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      marginTop={"20px"}
    >
      <Box width={"90%"} display={"flex"} justifyContent={"space-between"}>
        <Box>
          <Title>Exclusive</Title>
          <Text>Subscribe</Text>
          <Text>Get 10% for the first Order</Text>
          <ThemeProvider theme={customTheme(outerTheme)}>
            <InputField
              id="input-with-icon-textfield"
              label="Enter Your Email Address"
              sx={{ color: "white" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ color: "white" }}>
                    <SendOutlined />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </ThemeProvider>
        </Box>
        <Box width={"175px"}>
          <Title>Support</Title>
          <Text>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</Text>
          <Text>exclusive@gmail.com</Text>
          <Text>0123456789</Text>
        </Box>
        <Box>
          <Title>Account</Title>
          <Text>My Account</Text>
          <Text>Login/Register</Text>
          <Text>Cart</Text>
          <Text>Wishlist</Text>
        </Box>
        <Box>
          <Title>Quick Link</Title>
          <Text>About Us</Text>
          <Text>Contact Us</Text>
          <Text></Text>
          <Text></Text>
        </Box>
        <Box>
          <Title>Social Link</Title>
          <Text>Facebook</Text>
          <Text>Twitter</Text>
          <Text>Instagram</Text>
          <Text>Github</Text>
        </Box>
      </Box>
    </Box>
  );
};
