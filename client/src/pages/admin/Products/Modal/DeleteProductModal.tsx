import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 4,
  p: 4,
  "@media only screen and (max-width: 600px)": {
    width: "90%",
  },
};

const DeleteProductModal = ({
  open,
  handleClose,
  onConfirmDelete,
}: {
  open: boolean;
  handleClose: () => void;
  onConfirmDelete: () => void;
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{ textAlign: "center" }}
        >
          Are you sure to delete this Product ?
        </Typography>

        <Box sx={{ mt: 4, display: "flex", justifyContent: "space-evenly" }}>
          <Button
            variant="contained"
            size="medium"
            color="success"
            onClick={handleClose}
          >
            No
          </Button>
          <Button
            variant="contained"
            size="medium"
            color="error"
            onClick={onConfirmDelete}
          >
            Yes
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteProductModal;
