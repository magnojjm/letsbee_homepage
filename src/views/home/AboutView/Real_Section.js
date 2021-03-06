import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { PATH_HOME } from '~/routes/paths';
import { BASE_IMG, BASE_IMG_S3 } from '~/utils/getImages';
import { Link as RouterLink } from 'react-router-dom';
import useBreakpoints from '~/hooks/useBreakpoints';
import {
  varFadeInUp,
  MotionInView,
  varFadeInRight
} from '~/components/Animate';
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Box, Grid, Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(15, 0),
  },
  content: {
    fontSize: "35px", 
    alignHeight: "20px",
    paddingRight:"20px",
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
  sectionThree: { 
    width: "100%", height: "335.9px",
    backgroundImage: `url("/static/1.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover" 
  },
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

Real_Section.propTypes = {
  className: PropTypes.string
};

function Real_Section({ className }) {
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

  return (
    <div className={clsx(classes.root, className)}>
      <Container maxWidth="lg">
        <Grid container >
          <Grid item xs={12} md={6} lg={6}>
            <div className={classes.content}>
              {/* <MotionInView variants={textAnimate}>
                <Typography style={{marginBottom: "10px"}} variant="h2">
                Lorem ipsum dolor sit
                </Typography>
              </MotionInView> */}

              <MotionInView variants={textAnimate}>
                <Typography style={{marginBottom: "20px"}} variant="h4">
                Our Mission - Provide hassle-free all-in-one service with reliable content, Seek and adapt new technologies to improve our services, Contribute to the community by offering online platform to local businesses
                  </Typography>
              </MotionInView>
              <MotionInView variants={textAnimate}>
                <Typography style={{marginBottom: "20px"}} variant="h4">
                Our Vision - We aim to be the leading-edge application provider by integrating services that will satisfy your daily needs
                  </Typography>
              </MotionInView>
              <MotionInView variants={textAnimate}>
                <Typography variant="h4">
                Core Values - Customer oriented : Helping customers to meet their daily needs, Cultural Diversity : Embracing diverse cultures that started from K-culture, Consistency : Seeking ways to improve our services
                  </Typography>
              </MotionInView>
            </div>
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <div>
                <img src={`${BASE_IMG_S3}/real_estate.png`} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Real_Section;
