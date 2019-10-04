import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Verify() {
    const [send, setSend] = useState(false);
    return (
      <React.Fragment>
        <Grid  justify="center" alignItems="center" >
        <Typography variant="h4" >
          Please enter your phone number to obatin an OTP
        </Typography>
        <p> </p>
        <p> </p>
        <Grid container spacing={3}>
        <TextField
              required
              id="phoneno"
              name="phoneno"
              label="Phone number"
              fullWidth
            />
            
        <Button
                    variant="contained"
                    color="primary"
                    onClick={()=>setSend(true)}
                  > Send OTP </Button>
        {(send) ? (<div>
            <p> </p>
        <p> </p>
        <Typography variant="h6" gutterBottom>
          Your OTP has been send. If not received within the next minute please press the send OTP button again.
        </Typography>
        <p> </p>
        <p> </p>
        <p> </p>
        <p> </p>
        <Typography variant="h4" gutterBottom>
          Key in the received OTP
        </Typography>
        <TextField
              required
              id="otp"
              name="otp"
              label="OTP"
              fullWidth
            />
        </div>) : ''}
        </Grid>
        </Grid>
      </React.Fragment>
    );
  }