import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function SnackBar({open, onClose, severity, autoHideDuration, children}) {
    console.log(children, "AAAAAAAAAA")
    return(
        <Snackbar 
              open={open} 
              autoHideDuration={autoHideDuration} 
              onClose={onClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
            <Alert  
              onClose={onClose}
              severity={severity}
            >
            {children?.email && <span>{children.email}</span>}<br />
            {children?.password && <span>{children.password}</span>}<br />
            {children?.password2 && <span>{children.password2}</span>}
            </Alert>
        </Snackbar>
    );
}