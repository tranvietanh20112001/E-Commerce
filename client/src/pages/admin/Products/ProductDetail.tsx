import {
  IProduct,
  IUpdateProductByIdPayload,
} from "@interfaces/product.interface";
import { Box, Button, TextField } from "@mui/material";
import { AppDispatch, RootState } from "@stores/index.store";
import { getProductById, updateProductById } from "@stores/product.store";
import { Typography } from "antd";
import { Image } from "antd";
import { Field, Form, Formik, useFormikContext } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const { Title } = Typography;
const ProductDetail = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { product } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [dispatch, id]);

  if (!product) return <div>No product found</div>;

  const initialValues: IUpdateProductByIdPayload = {
    _id: product?._id,
    name: product?.name,
    price: product?.price,
    description: product?.description,
    category: product?.category,
    stock_quantity: product?.stock_quantity,
  };

  const onHandleSumbit = (values: IUpdateProductByIdPayload) => {
    dispatch(
      updateProductById({ productId: product?._id, productData: values })
    ).then(() => {
      console.log("Update successfully");
      window.location.reload();
    });
  };

  return (
    <>
      <Title level={4}>Product Detail</Title>
      <Box width={"100%"} display={"flex"}>
        <Box width={"50%"}>
          <Image src={product?.imageURL} height={"450px"} width={"100%"} />
        </Box>

        <Box
          width={"50%"}
          display={"flex"}
          flexDirection={"column"}
          gap={"12px"}
        >
          <Formik initialValues={initialValues} onSubmit={onHandleSumbit}>
            <Form>
              <ProductDetailUpdater product={product} />
              <Box
                width={"100%"}
                display={"flex"}
                flexDirection={"column"}
                height={"450px"}
                justifyContent={"space-between"}
              >
                <Field
                  as={TextField}
                  id="id"
                  name="id"
                  label="Product ID"
                  variant="outlined"
                  fullWidth
                  disabled
                />
                <Field
                  as={TextField}
                  id="name"
                  name="name"
                  label="Product Name"
                  variant="outlined"
                  fullWidth
                />
                <Field
                  as={TextField}
                  id="price"
                  name="price"
                  label="Product Price"
                  variant="outlined"
                  fullWidth
                />
                <Field
                  as={TextField}
                  id="description"
                  name="description"
                  label="Product Description"
                  variant="outlined"
                  fullWidth
                />

                <Field
                  as={TextField}
                  id="category"
                  name="category"
                  label="Product Category"
                  variant="outlined"
                  fullWidth
                />

                <Field
                  as={TextField}
                  id="stock_quantity"
                  name="stock_quantity"
                  label="Product Stock Quantity"
                  variant="outlined"
                  fullWidth
                />

                <Button type="submit" variant="contained" fullWidth>
                  Save
                </Button>
              </Box>
            </Form>
          </Formik>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetail;

function ProductDetailUpdater({ product }: { product: IProduct }) {
  const { setValues } = useFormikContext();

  useEffect(() => {
    if (!product) return;
    setValues({
      id: product._id,
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category,
      stock_quantity: product.stock_quantity,
    });
  }, [product, setValues]);

  return "";
}
