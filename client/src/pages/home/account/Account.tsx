import { AppDispatch, RootState } from "@stores/index.store";
import { useDispatch, useSelector } from "react-redux";
import { Form, Field, Formik, useFormikContext } from "formik";
import { Box, Button, TextField } from "@mui/material";
import { IUpdateUserByIdPayload, IUser } from "@interfaces/user.interface";
import { useEffect } from "react";
import { findUserById, updateUserById } from "@stores/user.store";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Account = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  if (id)
    try {
      useEffect(() => {
        dispatch(findUserById(id));
      }, [dispatch, id]);
    } catch (error) {
      navigate("/error");
      console.log(error);
    }
  if (!user) {
    return null;
  }

  const initialValues: IUpdateUserByIdPayload = {
    _id: user?._id || "",
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    phone_number: user?.phone_number || "",
  };

  const onHandleSumbit = (values: IUpdateUserByIdPayload) => {
    dispatch(updateUserById({ _id: user?._id, payload: values })).then(() => {
      console.log("Update successfully");
      window.location.reload();
    });
  };

  return (
    <>
      <Box display={"flex"} width={"100%"}>
        <Box width={"50%"}></Box>
        <Box width={"50%"}>
          <Formik initialValues={initialValues} onSubmit={onHandleSumbit}>
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
                  id="_id"
                  name="_id"
                  label="ID"
                  variant="outlined"
                  fullWidth
                  disabled
                />
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

                <Field
                  as={TextField}
                  id="last_name"
                  name="last_name"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                />

                <Field
                  as={TextField}
                  id="phone_number"
                  name="phone_number"
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Button variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </Form>
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
      _id: user._id,
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      phone_number: user.phone_number,
    });
  }, [user, setValues]);

  return "";
}
