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
  varFadeInRight
} from '~/components/Animate';
import { alpha, makeStyles, useTheme } from '@material-ui/core/styles';
import { Button, Box, Grid, Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(15, 0),
    backgroundImage:
      theme.palette.mode === 'light'
        ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${
            theme.palette.grey[300]
          } 100%)`
        : 'none'
  },
  textHead: {
    color: '#000000'
  },
  learnMore: {
    width: '176px',
    height: '35px',
    margin: '90px 36px 0px 0px;',
    padding: '8px 28px 7px',
    borderRadius: '15px',
    border: 'solid 2px #000000',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  content: {
    maxWidth: 520,
    margin: 'auto',
    textAlign: 'center',
    marginBottom: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      height: '100%',
      marginBottom: 0,
      textAlign: 'left',
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingRight: theme.spacing(5)
    }
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

  return (
    <div className={clsx(classes.root, className)}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} lg={5}>
            <div >
              <MotionInView variants={textAnimate}>
                <img src="https://res.cloudinary.com/jdm01263d/image/upload/v1615853556/letsbeelife/bee_attempt_3_os34of.png" />
              </MotionInView>
            </div>
          </Grid>

          <Grid item xs={12} sm={8} lg={7}>
            <MotionInView variants={textAnimate}>
                  <Typography className={classes.textHead} color="textSecondary" variant="h1">
                  Let’s Bee<br />
                  lets you get what you<br />
                  desire on-the-fly!
                  </Typography>
                  <Typography variant="h3">
                  It’s your all-in-one lifestyle platform.
                  </Typography>
                </MotionInView>
                <Button className={classes.learnMore} variant="outline">Learn more</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutHelps;
