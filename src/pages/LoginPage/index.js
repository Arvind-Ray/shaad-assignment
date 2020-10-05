import React, { useState} from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import {Onlogin} from '../../actions';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Layout from '../../components/Layout';
import image from '../../assets/image/shaadi.jpg';
import Loader from "../../components/Loader/index";
import { Grid, TextField } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 400,
      height: 400,
      textAlign: 'center'
    },
    background: {
      backgroundImage: `url(${image})`,
      minHeight: 500,
      backgroundSize: 'cover',
      backgroundPosition: 'center', 
    },
    title: {
      textAlign: 'center',
      color: 'white'
    }
    
  });


function LoginPage({Onlogin, login}) {
    const classes = useStyles();
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [open, setOpen] = useState(false);

    const handleEmail = (e) => {
      setEmail(e.target.value)
    }
    const handlepassWord = (e) => {
      setPass(e.target.value)
    }

    const handleSubmit = async () => {
      await Onlogin(email, password);
      setOpen(true)
    }
    console.log(login && login, "SSSSSSSS")
    if(login && login.success) {
      setTimeout(() => {
        history.push('/home')
      }, 3000) 
    }
    
    return(
        <Layout noHeader={false} className={classes.background}>
            <h1 className={classes.title}>Welcome to Shaadi.com</h1>
            <Grid container spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
            >
           
            <Grid md={12}>
                <Card className={classes.root}>
                    <CardContent>
                    <h2>Sign in for more details</h2>
                    <TextField
                        required
                        value={email}
                        variant="outlined"
                        autoFocus
                        margin="normal"
                        id="email"
                        label="Email"
                        type="email"
                        onChange={handleEmail}
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
                    <Button onClick={handleSubmit} color="primary" variant="contained" style={{bottom: -40}}>Login</Button>
                    </CardContent>
                </Card>
            </Grid>
            </Grid>
            <Loader 
              textmsg="Loading..."
              open={open}
            />
        </Layout>
    );
}

LoginPage.propTypes = {
    demo: PropTypes.object,
};

function mapStateToProps(state) {
  const { login } = state;
  return {
   login,
  }
};
export default connect(mapStateToProps, {
 Onlogin
})(LoginPage);