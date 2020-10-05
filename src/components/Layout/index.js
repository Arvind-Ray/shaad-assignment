import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../Header';


export default function Layout({ children, noHeader, className }) {
    return(
        <>
            {noHeader !== false &&<Header/>}
            <Grid className={className} style={{height: '100vh'}}>
                <Grid item>
                    <Container>
                        {children}
                    </Container>
                </Grid>

            </Grid>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}