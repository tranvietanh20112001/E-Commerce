/* eslint-disable react-hooks/rules-of-hooks */
import { Button, TableCell, TableRow } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EyeIcon from "@mui/icons-material/Visibility";

import { IProduct } from "@interfaces/product.interface";
import DeleteProductModal from "./DeleteProductModal";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@stores/index.store";
import React from "react";
import { deleteProductById } from "src/reducers/product.reducer";

export interface IProductRowProps {
  product: IProduct;
}

export default function productRow({ product }: IProductRowProps) {
  const dispatch = useDispatch<AppDispatch>();

  const [openDeleteProductModal, setOpenDeleteProductModal] =
    React.useState(false);
  const handleOpenDeleteProductModal = () => setOpenDeleteProductModal(true);
  const handleCloseDeleteProductModal = () => setOpenDeleteProductModal(false);

  const handleDeleteProduct = () => {
    dispatch(deleteProductById({ _id: product._id }))
      .unwrap()

      .then(() => handleCloseDeleteProductModal());
  };

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          {product._id}
        </TableCell>
        <TableCell align="left">{product.name}</TableCell>
        <TableCell align="left">{product.price}</TableCell>
        <TableCell align="left">{product.description}</TableCell>
        <TableCell align="left">
          <Button
            variant="outlined"
            size="small"
            color="info"
            startIcon={<EyeIcon />}
            sx={{ mr: 4 }}
          >
            View
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="error"
            startIcon={<DeleteIcon />}
            onClick={handleOpenDeleteProductModal}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>

      <DeleteProductModal
        open={openDeleteProductModal}
        handleClose={handleCloseDeleteProductModal}
        onConfirmDelete={handleDeleteProduct}
      />
    </>
  );
}
