import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography
} from "@material-ui/core";
import { flexbox } from "@material-ui/system";
import { Link, Redirect, withRouter } from "react-router-dom";

// import Review from './Review';
import DetailsForm from "./DetailsForm";
import Verify from "./Verify";
const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: flexbox,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    margin: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

const steps = ["Verify", "Report details"];

export default function Forms(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  //   const [info,setInfo]= useState({
  //     name: 'hello it name',
  //     description: 'hello its description',
  //     image:'',
  //     category:''
  //   });
  //   const modifyInfo = info => {
  //     setInfo(info);
  //   };
  const getStepContent = step => {
    switch (step) {
      case 0:
        return <Verify />;
      case 1:
        return <DetailsForm />;
      // case 2:
      //   return <Review  />;
      default:
        throw new Error("Unknown step");
    }
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        className={classes.appBar}
      ></AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Make a report
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  THANK YOU! Your report has been submitted!
                </Typography>
                <Typography variant="subtitle1">
                  Your help is greatly appreciated. Together, we can provide
                  HOPE to displaced inviduals and families. We have events
                  organised to send hope and help to these people in need. Sign
                  up as volunteer or learn more now.
                </Typography>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                >
                  Sign up as a volunteer
                </Button>

                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                >
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    View analysis on Singapore's homeless scene
                  </Link>
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Create" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
