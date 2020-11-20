import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
}));

export default function City() {
  const classes = useStyles();
  const [city, setCity] = React.useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel> Select City</InputLabel>
        <Select value={city} onChange={handleChange}>
          <MenuItem value={city}>City</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
