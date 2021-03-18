import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { PATH_HOME } from '~/routes/paths';
import { BASE_IMG } from '~/utils/getImages';
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
    // fontSize: "20px", 
    // alignHeight: "20px",
    padding: "20px 64px 20px 100px",
    alignItems: "center",
    maxWidth: "100%"
    // marginBottom: theme.spacing(10),
    // [theme.breakpoints.up('md')]: {
    //   height: '100%',
    //   marginBottom: 0,
    //   textAlign: 'left',
    //   display: 'inline-flex',
    //   flexDirection: 'column',
    //   alignItems: 'flex-start',
    //   justifyContent: 'center',
    //   paddingRight: theme.spacing(5)
    // }
  },
  // screens: {
  //   position: 'relative',
  //   [theme.breakpoints.up('sm')]: {
  //     paddingLeft: '16% !important'
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     paddingLeft: '0 !important'
  //   }
  // },
//   sectionThree: { 
//     width: "100%", height: "335.9px",
//     backgroundImage: `url("/static/1.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover" 
//   },
  // screen: {
  //   bottom: 0,
  //   maxWidth: 460,
  //   position: 'absolute'
  // },
  // screenLeft: { zIndex: 3 },
  // screenRight: { zIndex: 1 },
  // screenCenter: {
  //   position: 'relative',
  //   zIndex: 2,
  //   bottom: 20,
  //   transform: 'translateX(24%)',
  //   [theme.breakpoints.up('sm')]: {
  //     bottom: 40,
  //     transform: 'translateX(32%)'
  //   }
  // }
}));

// ----------------------------------------------------------------------

Service_sec3.propTypes = {
  className: PropTypes.string
};

function Service_sec3({ className }) {
  const classes = useStyles();
  const theme = useTheme();
  const upSm = useBreakpoints('up', 'sm');
  const upMd = useBreakpoints('up', 'md');
  const textAnimate = upMd ? varFadeInRight : varFadeInUp;
  // const screenLeftAnimate = upSm ? variantScreenLeft : variantScreenLeftMoblie;
  // const screenCenterAnimate = variantScreenCenter;
  // const screenRightAnimate = upSm
  //   ? variantScreenRight
  //   : variantScreenRightMobile;

  // const getImg = (width, index) =>
  //   `${BASE_IMG}w_${width}/v1611472901/upload_minimal/home/screen_${
  //     theme.palette.mode === 'light' ? 'light' : 'dark'
  //   }_${index + 1}.png`;

  

  const CARDS = [
    {
      icon: `${BASE_IMG}/v1615949134/letsbeelife/services_page/food_icon.png`,
      title: 'Food',
      description:
        'The set is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.'
    },
    {
      icon: `${BASE_IMG}/v1615949134/letsbeelife/services_page/grocery.png`,
      title: 'Groceries',
      description:
        'Easy to customize and extend each component, saving you time and money.'
    },
  ];

  function InnerGrid() {
    return (
      <div>
        
          {/* {CARDS.map((card, index) => (   */}
            
               {/* ))} */}
      </div>
      );
  }

  return (
    <div className={clsx(classes.root, className)}>
      {/* <Container> */}
        <Grid container spacing={2}>
            <Grid container item xs={12} md={6} lg={5}>
                <div>
                    <img src={`${BASE_IMG}/v1615942354/letsbeelife/services_page/Delivery_Image_uju4ye.png`} />
                </div>
            </Grid>
            <Grid container md={7} style={{ alignItems: "center", display: "flex", justifyContent: "center",}}>
              <Box className={classes.content} >
                            <MotionInView variants={varFadeInDown}>
                                <Typography variant="h2" align="center" >
                                Lorem ipsum dolor sit amet consectetur adipiscing
                                </Typography>
                            </MotionInView>
                </Box>
                    <Grid container item xs={12} md={4} lg={4} style={{padding: "0 40px 20px 40px"}}>
                      <Grid >
                          <MotionInView variants={varFadeInUp}>                
                              <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                                  <img 
                                      src={`${BASE_IMG}/v1615949134/letsbeelife/services_page/food_icon.png`}
                                      alt="Food"
                                  /></Box>
                                  <div st0yle={{textAlign: "center"}}>
                                      <Typography style={{ textAlign: "center", margin:"30px"}} variant="h4">
                                          <span style={{ color: 'black'}}>Food</span>
                                      </Typography>
                                  </div>
                                  <div style={{textAlign: "center"}}>
                                      <Typography style={{ textAlign: "center", margin:"30px"}} variant="p">
                                          <span style={{ color: 'black'}}>
                                          The set is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.
                                            </span>
                                      </Typography>
                                  </div>
                          </MotionInView>
                      </Grid>
                    </Grid>
                    <Grid container item xs={12} md={4} lg={4} style={{padding: "0 40px 20px 40px"}}>
                        <Grid item xs={12}>
                              <MotionInView variants={varFadeInUp}>                
                                  <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                                      <img 
                                          src={`${BASE_IMG}/v1615949134/letsbeelife/services_page/grocery.png`}
                                          alt="Food"
                                      /></Box>
                                      <div style={{textAlign: "center"}}>
                                          <Typography style={{ textAlign: "center", margin:"30px"}} variant="h4">
                                              <span style={{ color: 'black'}}>Groceries</span>
                                          </Typography>
                                      </div>
                                      <div style={{textAlign: "center"}}>
                                          <Typography style={{ textAlign: "center", margin:"30px"}} variant="p">
                                              <span style={{ color: 'black'}}>
                                              The set is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.
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

export default Service_sec3;

