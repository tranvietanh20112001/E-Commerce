import { RootState } from "@stores/index.store";
import { useSelector } from "react-redux";
import { Form, Field, Formik, useFormikContext } from "formik";
import { Box, Button, TextField } from "@mui/material";
import { UpdateProfileSchema } from "@validations/user.validation";
import { IUpdateUserByIdPayload, IUser } from "@interfaces/user.interface";
import { useEffect } from "react";
const Account = () => {
  const { user } = useSelector((state: RootState) => state.users);

  if (!user) return null;

  const initialValues: Partial<IUpdateUserByIdPayload> = {
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    phone_number: user?.phone_number || "",
  };

  const onHandleSumbit = (values: Partial<IUpdateUserByIdPayload>) => {
    console.log(values);
  };

  return (
    <>
      <Box display={"flex"} width={"100%"}>
        <Box width={"50%"}></Box>
        <Box width={"50%"}>
          <Formik
            initialValues={initialValues}
            onSubmit={onHandleSumbit}
            validationSchema={UpdateProfileSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <UserDetailUpdater user={user} />
                <Box
                  width={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  sx={{ gap: "12px" }}
                >
                  <Field
                    as={TextField}
                    id="username"
                    name="username"
                    label="Username"
                    variant="outlined"
                    fullWidth
                    disabled
                  />
                  <Field
                    as={TextField}
                    id="first_name"
                    name="first_name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                  />
                  {/* {errors.first_name && touched.first_name ? (
                    <div>{errors.first_name}</div>
                  ) : null} */}
                  <Field
                    as={TextField}
                    id="last_name"
                    name="last_name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                  />
                  {/* {errors.last_name && touched.last_name ? (
                    <div>{errors.last_name}</div>
                  ) : null} */}
                  <Field
                    as={TextField}
                    id="phone_number"
                    name="phone_number"
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                  />
                  {errors.phone_number && touched.phone_number ? (
                    <div>{errors.phone_number}</div>
                  ) : null}
                </Box>

                <Button type="submit">Submit</Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
};

export default Account;

function UserDetailUpdater({ user }: { user: IUser }) {
  const { setValues } = useFormikContext();

  useEffect(() => {
    if (!user) return;
    setValues({
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      phone_number: user.phone_number,
    });
  }, [user, setValues]);

  return "";
}
