import clsx from 'clsx';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import React, { useCallback } from 'react';
import { BASE_IMG } from '~/utils/getImages';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '~/redux/slices/dark-mode';
import {
  MotionInView,
  varFadeInUp,
  varZoomInOut,
  varFadeInRight
} from '~/components/Animate';
import {   createMuiTheme,
  MuiThemeProvider,
  makeStyles,
  withStyles, } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography } from '@material-ui/core';
import CarouselAnimation from '../../uikit/extra-components/CarouselView/CarouselAnimation';
import faker from 'faker';
import { getImgFeed } from '~/utils/getImages';

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


const CAROUSELS = [...Array(5)].map((item, index) => {
  const setIndex = index + 1;
  return {
    title: faker.name.title(),
    description: faker.lorem.paragraphs(),
    image: {
      thumb: getImgFeed(128, setIndex),
      small: getImgFeed(600, setIndex),
      medium: getImgFeed(960, setIndex),
      large: getImgFeed(1440, setIndex)
    }
  };
});

const useStyles = makeStyles(theme => ({
  root: {
    padding: '96px 0px 0px 0px',
    backgroundColor: '#fff'
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
  handleOn: { width: 20 }
}));

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30
};

// ----------------------------------------------------------------------

const getImgLight = width =>
  `${BASE_IMG}w_${width}/v1611474139/upload_minimal/home/lightmode.png`;

const getImgDark = width =>
  `${BASE_IMG}w_${width}/v1611474139/upload_minimal/home/darkmode.png`;

function ToggleSwitch({ darkMode, onToggleTheme }) {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
    <div
      onClick={onToggleTheme}
      className={clsx(classes.switch, { [classes.switchOn]: darkMode })}
    >
      <motion.div
        layout
        transition={spring}
        className={clsx(classes.handle, { [classes.handleOn]: darkMode })}
      />
    </div>
    </MuiThemeProvider>
  );
}

DarkMode.propTypes = {
  className: PropTypes.string
};

function DarkMode({ className }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { darkMode } = useSelector(state => state.theme);

  return (
    <div className={clsx(classes.root, className)}>
      <Container maxWidth="unset" sx={{ position: 'relative' }} style={{paddingLeft:'0px',paddingRight:'0px'}}>
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

export default DarkMode;
