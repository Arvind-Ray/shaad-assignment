import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import {Onregister} from '../../actions';
import { Button, Card, CardContent, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../../components/Layout';
import image from '../../assets/image/shaadi.jpg'
import SnackBar from '../../components/SnackBar';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth:400,
      marginTop: 40,
      minHeight: 500,
      textAlign: 'center'
    },
    title: {
        color: 'white'
    },
    bgColor: {
        backgroundImage: `url(${image})`,
        minHeight: 500,
        backgroundSize: 'cover',
        backgroundPosition: 'center',   
    }
  });

function LandingPage({Onregister, register}) {
    const classes = useStyles();
    let history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [password2, setPass2] = useState("");
    const [loaderMessage, setMessage] = useState(false);

    const handleUser = (e) => {
        setName(e.target.value)
      }
    
      const handleEail = (e) => {
        setEmail(e.target.value)
      }
      const handlepassWord = (e) => {
        setPass(e.target.value)
      }
      const handlePass2 = (e) => {
        setPass2(e.target.value);
      };

      const handleSubmit = () => {
        Onregister(name, email, password, password2);
        setMessage(true)
      }

      const handleAlert = () => {
        setMessage(!loaderMessage)
      }

      if(register?.data?._id) {
        history.push('/login')
      }

    return(
        <Layout className={classes.bgColor}>
            <Grid container>
            <Grid md={5}>
            <h1 className={classes.title}>Welcome to Shaadi.com for more detail please Login</h1>
            </Grid>
            <Grid md={7}>
                <Card className={classes.root}>
                    <CardContent>
                    <h2>Sign up to Shaadi.com</h2>

                    <TextField
                        required
                        value={name}
                        variant="outlined"
                        autoFocus
                        margin="normal"
                        id="name"
                        label="Username"
                        type="text"
                        onChange={handleUser}
                        fullWidth
                    />
                    <TextField
                        required
                        value={email}
                        variant="outlined"
                        autoFocus
                        margin="normal"
                        id="email"
                        label="Email"
                        type="email"
                        onChange={handleEail}
                        fullWidth
                    />
                    <TextField
                        required
                        value={password}
                        variant="outlined"
                        margin="normal"
                        id="password"
                        label="Password"
                        type="password"
                        onChange={handlepassWord}
                        fullWidth
                    />
                    <TextField
                        required
                        variant="outlined"
                        value={password2}
                        margin="normal"
                        id="password"
                        label="Confirm Password"
                        type="password"
                        onChange={handlePass2}
                        fullWidth
                    />
                    <Button onClick={handleSubmit} color="primary" variant="contained" style={{bottom: -40}}>Sign Up</Button>
                    </CardContent>
                </Card>
            </Grid>
            </Grid>
           {!register?.data?._id && <SnackBar 
              open={loaderMessage} 
              autoHideDuration={4000} 
              onClose={handleAlert}
              severity="error"
              children={register?.data}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'center'
              }}
            />}
        </Layout>
    );
}

function mapStateToProps(state) {
    const { register } = state;
    return {
     register
    }
  };
  export default connect(mapStateToProps, {
   Onregister
  })(LandingPage);