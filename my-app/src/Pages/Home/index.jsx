import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import {
  getCityRequest,
  getCityFailure,
  getCitySuccess,
} from "../../Redux/auth/action";
// import CityType from "../../Components/CityType";
// import Population from "../../Components/Population";
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 140,
    width: 100,
  },
  margin: {
    margin: "2% 4%",
  },
  control: {
    // padding: theme.spacing(1),
    backgroundColor: "rgba(0, 0, 0, .03)",
    border: "1px solid rgba(0, 0, 0, .125)",
  },
  align: {
    marginLeft: "40%",
  },
  formControl: {
    marginTop: "3%",
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));
export default function Home() {
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [city, setCity] = useState("");
  const [sort, setSort] = useState("");
  const [data, setData] = useState([]);
  // const [finalData, setFinalData] = useState([]);
  const [cityType, setCityType] = useState("");
  const [search, setSearch] = useState("");
  const citiesData = useSelector((state) => state.auth.cityData);
  // const totalData = useSelector((state) => state.auth.totalData);
  const dispatch = useDispatch();
  // console.log(page);
  const handleChange = (event) => {
    setCityType(event.target.value);
  };
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data")
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    dispatch(getCityRequest());
    axios
      .get(
        `http://localhost:5000/api/data?page=${page}&limit=6&population=${sort}&cityType=${cityType}&city=${search}`
      )
      .then((res) => {
        // console.log(res.data.data);
        dispatch(getCitySuccess(res.data.data));
        // setFinalData(res.data.data);
      })
      .catch((error) => {
        dispatch(getCityFailure());
      });
  }, [page, sort, cityType, dispatch, search]);

  var pagination = [];
  var buttons = Math.ceil(data.length / 6);
  for (let i = 1; i <= buttons; i++) {
    pagination.push(i);
  }
  // console.log(search);
  // console.log(
  //   pagination,
  //   buttons,
  //   data.length,
  //   sort,
  //   cityType,
  //   finalData.length
  // );
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel> Sort by City Type</InputLabel>
        <Select value={cityType} onChange={handleChange}>
          <MenuItem value="Metro">Metro</MenuItem>
          <MenuItem value="Town">Town</MenuItem>
          <MenuItem value="Village">Village</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Sort by population</InputLabel>
        <Select value={sort} onChange={handleSortChange}>
          <MenuItem value="asc">Low to High</MenuItem>
          <MenuItem value="desc">High to Low</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="search"
        type="search"
        value={search}
        style={{ marginTop: "2.5%", marginRight: "1%", marginLeft: "1%" }}
        onChange={(e) => setSearch(e.target.value)}
        variant="outlined"
        required
      />
      <Grid container>
        {citiesData &&
          citiesData.map((item, index) => (
            <Grid item xs={3} className={classes.margin} key={index}>
              <Card className={classes.control}>
                <CardContent>
                  <Typography type="text" value={item.district}>
                    District : <i>{item.district}</i>
                  </Typography>
                  <Typography
                    type="text"
                    value={city === item.city}
                    onClick={(e) => setCity(e.target.value)}
                  >
                    <Link to={`/${item.city}`}>
                      City: <em>{item.city}</em>
                    </Link>
                  </Typography>
                  <Typography>
                    City Type : <em>{item.cityType}</em>
                  </Typography>
                  <Typography>
                    Population : <em>{Number(item.population)}</em>
                  </Typography>
                  <Typography>
                    Number of polling stations : {item.noOfPollingStations}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      <div>
        {pagination.map((item, index) => (
          <button
            variant="contained"
            color="secondary"
            style={{
              padding: "10px 20px",
              margin: "10px",
              background: "#ff3f6c",
              color: "white",
              border: "none",
              cursor: "pointer",
              outline: "none",
              borderRadius: "5px",
            }}
            key={index}
            value={item}
            onClick={(e) => setPage(e.target.value)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
