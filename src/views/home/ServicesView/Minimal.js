import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import useBreakpoints from '~/hooks/useBreakpoints';
import { varFadeInUp, varFadeInDown, MotionInView } from '~/components/Animate';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Card, Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: '/static/icons/ic_design.svg',
    title: "Let's Bee Delivery",
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id condimentum ante. Mauris scelerisque congue ligula id rutrum.'
  },
  {
    icon: '/static/icons/ic_code.svg',
    title: "Let's Bee Life",
    description:
      'Aenean cursus elit ligula, quis sagittis purus blandit sit amet. Proin vehicula nulla vel purus sodales, et laoreet nisl imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra'
  },
  // {
  //   icon: '/static/brand/logo_single.svg',
  //   title: 'Branding',
  //   description:
  //     'Consistent design in colors, fonts ... makes brand recognition easy.'
  // }
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
      paddingTop: theme.spacing(15),
      [theme.breakpoints.up('md')]: {
        paddingBottom: theme.spacing(15)
      }
    },
    heading: {
      marginBottom: theme.spacing(10),
      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(25)
      }
    },
    button: {
      marginTop: '10px'
    },
    grid: {
      marginBottom: '10px'
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

MinimalHelps.propTypes = {
  className: PropTypes.string
};

function MinimalHelps({ className }) {
  const classes = useStyles();
  const isDesktop = useBreakpoints('up', 'lg');

  return (
    <div className={clsx(classes.root, className)}>
      <Container maxWidth="lg">
        <div className={classes.heading}>
          {/* <MotionInView variants={varFadeInUp}>
            <Typography
              align="center"
              display="block"
              variant="overline"
              color="textSecondary"
              gutterBottom
            >
              Let's Bee
            </Typography>
          </MotionInView> */}
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" align="center">
              Services
            </Typography>
          </MotionInView>
        </div>

        <Grid container spacing={isDesktop ? 10 : 5}>
          {CARDS.map((card, index) => (
            <Grid key={card.title} item xs={12} md={6} className={classes.grid}>
              <MotionInView variants={varFadeInUp}>
                <Card
                  className={clsx(classes.card)}
                >
                  <img
                    src={card.icon}
                    alt={card.title}
                    className={clsx(classes.cardIcon)}
                  />
                  <Typography variant="h5" paragraph>
                    {card.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {card.description}
                  </Typography>

                  <Button underline="none"
                  variant="contained" className={classes.button}>Learn More...</Button>
                </Card>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default MinimalHelps;
