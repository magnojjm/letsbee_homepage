import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { BASE_IMG_S3 } from '~/utils/getImages';
// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    padding: "0 0 0 0",
    position: 'relative',
    backgroundColor: '#F2F3F5',
    [theme.breakpoints.up('xl')]: {
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      display: 'flex',
      position: 'fixed',
      alignItems: 'center'
    }
  },
  
  sectionThree: { 
    fontSize: "60px", fontWeight: "bold", fontStretch: "normal", fontStyle: "normal", lineHeight: "normal", 
    letterSpacing: "normal", textAlign: "center", color: "#000000",
    backgroundImage: `url("${BASE_IMG_S3}/1.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover" 
  },
  adsSection: {
    fontWeight: "bold", fontStretch: "normal", fontStyle: "normal", lineHeight: "normal", letterSpacing: "normal", textAlign: "center", color: "#000000",
    padding: "100px", margin: "10px"
  }
}));

// ----------------------------------------------------------------------

CenterTextHelps.propTypes = {
  className: PropTypes.string
};

function CenterTextHelps({ className }) {
  const classes = useStyles();

  return (
       <Container maxWidth="xl" className={classes.sectionThree}>
            <div className={classes.adsSection}>
                <Typography variant="h2">
                “Let’s Bee, Your friendly companion from day to day”
                </Typography>
            </div>
            </Container>      
    // </div>
  );
}

export default CenterTextHelps;
