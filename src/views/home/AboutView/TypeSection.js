import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import useBreakpoints from '~/hooks/useBreakpoints';
import { varFadeInUp, varFadeInDown, MotionInView } from '~/components/Animate';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Grid, Card, Container, Typography } from '@material-ui/core';
import { BASE_IMG } from '~/utils/getImages';
// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: `${BASE_IMG}/v1615853565/letsbeelife/Hassle-free-vector_y7xjo6.png`,
    title: 'Provide hassle-free all-in-one service with reliable content',
    description:
      'The set is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.'
  },
  {
    icon: `${BASE_IMG}/v1615853559/letsbeelife/Community-Vector1_cgbdeq.png`,
    title: 'Contribute to the community by offering online platform to local businesses',
    description:
      'Easy to customize and extend each component, saving you time and money.'
  },
  {
    icon: `${BASE_IMG}/v1615853571/letsbeelife/Technology-Vector_jpitmj.png`,
    title: 'Seek and adapt to new technologies to improve our services',
    description:
      'Consistent design in colors, fonts ... makes brand recognition easy.'
  }
];

const useStyles = makeStyles(theme => {
  const isLight = theme.palette.mode === 'light';

  const shadowCard = opacity =>
    isLight
      ? alpha(theme.palette.grey[500], opacity)
      : alpha(theme.palette.common.black, opacity);

  const shadowIcon = color => {
    return {
      filter: `drop-shadow(2px 2px 2px ${alpha(
        theme.palette[color].main,
        0.48
      )})`
    };
  };

  return {
    root: {
      paddingTop: theme.spacing(10),
      [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(10)
      }
    },
    heading: {
      marginBottom: theme.spacing(10),
      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(10)
      }
    },
    card: {
      maxWidth: 380,
      minHeight: 440,
      margin: 'auto',
      textAlign: 'center',
      padding: theme.spacing(10, 5, 0),
      boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
      [theme.breakpoints.up('md')]: {
        boxShadow: 'none',
        backgroundColor: theme.palette.grey[isLight ? 200 : 800]
      }
    },
    cardLeft: {
      [theme.breakpoints.up('md')]: {
        marginTop: -40
      }
    },
    cardCenter: {
      [theme.breakpoints.up('md')]: {
        marginTop: -80,
        backgroundColor: theme.palette.background.paper,
        boxShadow: `-40px 40px 80px 0 ${shadowCard(0.4)}`,
        '&:before': {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          content: "''",
          margin: 'auto',
          position: 'absolute',
          width: 'calc(100% - 40px)',
          height: 'calc(100% - 40px)',
          borderRadius: theme.shape.borderRadiusMd,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `-20px 20px 40px 0 ${shadowCard(0.12)}`
        }
      }
    },
    cardIcon: {
      width: 40,
      height: 40,
      margin: 'auto',
      marginBottom: theme.spacing(10)
    },
    cardIconLeft: shadowIcon('info'),
    cardIconCenter: shadowIcon('error'),
    cardIconRight: shadowIcon('primary')
  };
});

// ----------------------------------------------------------------------

TypeHelps.propTypes = {
  className: PropTypes.string
};

function TypeHelps({ className }) {
  const classes = useStyles();
  const isDesktop = useBreakpoints('up', 'lg');

  return (
    <div className={clsx(classes.root, className)}>
      <Container maxWidth="lg">
        <div className={classes.heading}>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" align="center">
            Lorem ipsum dolor sit amet
            </Typography>
          </MotionInView>
        </div>

        <Grid container spacing={isDesktop ? 10 : 5}>
          {CARDS.map((card, index) => (
            <Grid key={card.title} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>                
                  <img
                    src={card.icon}
                    alt={card.title}
                  />
                  <div style={{textAlign: "center"}}>
                  <Typography style={{ textAlign: "center", margin:"30px"}} variant="h4">
                    <span style={{ color: 'black', textDecoration: "underline"}}>{card.title}</span>
                  </Typography></div>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default TypeHelps;