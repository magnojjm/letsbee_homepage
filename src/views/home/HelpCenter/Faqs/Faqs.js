import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { PATH_HOME } from '~/routes/paths';
import { BASE_IMG, BASE_IMG_S3 } from '~/utils/getImages';
import { Link as RouterLink } from 'react-router-dom';
import useBreakpoints from '~/hooks/useBreakpoints';
import {
  varFadeInDown,
  varFadeInUp,
  MotionInView,
  varFadeInRight
} from '~/components/Animate';

import { getImgFeed } from '~/utils/getImages';
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import { Link, Box, Grid, Container, Typography } from '@material-ui/core';
import { MButton } from '~/@material-extend';
import AntTab from './CenterText';
// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    padding: '0 0 0 0',
    position: 'relative',
    // backgroundColor: '#F2F3F5',
    [theme.breakpoints.up('xl')]: {
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      display: 'flex',
      position: 'fixed',
      alignItems: 'center'
    },
    fontSize: '60px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#000000'
    // backgroundImage: `url("${BASE_IMG_S3}/1.jpg")`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover'
  },
  content: {
    [theme.breakpoints.up('md')]: {
      height: '100%'
      // backgroundColor: 'var(--white)'
    }
  }
}));
FaqHelps.propTypes = {
  className: PropTypes.string
};
// ----------------------------------------------------------------------
const getImg = width => `${BASE_IMG_S3}/image+51.png`;

// const CAROUSELS = ((item, index) => {
//   const setIndex = index;
//   return {
//     title: 'Get what you’\re looking for in a buzz!',
//     description: 'Order meals from restaurants nearby',
//     image: {
//       large: getImgFeed(1440, setIndex)
//     }
//   };
// })

function FaqHelps({ className }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
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
      <Grid item style={{ padding: 0 }}>
        <motion.img
          alt="product"
          data-sizes="auto"
          data-src="https://letsbeelife.s3.ap-east-1.amazonaws.com/image+51.png"
          data-srcset={`${getImg()} 600w, ${getImg()} 960w`}
          variants={varFadeInUp}
          className={clsx(classes.heroImg, 'lazyload')}
        ></motion.img>
      </Grid>
      <Grid item style={{ padding: 0, marginRight: -25, marginLeft: -25 }}>
        <AntTab />
      </Grid>
    </div>
  );
}

export default FaqHelps;
