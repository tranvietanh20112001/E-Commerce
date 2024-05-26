import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../stores/index.store";
import { getProducts } from "../../../stores/product.store";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ProductRow from "./ProductRow";
import { Button } from "antd";
import AddNewProductModal from "./Modal/AddNewProductModal";
import React from "react";
const ProductList = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const [openAddNewProductModal, setOpenAddNewProductModal] =
    React.useState(false);
  const handleOpenAddNewProductModal = () => setOpenAddNewProductModal(true);
  const handleCloseAddNewProductModal = () => setOpenAddNewProductModal(false);

  return (
    <>
      <TableContainer
        sx={{
          mt: "10px",
        }}
      >
        <Box display={"flex"} width={"100%"} justifyContent={"space-between"}>
          <Typography variant="h6" component="h2">
            Products
          </Typography>
          <Button onClick={handleOpenAddNewProductModal}>Add Product</Button>
        </Box>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Product</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <ProductRow key={product._id} product={product} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <AddNewProductModal
        open={openAddNewProductModal}
        handleClose={handleCloseAddNewProductModal}
      />
    </>
  );
};

export default ProductList;
