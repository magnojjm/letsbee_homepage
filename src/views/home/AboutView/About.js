import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
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
  content: {
    [theme.breakpoints.up('md')]: {
      height: '100%',
    backgroundColor: "var(--white)",
    }
  },
  titleAbout: {
    width: "268px",
    height: "87px",
    margin: "57px 0px 0px 0",
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
    margin: "-25px 0px 0px 25px",
    borderRadius: "4px",
    backgroundColor: "#fccf00",
  },
  textAbout: {

    [theme.breakpoints.down('md')]: {
      maxWidth: "100%",
    }, 
    
    margin: "26px 250px 0px 25px",
    maxWidth: "50%",
    fontSize: "48px",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#000000",
    position: "absolute", zIndex: "999",
  },
  vector: {
    width: "961px",
    height: "533px",
    flexGrow: "0",
    margin: "0 0 0px",
    padding: "0 0 121px 111.2px",
    position: "relative", display: "inline-block"
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
const getImg = width =>
  `${BASE_IMG}/v1615853609/letsbeelife/galleryPic_xnltm1.png`;


AboutHelps.propTypes = {
  className: PropTypes.string
};

function AboutHelps({ className }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <div className={clsx(className)}>
      <Container maxWidth="lg">
      <div className={classes.content}>
        <Grid container>
          <Grid item xs={12} md={4} lg={5} >
            {/* <div className={classes.content}> */}
            <motion.div variants={varFadeInRight}>
                <Typography variant="h2" paragraph className={classes.titleAbout}>
                  About Us
                </Typography>
                <Typography variant="h1" paragraph className={classes.underline}>
                </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Box
                component="p" sx={{ color: 'common.white', py: 5 }}
                >
                <Typography className={classes.textAbout}>
                  Lorem ipsum dolor sit amet, cons, ectetur adipiscing elit, sed do eiu smod tempor incidid.
                  </Typography>
              </Box>
            </motion.div>
            {/* </div> */}
          </Grid>
          <Grid item xs={12} md={4} lg={7} >
              <div className={classes.vector}>
              <Box
                component="img"
                alt="image shape"
                src={`${BASE_IMG}/v1615853569/letsbeelife/Vector_vhq2td.svg`}
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
                src={`${BASE_IMG}/v1615853567/letsbeelife/Vector-1_di6bnb.svg`}
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
                src={`${BASE_IMG}/v1615853567/letsbeelife/Vector-2_mzgzes.svg`}
                sx={{
                  position: 'absolute',
                  filter: 'opacity(98%)',
                  display: { xs: 'none', md: 'block' }
                }}
              />
              </div>
          </Grid>
          
        </Grid></div>
        </Container>
        
    </div>
      <Grid item  style={{padding: 0}}>
        {/* <img src="https://res.cloudinary.com/jdm01263d/image/upload/v1615853609/letsbeelife/galleryPic_xnltm1.png" /> */}
        <motion.img
          alt="product"
          data-sizes="auto"
          data-src={getImg()}
          data-srcset={`${getImg()} 600w, ${getImg()} 960w`}
          variants={varFadeInUp}
          className={clsx(classes.heroImg, 'lazyload')}
        />
      </Grid>
      
    </div>
  );
}

export default AboutHelps;
