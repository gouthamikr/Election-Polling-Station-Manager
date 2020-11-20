import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
}));

export default function CityType() {
  const classes = useStyles();
  const [district, setDistrict] = React.useState("");

  const handleChange = (event) => {
    setDistrict(event.target.value);
  };
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel>Select District </InputLabel>
        <Select value={district} onChange={handleChange}>
          <MenuItem value={district}>District</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
