import { DeleteOutlined, FileSearchOutlined } from "@ant-design/icons";
import {
  StyledTableCell,
  StyledTableRow,
} from "@components/AdminTable/AdminTable";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { AppDispatch, RootState } from "@stores/index.store";
import { getUsers } from "@stores/user.store";
import { Button } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export const Users = () => {
  const dispatch: AppDispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">First Name</StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>
              <StyledTableCell align="right">Username</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <StyledTableRow key={user._id}>
                <StyledTableCell component="th" scope="row">
                  {user._id}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {user.first_name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {user.last_name}
                </StyledTableCell>
                <StyledTableCell align="right">{user.username}</StyledTableCell>
                <StyledTableCell
                  align="right"
                  style={{ display: "flex", gap: "12px" }}
                >
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<DeleteOutlined />}
                    danger
                  />
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<FileSearchOutlined />}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
