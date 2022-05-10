import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../styles/option.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function createData(
  name: string,
  option1: number,
  option2: number,
  option3: Number
) {
  return { name, option1, option2, option3 };
}

function createData2(
  name: string,
  option1: number,
  option2: number,
  option3: number,
  option4: number,
  option5: number,
  option6: number
) {
  return { name, option1, option2, option3, option4, option5, option6 };
}

const rows = [
  createData("problem Diagnosed", 0, 1, 0),
  createData("Physical Trauma", 1, 0, 0),
  createData("Mental Trauma", 0, 0, 1),
];

const rows2 = [createData2("problem Diagnosed", 0, 1, 0, 1, 0, 1)];

export default function Summary() {
  const navigate = useNavigate();

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Problems</TableCell>
              <TableCell align="right">Yes</TableCell>
              <TableCell align="right">No</TableCell>
              <TableCell align="right">Not Relevant</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.option1}</TableCell>
                <TableCell align="right">{row.option2}</TableCell>
                <TableCell align="right">{row.option3}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <br></br>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>How Often Experience the problem</TableCell>
              <TableCell align="right">Not Relevant</TableCell>
              <TableCell align="right">Daily</TableCell>
              <TableCell align="right">Several Times/Week</TableCell>
              <TableCell align="right">A fewtimes/week</TableCell>
              <TableCell align="right">A few times/year</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows2.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.option1}</TableCell>
                <TableCell align="right">{row.option2}</TableCell>
                <TableCell align="right">{row.option3}</TableCell>
                <TableCell align="right">{row.option4}</TableCell>
                <TableCell align="right">{row.option5}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
      <br></br>

      <Button
        variant="contained"
        className="next"
        onClick={() => navigate("/")}
      >
        Back
      </Button>
    </>
  );
}
