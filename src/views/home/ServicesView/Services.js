import clsx from 'clsx';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import React, { useCallback } from 'react';
import { BASE_IMG } from '~/utils/getImages';
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

const CARDS = [
  {
    icon: '/static/icons/ic_design.svg',
    title: 'Get what you\’re looking for in a buzz!',
    description:
      'The set is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.'
  },
  {
    icon: '/static/icons/ic_code.svg',
    title: 'Get what you\’re looking for in a buzz!',
    description:
      'Easy to customize and extend each component, saving you time and money.'
  },
  {
    icon: '/static/brand/logo_single.svg',
    title: 'Get what you\’re looking for in a buzz!',
    description:
      'Consistent design in colors, fonts ... makes brand recognition easy.'
  }
];

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

// const getImgLight = width =>
//   `${BASE_IMG}w_${width}/v1611474139/upload_minimal/home/lightmode.png`;

// const getImgDark = width =>
//   `${BASE_IMG}w_${width}/v1611474139/upload_minimal/home/darkmode.png`;

// function ToggleSwitch({ darkMode, onToggleTheme }) {
//   const classes = useStyles();
//   return (
//     <MuiThemeProvider theme={theme}>
//     <div
//       onClick={onToggleTheme}
//       className={clsx(classes.switch, { [classes.switchOn]: darkMode })}
//     >
//       <motion.div
//         layout
//         transition={spring}
//         className={clsx(classes.handle, { [classes.handleOn]: darkMode })}
//       />
//     </div>
//     </MuiThemeProvider>
//   );
// }

ServiceHelps.propTypes = {
  className: PropTypes.string
};

function ServiceHelps({ className }) {
  const classes = useStyles();
  const isDesktop = useBreakpoints('up', 'lg');
  const dispatch = useDispatch();
  const { darkMode } = useSelector(state => state.theme);

  return (
    <div className={clsx(classes.root, className)}>
      <Container maxWidth="unset" sx={{ position: 'relative' }} className={classes.slides}>
        <Box
          component="img"
          alt="image shape"
          src="/static/images/shape.svg"
          sx={{
            top: 0,
            right: 0,
            bottom: 0,
            my: 'auto',
            position: 'absolute',
            filter: 'grayscale(1) opacity(48%)',
            display: { xs: 'none', md: 'block' }
          }}
        />

        <Grid container spacing={5} direction="row-reverse">
          <Grid item xs={12} md={12}>
           
              <MotionInView
                variants={varFadeInUp}
                sx={{ color: 'text.disabled' }}
              >
          
          <CarouselAnimation carousels={CAROUSELS} />
              </MotionInView>
          </Grid>
           
        </Grid>
      </Container>
    </div>
  );
}

export default ServiceHelps;
