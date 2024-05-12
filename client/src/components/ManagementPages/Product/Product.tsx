import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { CiSearch } from "react-icons/ci";
import InputAdornment from "@mui/material/InputAdornment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
// import AddNewFacultyModal from "./FacultyModal/AddNewFacultyModal";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../stores/index.store";
// import FacultyRow from "./FacultyRow/FacultyRow";
import { findallProducts } from "../../../stores/product.store";
import { Typography } from "@mui/material";
import Row from "./ProductRow";

const Product = () => {
  const { products } = useSelector((state: RootState) => state.productState);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(findallProducts({}));
  }, [dispatch]);

  // const [openAddNewFacultyModal, setOpenAddNewFacultyModal] =
  //   React.useState(false);
  // const handleOpenAddNewFacultyModal = () => setOpenAddNewFacultyModal(true);
  // const handleCloseAddNewFacultyModal = () => setOpenAddNewFacultyModal(false);

  return (
    <>
      <Typography variant="h5">Products</Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          "@media only screen and (max-width: 600px)": {
            display: "block",
          },
        }}
      >
        <Box component="form" noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CiSearch />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
            sx={{
              "@media only screen and (max-width: 600px)": {
                width: "100%",
              },
            }}
          />
        </Box>

        <Button
          variant="contained"
          size="medium"
          color="success"
          // onClick={handleOpenAddNewFacultyModal}
          sx={{
            "@media only screen and (max-width: 600px)": {
              width: "100%",
              mt: "10px",
            },
          }}
        >
          Add new
        </Button>
      </Box>

      <TableContainer
        sx={{
          mt: "10px",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">ID</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Decription</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <Row key={product._id} product={product} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <AddNewFacultyModal
        open={openAddNewFacultyModal}
        handleClose={handleCloseAddNewFacultyModal}
      /> */}
    </>
  );
};

export default Product;
