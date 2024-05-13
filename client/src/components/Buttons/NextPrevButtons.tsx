import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Box } from "@mui/material";
import styled from "styled-components";
interface NextPrevButtonsProps {
  onNext: () => void;
  onPrevious: () => void;
}

const NPButton = styled.button`
  border: none;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #f5f5f5;
  color: black;
`;
const NextPrevButtons: React.FC<NextPrevButtonsProps> = ({
  onNext,
  onPrevious,
}) => {
  return (
    <>
      <Box>
        <NPButton onClick={onPrevious}>
          <NavigateBeforeIcon />
        </NPButton>
        <NPButton onClick={onNext}>
          <NavigateNextIcon />
        </NPButton>
      </Box>
    </>
  );
};

export default NextPrevButtons;
