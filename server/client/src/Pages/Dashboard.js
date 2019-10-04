import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import EventIcon from "@material-ui/icons/Event";
import AddIcon from "@material-ui/icons/Add";
import PeopleIcon from "@material-ui/icons/People";
import WorkIcon from "@material-ui/icons/Work";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Accessibility from "@material-ui/icons/Accessibility";
import CategoryIcon from "@material-ui/icons/Category";
import SaveIcon from "@material-ui/icons/Save";
import VisibilityIcon from "@material-ui/icons/Visibility";
import HotelIcon from "@material-ui/icons/Hotel";
// core components
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import EventDetail from "../components/Tasks/EventDetail.js";

import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardIcon from "../components/Card/CardIcon.js";
import CardFooter from "../components/Card/CardFooter.js";
import HeatMap from "../components/DashBoard/HeatMap.js";

// additional addins
import { VictoryPie } from "victory";
import TablePagination from "@material-ui/core/TablePagination";

import styles from "../assets/jss/material-dashboard-react/views/dashboardStyle.js";

import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div className="container">
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <VisibilityIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Total number of sightings</p>
              <h3 className={classes.cardTitle}>240</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>Sleepers in Singapore</div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <HotelIcon />
              </CardIcon>
              <p className={classes.cardCategory}>
                Total number of sleepers assisted
              </p>
              <h3 className={classes.cardTitle}>110</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                Amount of help rendered by volunteers
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Total number of volunteers</p>
              <h3 className={classes.cardTitle}>50</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                Volunteered for events under organization
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      {/* End of First Row */}

      {/* End of Second Row */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <HeatMap />
        </GridItem>
      </GridContainer>

     
    </div>
  );
}
