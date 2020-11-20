import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

const Accordion = withStyles({
  root: {
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginBottom: -1,
    backgroundColor: "rgba(0, 0, 0, .03)",
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    height: 140,
    width: 100,
  },
  margin: {
    margin: "2% 4%",
  },
  control: {
    padding: theme.spacing(1),
    backgroundColor: "rgba(0, 0, 0, .03)",
    border: "1px solid rgba(0, 0, 0, .125)",
  },
  align: {
    marginLeft: "40%",
  },
}));
export default function Home() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : true);
  };
  return (
    <>
      <Grid container spacing={5} className={classes.root}>
        <Grid item xs={3} className={classes.margin}>
          <Card className={classes.control}>
            <CardContent>
              <Typography>Karimnagar</Typography>
              <Accordion
                square
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary aria-controls="panel2d-content">
                  <Typography className={classes.align}>Cities</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Typography>No.of Polling Stations</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} className={classes.margin}>
          <Card className={classes.control}>
            <CardContent>
              <Typography>Hyderabad</Typography>
              <Accordion
                square
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary aria-controls="panel2d-content">
                  <Typography className={classes.align}>Cities</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Typography>No.of Polling Stations</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} className={classes.margin}>
          <Card className={classes.control}>
            <CardContent>
              <Typography>Nizamabad</Typography>
              <Accordion
                square
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary aria-controls="panel2d-content">
                  <Typography className={classes.align}>Cities</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Typography>No.of Polling Stations</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} className={classes.margin}>
          <Card className={classes.control}>
            <CardContent>
              <Typography>Rajanna Siricilla</Typography>
              <Accordion
                square
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary aria-controls="panel2d-content">
                  <Typography className={classes.align}>Cities</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Typography>No.of Polling Stations</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} className={classes.margin}>
          <Card className={classes.control}>
            <CardContent>
              <Typography> Jagtial</Typography>
              <Accordion
                square
                expanded={expanded === "panel7"}
                onChange={handleChange("panel7")}
              >
                <AccordionSummary aria-controls="panel2d-content">
                  <Typography className={classes.align}>Cities</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Typography>No.of Polling Stations</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} className={classes.margin}>
          <Card className={classes.control}>
            <CardContent>
              <Typography> Rangareddy</Typography>
              <Accordion
                square
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary aria-controls="panel2d-content">
                  <Typography className={classes.align}>Cities</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Typography>No.of Polling Stations</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
