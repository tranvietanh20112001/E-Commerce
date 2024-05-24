import { Box, Button, TextField } from "@mui/material";

import { Typography } from "antd";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../stores/index.store";
import { ILoginPayload } from "@interfaces/user.interface";
import { Field, Form, Formik } from "formik";
import { login } from "../../../stores/user.store";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const initialValues: ILoginPayload = {
  username: "",
  password: "",
};

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (values: ILoginPayload) => {
    console.log(values);
    dispatch(login(values)).then(() => {
      navigate("/");
    });
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Box>
            <Title level={1}>Log in to Exclusive</Title>
            <Text>Enter your details below</Text>
            <Box marginTop={"24px"}>
              <Field
                as={TextField}
                id="username"
                name="username"
                label="Email or Phone Number"
                variant="standard"
                fullWidth
              />
            </Box>
            <Box marginTop={"24px"}>
              <Field
                as={TextField}
                id="password"
                name="password"
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
              <Button variant="contained" color="error" type="submit">
                Login
              </Button>
              <Text color="gray">Forgot Password?</Text>
            </Box>
            <Box textAlign={"center"} width="100%" marginTop={"24px"}>
              <Button onClick={() => navigate("/register")}>
                You don't have account? Register here
              </Button>
            </Box>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};
