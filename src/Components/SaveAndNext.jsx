import React from "react";
import "../styles/option.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const SaveAndNext = () => {
  const navigate = useNavigate();

  return (
    <div className="bottomButtons">
      <Button variant="contained">Save</Button>
      <Button
        variant="contained"
        className="next"
        onClick={() => navigate("/summary")}
      >
        Next
      </Button>
    </div>
  );
};

export default SaveAndNext;
