import clsx from 'clsx';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import React, { useCallback } from 'react';
import { BASE_IMG, BASE_IMG_S3 } from '~/utils/getImages';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '~/redux/slices/dark-mode';
import useBreakpoints from '~/hooks/useBreakpoints';
import {
  MotionInView,
  varFadeInUp,
  varZoomInOut,
  varFadeInRight
} from '~/components/Animate';
import {   createMuiTheme,
  MuiThemeProvider,
  makeStyles,
  alpha,
  withStyles, } from '@material-ui/core/styles';
import { Box, Card, Grid, Container, Typography } from '@material-ui/core';
import CarouselAnimation from '../../uikit/extra-components/CarouselView/CarouselAnimation';
import faker from 'faker';
import { getImgFeed } from '~/utils/getImages';
import { random } from 'lodash';

// ----------------------------------------------------------------------



const theme = createMuiTheme({
  overrides: {
    makeStyles: {
      root: {
        backgroundColor:'#fff'
        }
    },
  },
});


const CAROUSELS = [...Array(4)].map((item, index) => {
  const setIndex = index;
  return {
    title: "Get what you’\re looking for in a buzz!",
    description: "Order meals from restaurants nearby",
    image: {
      thumb: getImgFeed(128, setIndex),
      small: getImgFeed(600, setIndex),
      medium: getImgFeed(960, setIndex),
      large: getImgFeed(1440, setIndex)
    }
  };
});

const useStyles = makeStyles(theme => {
  const isLight = theme.palette.mode === 'light';  

  return {
  root: {
    padding: '72px 0px 0px 0px',
    backgroundColor: '#fff'
    // width: '100%',
    // height: '100%',
    // flexGrow: '0',
    // padding: '0 0 24px',
    // backgroundColor: 'rgba(0, 0, 0, 0.34)',
  },
  slides: {
    paddingLeft:'0px',
    paddingRight:'0px'
  },
  content: {
    textAlign: 'center',
    position: 'relative',
    marginBottom: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      height: '100%',
      marginBottom: 0,
      textAlign: 'left',
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }
  },
  image: {
    WebkitPerspective: 1000,
    WebkitTransform: 'translateZ(0)',
    WebkitBackfaceVisibility: 'hidden',
    filter: 'drop-shadow(-80px 80px 120px #000000)',
    
  },
  switch: {
    width: 56,
    height: 24,
    cursor: 'pointer',
    alignItems: 'center',
    display: 'inline-flex',
    justifyContent: 'flex-start',
    padding: theme.spacing(0, 0.5),
    backgroundColor: theme.palette.common.white
  },
  switchOn: {
    justifyContent: 'flex-end',
    backgroundColor: theme.palette.common.white
  },
  handle: {
    width: 16,
    height: 16,
    boxShadow: theme.shadows[25].primary,
    backgroundColor: theme.palette.common.white
  },
  handleOn: { width: 20 },
  
  
}});

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30
};

// ----------------------------------------------------------------------

ServiceHelps.propTypes = {
  className: PropTypes.string
};

const getImg = width =>
  `${BASE_IMG_S3}/services_page/Section_1_qbrdh8.png`;

function ServiceHelps({ className }) {
  const classes = useStyles();
  const isDesktop = useBreakpoints('up', 'lg');
  const dispatch = useDispatch();
  const { darkMode } = useSelector(state => state.theme);

  return (
    <div className={clsx(classes.root, className)}>
      <Container 
      maxWidth="unset" 
      sx={{ position: 'relative' }} className={classes.slides}>
        <Grid item  style={{padding: 0}}>
          {/* <img src="https://letsbeelife.s3.ap-east-1.amazonaws.com/galleryPic.png" /> */}
          <motion.img
            alt="product"
            data-sizes="auto"
            data-src={`${BASE_IMG_S3}/galleryPic.png`}
            data-srcset={`${getImg()} 600w, ${getImg()} 960w`}
            variants={varFadeInUp}
            className={clsx(classes.heroImg, 'lazyload')}
          />
        </Grid>
      </Container>
    </div>
  );
}

export default ServiceHelps;
