import { Button, TableCell, TableRow } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EyeIcon from "@mui/icons-material/Visibility";

import { IProduct } from "@interfaces/product.interface";

// import { useDispatch } from "react-redux";
// import { AppDispatch } from "../../../stores/index.store";
// import { deleteFaculty } from "@store/faculty";
// import { notifySuccess } from "@utils/notification.utils";
import { useNavigate } from "react-router";
export interface IProductRowProps {
  product: IProduct;
}

export default function Row({ product }: IProductRowProps) {
  //   const dispatch = useDispatch<AppDispatch>();

  //   const [openDeleteFacultyModal, setOpenDeleteFacultyModal] =
  //     React.useState(false);
  //   const handleOpenDeleteFacultyModal = () => setOpenDeleteFacultyModal(true);
  //   const handleCloseDeleteFacultyModal = () => setOpenDeleteFacultyModal(false);

  //   const handleDeleteFaculty = () => {
  //     dispatch(deleteFaculty({ _id: faculty._id }))
  //       .unwrap()
  //       .then(() => notifySuccess("You deleted faculty successfully"))
  //       .then(() => handleCloseDeleteFacultyModal());
  //   };
  const navigate = useNavigate();

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          {product._id}
        </TableCell>
        <TableCell align="left">{product.name}</TableCell>
        <TableCell align="left">{product.description}</TableCell>
        <TableCell align="left">{product.price}</TableCell>
        <TableCell align="left">
          <Button
            variant="outlined"
            size="small"
            color="info"
            startIcon={<EyeIcon />}
            sx={{ mr: 4 }}
            onClick={() => navigate(`${product._id}`)}
          >
            View
          </Button>
          <Button
            variant="outlined"
            size="small"
            color="error"
            startIcon={<DeleteIcon />}
            // onClick={handleOpenDeleteFacultyModal}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>

      {/* <DeleteFacultyModal
        open={openDeleteFacultyModal}
        handleClose={handleCloseDeleteFacultyModal}
        onConfirmDelete={handleDeleteFaculty}
      /> */}
    </>
  );
}
