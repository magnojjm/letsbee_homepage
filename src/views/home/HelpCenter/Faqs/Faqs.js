import clsx from 'clsx';
import React, { useState } from 'react';
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
// import SearchBar from 'material-ui-search-bar';

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
  },
  content: {
    [theme.breakpoints.up('md')]: {
      top: 0,
      left: 0,
      width: '100%',
      height: '68vh',
      alignItems: 'center'
    },
    backgroundImage: `url("${BASE_IMG_S3}/image+51.png")`,
    backgroundRepeat: 'no-repeat'
  },
  search: {
    width: '100%',
    position: 'relative',
    display: 'flex'
  },
  searchTerm: {
    width: '100%',
    border: '3px solid #d0d0d0',
    padding: '10px',
    borderRadius: '5px 7px 5px 5px',
    outline: 'none',
    color: '#9DBFAF'
  },
  searchTerm_focus: {
    color: '#00B4CC'
  },
  searchButton: {
    width: '40px',
    height: '36px',
    border: '1px solid #00B4CC',
    background: '#00B4CC',
    textAlign: 'center',
    color: '#fff',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer',
    fontSize: '20px'
  },
  wrap: {
    width: '30%',
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}));
FaqHelps.propTypes = {
  className: PropTypes.string
};
// ----------------------------------------------------------------------

function FaqHelps({ className }) {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={classes.root}>
      <Box
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
        <Box component="p" sx={{ color: 'common.white' }}>
          <div className={classes.content}>
            <div className={classes.wrap}>
              <p
                style={{
                  fontSize: '35px',
                  textShadow: '1px 0.5px 1px #000000',
                  alignItems: 'center'
                }}
              >
                {' '}
                Hi! How can we help?
              </p>
              <div className={classes.search}>
                <i className="fa fa-search"></i>
                <input
                  className={classes.text}
                  className={classes.searchTerm}
                  placeholder="Enter your query or keywords"
                />
              </div>
            </div>
          </div>
        </Box>
      </Grid>
      <Grid
        item
        style={{
          padding: 0,
          marginRight: -25,
          marginLeft: -25,
          marginBottom: 50
        }}
      >
        <AntTab />
      </Grid>
    </div>
  );
}

export default FaqHelps;
