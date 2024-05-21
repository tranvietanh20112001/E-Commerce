import { Box, Button, TextField } from "@mui/material";
import { Image } from "antd";
import banner5 from "../../../assets/banner5.jpg";
import { Typography } from "antd";
import { Link } from "@mui/material";

const { Title, Text } = Typography;
export const Login = () => {
  return (
    <Box width={"100%"} display={"flex"}>
      <Box width={"50%"}>
        <Image
          src={banner5}
          style={{ width: "100%", height: "100%" }}
          preview={false}
        />
      </Box>
      <Box
        width={"50%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Box>
          <Title level={1}>Log in to Exclusive</Title>
          <Text>Enter your details below</Text>
          <Box marginTop={"24px"}>
            <TextField
              id="standard-basic"
              label="Email or Phone Number"
              variant="standard"
              fullWidth
            />
          </Box>
          <Box marginTop={"24px"}>
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              fullWidth
            />
          </Box>

          <Box
            width="100%"
            marginTop={"24px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button variant="contained" color="error">
              Login
            </Button>
            <Text color="gray">Forgot Password?</Text>
          </Box>
          <Box textAlign={"center"} width="100%" marginTop={"24px"}>
            <Link underline="hover" href="/register">
              You don't have account? Register here
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
