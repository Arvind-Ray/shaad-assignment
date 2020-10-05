import React from 'react';
import PropTypes from "prop-types";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  loadingMsg: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
}));

export default function Loader({ open, textmsg }) {
  const classes = useStyles();

  return (
    <div>
      <Backdrop className={classes.backdrop} open={open}>
        <div className={classes.loadingMsg}>
            <CircularProgress color="inherit" />
            <h4 style={{color: "#fff"}}>{textmsg}</h4>
        </div>
      </Backdrop>
    </div>
  );
}

Loader.propTypes = {
  open: PropTypes.bool,
  textmsg: PropTypes.string
};