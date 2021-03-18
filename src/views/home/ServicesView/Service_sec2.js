import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import useBreakpoints from '~/hooks/useBreakpoints';
import { varFadeInUp, varFadeInDown, MotionInView } from '~/components/Animate';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography } from '@material-ui/core';
import { BASE_IMG } from '~/utils/getImages';
// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: `${BASE_IMG}/v1615942145/letsbeelife/services_page/delivery_icon_cr09xx.png`,
    title: 'Delivery',
    description:
      'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  },
  {
    icon: `${BASE_IMG}/v1615942356/letsbeelife/services_page/Reservation_Icon_rupzvl.png`,
    title: `Advance Reservations`,
    description:
      'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  },
  {
    icon: `${BASE_IMG}/v1615942144/letsbeelife/services_page/Booking_Icon_bscpa6.png`,
    title: 'Real Time Bookings',
    description:
       'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  },
  {
    icon: `${BASE_IMG}/v1615942145/letsbeelife/services_page/Booking_Icon.png`,
    title: `Marketplace`,
    description:
      'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
  },
  {
    icon: `${BASE_IMG}/v1615942145/letsbeelife/services_page/Logistics.png`,
    title: 'Logistics',
    description:
       'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
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

Service_sec2.propTypes = {
  className: PropTypes.string
};

function Service_sec2({ className }) {
  const classes = useStyles();
  const isDesktop = useBreakpoints('up', 'lg');

  return (
    <div className={clsx(classes.root, className)}>
      <Container maxWidth="lg">
        <div className={classes.heading}>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h1" align="center">
            Lorem ipsum dolor sit amet consectetur adipiscing
            </Typography>
          </MotionInView>
      

        <Grid container spacing={isDesktop ? 10 : 5}>
          {CARDS.map((card, index) => (
            <Grid key={card.title} item xs={12} md={4}>
              <MotionInView variants={varFadeInUp}>                
              <Box style={{ alignItems: "center", display: "flex", justifyContent: "center", paddingTop: "70px" }}>
                  <img 
                    src={card.icon}
                    alt={card.title}
                  /></Box>
                  <div style={{textAlign: "center"}}>
                    <Typography style={{ textAlign: "center", margin:"30px"}} variant="h4">
                        <span style={{ color: 'black'}}>{card.title}</span>
                    </Typography>
                  </div>
                  <div style={{textAlign: "center"}}>
                    <Typography style={{ textAlign: "center", margin:"30px"}} variant="p">
                        <span style={{ color: 'black'}}>{card.description}</span>
                    </Typography>
                  </div>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Service_sec2;
