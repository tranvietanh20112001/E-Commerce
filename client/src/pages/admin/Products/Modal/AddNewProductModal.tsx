import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Textarea } from "@mui/joy";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../stores/index.store";
import { Field, Form, Formik } from "formik";
import { ICreateProductPayload } from "@interfaces/product.interface";
import { addProduct } from "src/reducers/product.reducer";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 540,
  bgcolor: "background.paper",
  borderRadius: 4,
  p: 4,
  "@media only screen and (max-width: 600px)": {
    width: "90%",
  },
};

export default function ProductModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const [image, setImageProduct] = useState<File>();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const image = e.target.files[0];
    setImageProduct(image);
  };

  const initialValues: Partial<ICreateProductPayload> = {
    name: "",
    price: 0,
    description: "",
  };

  const handleSubmit = (values: Partial<ICreateProductPayload>) => {
    dispatch(addProduct({ ...values, image } as ICreateProductPayload))
      .unwrap()
      .then(() => handleClose());
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add new Product
        </Typography>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: 2,
                gap: "var(--s-4)",
              }}
            >
              {/* Name ------------------------------------- */}
              <Field
                as={TextField}
                label="Name"
                variant="outlined"
                name="name"
                id="name"
                size="small"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: 2,
                gap: "var(--s-4)",
              }}
            >
              {/* Price ------------------------------------- */}
              <Field
                as={TextField}
                label="Price"
                variant="outlined"
                name="price"
                id="price"
                size="small"
                type="number"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                mt: 2,
              }}
            >
              {/* Description ------------------ */}
              <Field
                as={Textarea}
                id="description"
                name="description"
                placeholder="Decription"
                variant="outlined"
              />
              {/* Banner Image ------------------ */}
              <Button variant="outlined" component="label">
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleFileChange}
                />
                {image ? image.name : "Select Banner Image"}
              </Button>
            </Box>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              sx={{ mt: 4, left: "40%" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Formik>
      </Box>
    </Modal>
  );
}
