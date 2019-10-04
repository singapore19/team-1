import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Markdown from "./Markdown";
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";
import Poster from "../assets/poster.jpg";
import Logo from "../assets/logo.jpg";
import { Link as RouterLink, Redirect, withRouter } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto"
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: "relative",
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${Poster})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: 300
  },

  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3)
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}));

const featuredPosts = [
  {
    title: "Report",
    description:
      "Reporting helps us to reach out to and provide neccesarry support to rough sleepers."
  },
  {
    title: "Sign up",
    description:
      "Sign up here if you are keen on helping us to get rough sleepers off the streets!"
  },
  {
    title: "Donate!",
    description:
      "Sign up here if you are keen on helping us to get rough sleepers off the streets!"
  }
];

const posts = [post1, post2, post3];

const archives = [
  "March 2020",
  "February 2020",
  "January 2020",
  "December 2019",
  "November 2019",
  "October 2019",
  "September 2019",
  "August 2019",
  "July 2019",
  "June 2019",
  "May 2019",
  "April 2019"
];

const social = ["GitHub", "Twitter", "Facebook"];

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h2"
            variant="h3"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            New Hope Community Services
          </Typography>
          <Button variant="outlined" size="small">
            Admin Login
          </Button>
        </Toolbar>

        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: "none" }}
                src={require("../assets/poster.jpg")}
                alt="background"
              />
            }

            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  ></Typography>
                  <Typography
                    variant="h5"
                    color="inherit"
                    paragraph
                  ></Typography>
                  <Link variant="subtitle1" href="#"></Link>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={12}>
                <CardActionArea component="a" href="">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          <RouterLink to="/report">Take Action Now</RouterLink>
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image={Logo}
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
        </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
          New Hope Community Services
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Blk 148 Yishun Street 11 

            Singapore 760148, #01-123
          </Typography>
          <Copyright />
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
