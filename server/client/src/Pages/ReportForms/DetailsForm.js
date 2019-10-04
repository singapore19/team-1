import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {Typography,MenuItem,TextField,FormControl,FormControlLabel,Checkbox,InputLabel,Select} from '@material-ui/core';

import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


// export default function DetailsForm({info,modifyInfo}) {
//   const setName = newname => {
//     const {name,...other}=info
//     const newInfo =[{...other},{name:newname}] ;
//     modifyInfo(newInfo);
//   };
//   const setDes = newDes => {
//     const {description,...other}=info
//     const newInfo = [{...other},{description:newDes}];
//     modifyInfo(newInfo);
//   };
export default function DetailsForm() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Rough Sleepers Sightings
        </Typography>
        <Grid container spacing={3}>
        <Typography variant="h9" gutterBottom>
          Gender
        </Typography>
        <FormControlLabel control={<Checkbox value="checkedC" />} label="M" />
        <FormControlLabel control={<Checkbox value="checkedC" />} label="F" />
        <FormControlLabel control={<Checkbox value="checkedC" />} label="Not Sure" />
        <FormControl >
          {/* className={classes.formControl}> */}
          <InputLabel htmlFor="age-simple">Age</InputLabel>
          <Select
            // value={values.age}
            // onChange={handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value={0-12}>Ten</MenuItem>
            <MenuItem value={13-18}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
      </FormControl>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="fname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="billing address-line1"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="billing address-line2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="billing address-level2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="state" name="state" label="State/Province/Region" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              autoComplete="billing postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              autoComplete="billing country"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Use this address for payment details"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }