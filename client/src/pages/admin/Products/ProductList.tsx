import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../stores/index.store";
import { getProducts } from "../../../reducers/product.reducer";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ProductRow from "./ProductRow";
const ProductList = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <TableContainer
      sx={{
        mt: "10px",
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Decription</TableCell>
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
  );
};

export default ProductList;
