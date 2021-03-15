import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { PATH_HOME } from '~/routes/paths';
import { BASE_IMG } from '~/utils/getImages';
import { Link as RouterLink } from 'react-router-dom';
import useBreakpoints from '~/hooks/useBreakpoints';
import {
  varFadeInDown,
  varFadeInUp,
  MotionInView,
  varFadeInRight
} from '~/components/Animate';
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import { Link, Box, Grid, Container, Typography } from '@material-ui/core';
import { MButton } from '~/@material-extend';
// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    padding: "0 0 0 0",
    // backgroundColor: "var(--white)",
  },
  content: {
    [theme.breakpoints.up('md')]: {
      height: '100%',
    padding: "0 0 0px 187px",
    backgroundColor: "var(--white)",
    }
  },
  titleAbout: {
    width: "268px",
    height: "87px",
    margin: "57px 504px 45px 0",
    fontFamily: "Poppins",
    fontSize: "48px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "center",
    color: "#fccf00",
  },
  underline: {
    width: "58px",
    height: "17px",
    margin: "136px 714px 36px 0",
    borderRadius: "4px",
    backgroundColor: "#fccf00",
  },
  textAbout: {
    width: "1015px",
    height: "261px",
    margin: "36px 707px 90px 11px",
    fontFamily: "Poppins",
    fontSize: "48px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#000000",
  },
  vector: {
    width: "961px",
    height: "540px",
    flexGrow: "0",
    margin: "0 0 0px",
    padding: "0 0 121px 111.2px",
    // backgroundColor: "rgba(252, 208, 0, 0.3)",
  },
  vector1: {
    width: "849.8px",
    height: "418.9px",
    flexGrow: "0",
    // backgroundColor: "rgba(252, 208, 0, 0.3)",
  },
  vector2: {
    width: "633.5px",
    height: "479.1px",
    flexGrow: "0",
    margin: "60.8px 0 0 327.5px",
    // backgroundColor: "rgba(252, 208, 0, 0.3)",
  },
  screens: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '16% !important'
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '0 !important'
    }
  },
  screen: {
    bottom: 0,
    maxWidth: 460,
    position: 'absolute'
  },
  screenLeft: { zIndex: 3 },
  screenRight: { zIndex: 1 },
  screenCenter: {
    position: 'relative',
    zIndex: 2,
    bottom: 20,
    transform: 'translateX(24%)',
    [theme.breakpoints.up('sm')]: {
      bottom: 40,
      transform: 'translateX(32%)'
    }
  },
  sectionTwo: { 
    height: "1025px", 
    padding: "127px 174.7px 126px 187px", 
    backgroundColor: "var(--white)"
  },
  sectionThree: { 
    width: "100%", height: "335.9px", padding: "",
    backgroundImage: `url("/static/1.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover" 
    // backgroundImage: "",
    // backgroundColor: "#fad932"
  },
  e58_115:{
    height: "99px", 
    margin: "0 323.3px 68px 309px", 
    fontFamily: "Poppins", 
    fontSize: "46px", 
    fontWeight: "bold", 
    fontStretch: "normal", 
    fontStyle: "normal", 
    lineHeight: "normal", 
    letterSpacing: "normal", 
    color: "#000000"
  },
  adsSection: {
    fontFamily: "Poppins", fontSize: "60px", 
    fontWeight: "bold", fontStretch: "normal", fontStyle: "normal", lineHeight: "normal", letterSpacing: "normal", textAlign: "center", color: "#000000",
    paddingTop: "100px"
  }
}));

const variantScreenLeftMoblie = {
  initial: { x: '22%', y: -10, opacity: 0 },
  enter: { x: 0, y: 0, opacity: 1 }
};
const variantScreenRightMobile = {
  initial: { x: '26%', y: -30, opacity: 0 },
  enter: { x: '48%', y: -40, opacity: 1 }
};
const variantScreenLeft = {
  initial: { x: '30%', y: -30, opacity: 0 },
  enter: { x: 0, y: 0, opacity: 1 }
};
const variantScreenCenter = {
  initial: { opacity: 0 },
  enter: { opacity: 1 }
};
const variantScreenRight = {
  initial: { x: '34%', y: -50, opacity: 0 },
  enter: { x: '64%', y: -80, opacity: 1 }
};
const transition = { duration: 0.5, ease: 'easeOut' };

// ----------------------------------------------------------------------

AboutHelps.propTypes = {
  className: PropTypes.string
};

function AboutHelps({ className }) {
  const classes = useStyles();
  const theme = useTheme();
  const upSm = useBreakpoints('up', 'sm');
  const upMd = useBreakpoints('up', 'md');
  const textAnimate = upMd ? varFadeInRight : varFadeInUp;
  const screenLeftAnimate = upSm ? variantScreenLeft : variantScreenLeftMoblie;
  const screenCenterAnimate = variantScreenCenter;
  const screenRightAnimate = upSm
    ? variantScreenRight
    : variantScreenRightMobile;

  // const getImg = (width, index) =>
  //   `${BASE_IMG}w_${width}/v1611472901/upload_minimal/home/screen_${
  //     theme.palette.mode === 'light' ? 'light' : 'dark'
  //   }_${index + 1}.png`;

  return (
    <div className={classes.root}>
    <div className={clsx(classes.content, className)}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={4} lg={5} >
            <div >
              <MotionInView variants={textAnimate}>
                <Typography variant="h2" paragraph className={classes.titleAbout}>
                  About Us
                </Typography>
                
              </MotionInView>

              <MotionInView variants={textAnimate}>
                <Typography color="textSecondary" className={classes.textAbout}>
                Lorem ipsum dolor sit amet, cons, ectetur adipiscing elit, sed do eiu smod tempor incidid.
                </Typography>
              </MotionInView>
            </div>
          </Grid>
          <Grid item xs={12} md={4} lg={7} >
              <div className={classes.vector}>
              <Box
                component="img"
                alt="image shape"
                src="/static/Vector.svg"
                sx={{
                  position: 'absolute',
                  filter: 'opacity(48%)',
                  display: { xs: 'none', md: 'block' }
                }}
              />
              <Box
                component="img"
                className={classes.vector1}
                alt="image shape"
                src="/static/Vector-1.svg"
                sx={{
                  position: 'absolute',
                  filter: 'opacity(78%)',
                  display: { xs: 'none', md: 'block' }
                }}
              />
              <Box
              className={classes.vector2}
                component="img"
                alt="image shape"
                src="/static/Vector-2.svg"
                sx={{
                  position: 'absolute',
                  filter: 'opacity(98%)',
                  display: { xs: 'none', md: 'block' }
                }}
              />
              </div>
          </Grid>
          
        </Grid>
        </Container>
        
    </div>
      <Grid item  style={{padding: 0}}>
        <img src="/static/galleryPic.png" />
      </Grid>
          {/* -------------------------- */}
          {/* section 3 columns */}
        <Container maxWidth="xl" className={classes.sectionTwo}>
        <div className={classes.container}>
          {/* <Box
            sx={{
              pl: { md: 10 },
              textAlign: { xs: 'center', md: 'left' }
            }}
          > */}
           <div style={{textAlign: "center"}}>
            <Typography variant="h2" style={{ color: 'black', textDecoration: "underline"}}>
                Lorem ipsum dolor sit amet
                </Typography>
           <Box mt={5} />
            <Grid container style={{display:"flex", justifyContent: "space-between"}}>
              <Grid item xs={12} md={3} lg={4}>
                  <MotionInView
                  variants={varFadeInUp}
                  sx={{ color: 'common.white', m: 3 }}>
                  <img src="/static/Hassle-free-vector.png" />
                  <Box mt={4}/>
                  <Typography style={{ textAlign: "center", margin:"10px"}} variant="h3">
                    <span style={{ color: 'black', textDecoration: "underline"}}>Provide hassle-free all-in-one service with reliable content</span>
                  </Typography>
                </MotionInView>
              </Grid>
              {/* <Box mr={2}/> */}
              <Grid item xs={12} md={3} lg={4}>
                  <MotionInView
                  variants={varFadeInUp}
                  sx={{ color: 'common.white', m: 4 }}
                >
                  <img src="/static/Community-Vector.png" />
                  <Box mt={4}/>
                  <Typography style={{ textAlign: "center", margin:"0px"}} variant="h3">
                    <span style={{ color: 'black', textDecoration: "underline"}}>Contribute to the community by offering online platform to local businesses</span>
                  </Typography>
                </MotionInView>
              </Grid>
              {/* <Box mr={2}/> */}
              <Grid item xs={12} md={3} lg={4}>
                  <MotionInView
                  variants={varFadeInUp}
                  sx={{ color: 'common.white', m: 4 }}
                >
                  <img src="/static/Technology-Vector.png" />
                  <Box mt={4}/>
                  <Typography style={{ textAlign: "center", margin:"5px"}} variant="h3">
                    <span style={{ color: 'black', textDecoration: "underline"}}>Seek and adapt to new technologies to improve our services</span>
                  </Typography>
                </MotionInView>
              </Grid>
            </Grid> 
            </div>
          {/* </Box> */}
        </div>
      </Container>
      {/* ___________________ SECTION 4*/}
      <Container maxWidth="xl" className={classes.sectionThree}>
        <div className={classes.adsSection}>
            <Typography variant="h2" style={{margin:"11px"}}>
            “Lorem ipsum dolor sit ametconsectetur adipiscing elit, sed do eiusmod tempor incididunt”
            </Typography>
        </div>
        </Container>
        {/* ------- */}
        <Container maxWidth="xl" className={classes.sectionFour}>
          {/* <div >
              <Typography variant="h2">
              “Lorem ipsum dolor sit ametconsectetur adipiscing elit, sed do eiusmod tempor incididunt”
              </Typography>
          </div> */}
          <Grid style={{display:"flex", justifyContent: "space-between", alignItems: "center", padding: "100px"}}>
            <Grid item xs={6} md={6} lg={6}>
              <div style={{padding:"85px"}}>
                <Typography variant="h2">
                    Lorem ipsum dolor sit
                </Typography>
                <Typography variant="h4">
                Lorem ipsum dolor sit ametconsectetur adipiscing elit, sed do eiusmod tempor incididunt
                </Typography>
                <Box mt={2}/>
                <Typography variant="h4">
                Lorem ipsum dolor sit ametconsectetur adipiscing elit, sed do eiusmod tempor incididunt
                </Typography>
                <Box mt={2}/>
                <Typography variant="h4">
                Lorem ipsum dolor sit ametconsectetur adipiscing elit, sed do eiusmod tempor incididunt
                </Typography>
              </div>
            </Grid>
            <Grid item xs={6} md={6} lg={6}><img src="/static/real_estate.png" /></Grid>
          </Grid>
        </Container>
    </div>
  );
}

export default AboutHelps;
