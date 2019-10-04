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
        <Typography variant="h4" gutterBottom>
          Rough Sleepers Sightings
        </Typography>
        <Typography variant="h6" gutterBottom>
          Location Sighted:
        </Typography>
        <FormControl >
          {/* className={classes.formControl}> */}
          {/* <InputLabel htmlFor="age-simple">Location</InputLabel> */}
          <Select
            style={{ width: 400}}
            // value={values.age}
            // onChange={handleChange}
            inputProps={{
              name: 'Location',
              id: 'age-simple',
            }}
          >
            <MenuItem value={'bi'}>Bishan</MenuItem>
            <MenuItem value={'je'}>Jurong East</MenuItem>
            <MenuItem value={'jw'}>Jurong West</MenuItem>
            <MenuItem value={'amk'}>Ang Mo Kio</MenuItem>
            <MenuItem value={'changi'}>Changi</MenuItem>
            <MenuItem value={'pr'}>Pasir Ris</MenuItem>
            
          </Select>
      </FormControl>
      <p> </p>
      <Grid item xs={12} >
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Please describe the exact location as detailed as possible,"
              fullWidth
            />
            <TextField
              required
              id="lastName"
              name="lastName"
              label='eg the surroundings, level of building'
              fullWidth
            />
          </Grid>
          <p> </p>
          <p> </p>

        <Typography variant="h6" gutterBottom>
          Time sighted:
        </Typography>

        <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              placeholder= "HH:MM AM/PM"
            />
        </Grid>
        

      <p></p>
        <Typography variant="h6" gutterBottom>
          Gender:
        </Typography>
        <p></p>
        <FormControlLabel control={<Checkbox value="checkedC" />} label="M" />
        <FormControlLabel control={<Checkbox value="checkedC" />} label="F" />
        <FormControlLabel control={<Checkbox value="checkedC" />} label="Not Sure" />
        <p></p>
        <Typography variant="h6" gutterBottom>
          Age:
        </Typography>
        <FormControl >
          {/* className={classes.formControl}> */}
          {/* <InputLabel htmlFor="age-simple">Age</InputLabel> */}
          <Select
            // value={values.age}
            // onChange={handleChange}
            style={{ width: 400}}
            inputProps={{
              name: 'Age',
              id: 'age-simple',
            }}
          >
            <MenuItem value={0-12}>Child(0-12)</MenuItem>
            <MenuItem value={13-18}>Adolescence (13-18)</MenuItem>
            <MenuItem value={19-59}>Adult (19-59)</MenuItem>
            <MenuItem value={60}>Senior Adult (>60)</MenuItem>
          </Select>
      </FormControl>
      <p></p>
        <Typography variant="h6" gutterBottom>
          Race:
        </Typography>
        <FormControl >
          {/* className={classes.formControl}> */}
          {/* <InputLabel htmlFor="age-simple">Race</InputLabel> */}
          <Select
            style={{ width: 400}}
            // value={values.age}
            // onChange={handleChange}
            inputProps={{
              name: 'Race',
              id: 'age-simple',
            }}
          >
            <MenuItem value={'ch'}>Chinese</MenuItem>
            <MenuItem value={'ml'}>Malay</MenuItem>
            <MenuItem value={'in'}>Indian</MenuItem>
            <MenuItem value={'oth'}>Caucasian</MenuItem>
            <MenuItem value={'oth'}>Others</MenuItem>
            
          </Select>
      </FormControl>
      <p></p>
      <Typography variant="h6" gutterBottom>
          Appearance:
        </Typography>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              // label="Clothing"
              placeholder="eg. long hair with blue shirt and black pants"
              fullWidth
            />
          </Grid>
          <p></p>

          <Typography variant="h6" gutterBottom>
          Hygiene:
        </Typography>
        <p></p>
        <FormControlLabel control={<Checkbox value="checkedC" />} label="Clean" />
        <FormControlLabel control={<Checkbox value="checkedC" />} label="Acceptable" />
        <FormControlLabel control={<Checkbox value="checkedC" />} label="Dirty" />
        <FormControlLabel control={<Checkbox value="checkedC" />} label="Very Dirty" />
        <FormControlLabel control={<Checkbox value="checkedC" />} label="Not Sure" />
        <p></p>
        <p></p>

          <Typography variant="h6" gutterBottom>
          Amount of belongings that sleepers have:
        </Typography>
        <p></p>
        <FormControlLabel control={<Checkbox value="checkedC" />} label="None" />
        <FormControlLabel control={<Checkbox value="checkedC" />} label="Little" />
        <FormControlLabel control={<Checkbox value="checkedC" />} label="Normal" />
        <FormControlLabel control={<Checkbox value="checkedC" />} label="A lot  " />
        <FormControlLabel control={<Checkbox value="checkedC" />} label="Not Sure" />
          <p></p> 
        <Typography variant="h9" gutterBottom>
          Please describe the belongings to help us easily identify the sleepers
        </Typography>
          
          <Grid item xs={12}>
            <TextField id="state" name="state" placeholder="eg. blue tent with a small black bag" fullWidth />
          </Grid>
        <p> </p>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Use this address for payment details"
            />
          </Grid>
      </React.Fragment>
    );
  }