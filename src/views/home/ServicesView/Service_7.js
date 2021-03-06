import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { PATH_HOME } from '~/routes/paths';
import { BASE_IMG_S3 } from '~/utils/getImages';
import { Link as RouterLink } from 'react-router-dom';
import useBreakpoints from '~/hooks/useBreakpoints';
import {
  varFadeInUp,
  MotionInView,
  varFadeInRight,
  varFadeInDown
} from '~/components/Animate';
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Paper, Box, Grid, Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    // padding: theme.spacing(15, 0),
    marginBottom: "20px"
  },
  content: {
    padding: "20px 64px 20px 100px",
    alignItems: "center",
    maxWidth: "100%"
  },
}));

// ----------------------------------------------------------------------

Service_7.propTypes = {
  className: PropTypes.string
};

function Service_7({ className }) {
  const classes = useStyles();
  const theme = useTheme();
  const upSm = useBreakpoints('up', 'sm');
  const upMd = useBreakpoints('up', 'md');
  const textAnimate = upMd ? varFadeInRight : varFadeInUp;

  

  const CARDS = [
    {
      icon: `${BASE_IMG_S3}/services_page/food_icon.png`,
      title: 'Food',
      description:
        'The set is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.'
    },
    {
      icon: `${BASE_IMG_S3}/services_page/grocery.png`,
      title: 'Groceries',
      description:
        'Easy to customize and extend each component, saving you time and money.'
    },
  ];


  return (
    <div className={clsx(classes.root, className)}>
      {/* <Container> */}
        <Grid container spacing={2}>
            <Grid container item xs={12} md={6} lg={5}>
                <div>
                    <img src={`${BASE_IMG_S3}/services_page/Logistics_Image.png`} />
                </div>
            </Grid>
            <Grid container md={7} style={{ alignItems: "center", display: "flex", justifyContent: "center",}}>
              <Box className={classes.content} >
                            <MotionInView variants={varFadeInDown}>
                                <Typography variant="h2" align="center" >
                                OTHER SERVICES OF LET???S BEE
                                </Typography>
                            </MotionInView>
                </Box>
                    <Grid container item xs={12} md={4} lg={4} style={{padding: "0 40px 20px 40px"}}>
              <Grid >
                   <MotionInView variants={varFadeInUp}>                
                       <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                           <img 
                               src={`${BASE_IMG_S3}/services_page/Logistics.png`}
                               alt="Food"
                           /></Box>
                           <div style={{textAlign: "center"}}>
                               <Typography style={{ textAlign: "center", margin:"30px"}} variant="h4">
                                   <span style={{ color: 'black'}}>Logistics</span>
                               </Typography>
                           </div>
                           <div style={{textAlign: "center"}}>
                               <Typography style={{ textAlign: "center", margin:"30px"}} variant="p">
                                   <span style={{ color: 'black'}}>
                                   Track and trace your cargo and parcel through the app and wait for our BEE driver to deliver it on your doorsteps.
                                     </span>
                               </Typography>
                           </div>
                   </MotionInView>
              </Grid>
            </Grid>
          </Grid>

          
        </Grid>
      {/* </Container> */}
    </div>
  );
}

export default Service_7;

