import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

export default function CityType() {
  const classes = useStyles();
  const [cityType1, setCityType] = React.useState("");

  const handleChange = (event) => {
    setCityType(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel> Sort by City Type</InputLabel>
        <Select value={cityType1} onChange={handleChange}>
          <MenuItem value="Metro">Metro</MenuItem>
          <MenuItem value="Town">Town</MenuItem>
          <MenuItem value="Village">Village</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
