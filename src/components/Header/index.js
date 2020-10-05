import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import jwtDecode from 'jwt-decode';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  let history = useHistory();
  const classes = useStyles();
  const [logoutbool, setLogout] = useState(false);

  useEffect(() => {
    if(logoutbool === true) {
      localStorage.removeItem("permission data")
      window.location.replace('/')
    } 

  },[logoutbool]);

  const handleLogout = () => {
    setLogout(!logoutbool)
  }
  
  const handleSignin = () => {
    history.push('/login')
  }
  
  const decoded = localStorage.getItem("permission data") !== null && jwtDecode(localStorage.getItem("permission data"));

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {decoded ? `Welcome ${decoded.name} to Shaadi.com your ID is ${decoded.id}`: "Welcome to Shaadi.com"} 
          </Typography>
          {decoded ?
          <Button onClick={handleLogout} color="inherit">Logout</Button>: <><Button onClick={handleSignin}  color="inherit" >Sign In</Button>
          <Button color="inherit" variant="outlined">Sign Up</Button></>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;