import { Box, Button, TextField } from "@mui/material";
import { Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;
export const Register = () => {
  const navigate = useNavigate();
  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Box>
        <Title level={1}>Create an account</Title>
        <Text>Enter your details below</Text>
        <Box marginTop={"24px"}>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            fullWidth
          />
        </Box>
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
          <Button variant="contained" color="error" fullWidth>
            Login
          </Button>
        </Box>
        <Box textAlign={"center"} width="100%" marginTop={"24px"}>
          <Button
            onClick={() => {
              navigate("/login");
            }}
          >
            You aldready have an account? Login here
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
