import { EGender, IRegisterPayload } from "@interfaces/user.interface";

import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { AppDispatch } from "@stores/index.store";
import { register } from "@stores/user.store";
import { Typography } from "antd";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;

const initialValues: IRegisterPayload = {
  username: "",
  password: "",
  first_name: "",
  last_name: "",
  phone_number: "",
  is_admin: false,
  gender: EGender.Male,
};

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const onSubmit = (values: IRegisterPayload) => {
    console.log(values);
    dispatch(register(values)).then(() => {
      navigate("/");
    });
  };
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
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <Box marginTop={"24px"}>
              <Field
                as={TextField}
                id="username"
                name="username"
                label="Username"
                variant="standard"
                fullWidth
              />
            </Box>
            <Box marginTop={"24px"}>
              <Field
                as={TextField}
                type="password"
                id="password"
                name="password"
                label="Password"
                variant="standard"
                fullWidth
              />
            </Box>
            <Box marginTop={"24px"} display={"flex"} gap={"12px"}>
              <Field
                as={TextField}
                id="first_name"
                name="first_name"
                label="First Name"
                variant="standard"
              />
              <Field
                as={TextField}
                id="last_name"
                name="last_name"
                label="Last Name"
                variant="standard"
              />
            </Box>
            <Box marginTop={"24px"}>
              <Field
                as={Select}
                id="gender"
                name="gender"
                label="Gender"
                variant="standard"
                fullWidth
              >
                <MenuItem value={EGender.Male}>Male</MenuItem>
                <MenuItem value={EGender.Female}>Female</MenuItem>
                <MenuItem value={EGender.Other}>Other</MenuItem>
              </Field>
            </Box>
            <Box marginTop={"24px"}>
              <Field
                as={TextField}
                id="phone_number"
                name="phone_number"
                type="number"
                label="Phone Number"
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
              <Button variant="contained" color="error" type="submit" fullWidth>
                Register
              </Button>
            </Box>
          </Form>
        </Formik>
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
