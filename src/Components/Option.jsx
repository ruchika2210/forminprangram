import React from "react";
import "../styles/option.css";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Combined from "./Combined";

const Option = () => {
  const [count, setcount] = useState(0);

  const statementOfProblem = [
    "Have You been diagnosed with Problem",
    "Did the Problem start after a physical trauma",
    "Did the problem start after a mental trauma",
  ];

  const options = ["Not relevant", "yes", "no"];
  const problems = [
    "Not relevant",
    "Daily",
    "Several times/week",
    "A fewtimes/month",
    "A few times/year",
  ];

  const checked = [
    "Not relevant",
    "when lying down",
    "when sitting",
    "understanding",
    "in walking",
  ];

  const scale = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <br></br>
      <br></br>
      <div className="optionstyle">
        <FormGroup>
          {statementOfProblem.map((prob, id) => {
            return (
              <>
                <FormLabel
                  id="demo-row-radio-buttons-group"
                  className="formlabel"
                >
                  {prob}
                </FormLabel>

                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  {options.map((opt, id) => {
                    return (
                      <FormControlLabel
                        className="optionlabel"
                        value={id}
                        control={<Radio />}
                        label={opt}
                      />
                    );
                  })}
                </RadioGroup>
              </>
            );
          })}

          <FormLabel id="demo-row-radio-buttons-group-label">
            How often fo you experience the Probelm?
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            {problems.map((pro, id) => {
              return (
                <FormControlLabel value={id} control={<Radio />} label={pro} />
              );
            })}
          </RadioGroup>
          <br></br>
          <br></br>
          <FormLabel id="demo-row-radio-buttons-group-label">
            When do you experience the problem?
          </FormLabel>
          <FormGroup>
            {checked.map((check, id) => {
              return <FormControlLabel control={<Checkbox />} label={check} />;
            })}
          </FormGroup>

          <FormLabel id="demo-row-radio-buttons-group-label">
            How intense is the problem on the average scale of 0-10
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            {scale.map((scale, id) => {
              return (
                <FormControlLabel
                  value={id}
                  control={<Radio />}
                  label={scale}
                />
              );
            })}
          </RadioGroup>
        </FormGroup>
      </div>

      <Button
        variant="contained"
        className="btnstyle"
        onClick={() => setcount(count + 1)}
      >
        +
      </Button>
      {[...Array(count)].map((_, i) => (
        <Combined key={i} />
      ))}
    </>
  );
};

export default Option;
