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
import { Button, Box, Grid, Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    // padding: "0 0 0 169px",
    marginBottom: "40px"
  },
  content: {
    fontSize: "20px", 
    padding:"80px",
  }
}));

// ----------------------------------------------------------------------

Service_4.propTypes = {
  className: PropTypes.string
};

function Service_4({ className }) {
  const classes = useStyles();
  const theme = useTheme();
  const upSm = useBreakpoints('up', 'sm');
  const upMd = useBreakpoints('up', 'md');
  const textAnimate = upMd ? varFadeInRight : varFadeInUp;

  return (
    <div className={clsx(classes.root, className)}>
      {/* <Container> */}
        <Grid container spacing={2}>
            <Grid container xs={12} md={7} lg={7} style={{ alignItems: "center", display: "flex", justifyContent: "center",}}>
              <Box className={classes.content} >
                            <MotionInView variants={varFadeInDown}>
                                <Typography variant="h2" align="center" >
                                Lorem ipsum dolor sit amet consectetur adipiscing
                                </Typography>
                            </MotionInView>
                </Box>
                {/* pool villa */}
              <Grid container item xs={12} sm={6} md={5} lg={6} style={{padding: "40px 100px"}}>
                      <Grid >
                          <MotionInView variants={varFadeInUp}>                
                              <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                                  <img 
                                      src={`${BASE_IMG_S3}/services_page/Hotel_Icon.png`}
                                      alt="Food"
                                  /></Box>
                                  <div style={{textAlign: "center"}}>
                                      <Typography style={{ textAlign: "center", margin:"30px"}} variant="h4">
                                          <span style={{ color: 'black'}}>Hotel</span>
                                      </Typography>
                                  </div>
                                  <div style={{textAlign: "center"}}>
                                      <Typography style={{ textAlign: "center", margin:"30px"}} variant="p">
                                          <span style={{ color: 'black'}}>
                                          Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et. 
                                            </span>
                                      </Typography>
                                  </div>
                          </MotionInView>
                      </Grid>
              </Grid>
              {/* massage */}
              <Grid container item xs={12} sm={6} md={5} lg={6} style={{padding: "40px 100px"}}>
                  <Grid item xs={12}>
                        <MotionInView variants={varFadeInUp}>                
                            <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                                <img 
                                    src={`${BASE_IMG_S3}/services_page/pool_villa.png`}
                                    alt="Food"
                                /></Box>
                                <div style={{textAlign: "center"}}>
                                    <Typography style={{ textAlign: "center", margin:"30px"}} variant="h4">
                                        <span style={{ color: 'black'}}>Massage</span>
                                    </Typography>
                                </div>
                                <div style={{textAlign: "center"}}>
                                    <Typography style={{ textAlign: "center", margin:"30px"}} variant="p">
                                        <span style={{ color: 'black'}}>
                                        Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et. 
                                          </span>
                                    </Typography>
                                </div>
                        </MotionInView>
                  </Grid>
              </Grid>
              {/* Car Rental */}
              <Grid container item xs={12} sm={6} md={5} lg={6} style={{padding: "40px 100px"}}>
                  <Grid item xs={12}>
                        <MotionInView variants={varFadeInUp}>                
                            <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                                <img 
                                    src={`${BASE_IMG_S3}/services_page/car_rental_icon_a1jofp.png`}
                                    alt="Food"
                                /></Box>
                                <div style={{textAlign: "center"}}>
                                    <Typography style={{ textAlign: "center", margin:"30px"}} variant="h4">
                                        <span style={{ color: 'black'}}>Car Rental</span>
                                    </Typography>
                                </div>
                                <div style={{textAlign: "center"}}>
                                    <Typography style={{ textAlign: "center", margin:"30px"}} variant="p">
                                        <span style={{ color: 'black'}}>
                                        Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et. 
                                          </span>
                                    </Typography>
                                </div>
                        </MotionInView>
                  </Grid>
              </Grid>
              {/* Leisure */}
              <Grid container item xs={12} sm={6} md={5} lg={6} style={{padding: "40px 100px"}}>
                  <Grid item xs={12}>
                        <MotionInView variants={varFadeInUp}>                
                            <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                                <img 
                                    src={`${BASE_IMG_S3}/services_page/Leisure_Icon.png`}
                                    alt="Food"
                                /></Box>
                                <div style={{textAlign: "center"}}>
                                    <Typography style={{ textAlign: "center", margin:"30px"}} variant="h4">
                                        <span style={{ color: 'black'}}>Leisure</span>
                                    </Typography>
                                </div>
                                <div style={{textAlign: "center"}}>
                                    <Typography style={{ textAlign: "center", margin:"30px"}} variant="p">
                                        <span style={{ color: 'black'}}>
                                        Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid unt ut labore et. 
                                          </span>
                                    </Typography>
                                </div>
                        </MotionInView>
                  </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={5} xl={5}>
                    <img src={`${BASE_IMG_S3}/services_page/Reservation_Image.png`} />
            </Grid>
        </Grid>
      {/* </Container> */}
    </div>
  );
}

export default Service_4;
