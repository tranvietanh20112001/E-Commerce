import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
  username: Yup.string()
    .min(8, "Your usename must be at least 8 characters!")
    .max(50, "Your usename must be less than 50 characters!")
    .required("Usename is required!"),
  first_name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "First name is not valid")
    .required("First name is required!"),
  last_name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Last name is not valid")
    .required("Last name is required!"),
  password: Yup.string()
    .min(8, "Your password must be at least 8 characters!")
    .required("Password is required!"),
  phone: Yup.string()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Phone number is not valid")
    .required("Phone number is required!"),
});

export const UpdateProfileSchema = Yup.object().shape({
  first_name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "First name is not valid")
    .required("First name is required!"),
  last_name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Last name is not valid")
    .required("Last name is required!"),
  phone: Yup.string()
    .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Phone number is not valid")
    .required("Phone number is required!"),
});
