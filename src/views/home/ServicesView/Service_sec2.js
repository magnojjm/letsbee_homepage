import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import useBreakpoints from '~/hooks/useBreakpoints';
import { varFadeInUp, varFadeInDown, MotionInView } from '~/components/Animate';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Card, Container, Typography } from '@material-ui/core';
import { BASE_IMG_S3 } from '~/utils/getImages';
// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: `${BASE_IMG_S3}/services_page/delivery_icon_cr09xx.png`,
    title: 'Delivery',
    description:
      'Are you craving for something delicious especially want to experience authentic Korean Food but do not want to risk your safety and do not know where to go and what to eat? Check out the Let’s Bee App. Let’s Bee full with Let’s Bee Food Delivery. Advance Reservation - Philippines is one of the best destinations for tourists and'
  },
  {
    icon: `${BASE_IMG_S3}/services_page/Reservation_Icon_rupzvl.png`,
    title: `Advance Reservations`,
    description:
      'Philippines is one of the best destinations for tourists and locals and Clark has its own fair share of tourist influx. Let’s Bee helps in booking accommodations in different hotels and resorts in Angeles City and Clark.'
  },
  {
    icon: `${BASE_IMG_S3}/services_page/Booking_Icon.png`,
    title: 'Real Time Bookings',
    description:
       'Booking your planned trips is made more hassle-free by Let’s Bee. In this section, Let’s Bee offers service listings for easier and real-time communication with your favorite and trusted booking sites for hotels, resorts and transportation.'
  },
  
];
const cards2 = [
  {
    icon: `${BASE_IMG_S3}/services_page/Martketplace.png`,
    title: `Marketplace`,
    description:
      'Marketplace- Other stores and businesses you are looking for are here in this section. Let’s Bee partnership has a wide network with local businesses.'
  },
  {
    icon: `${BASE_IMG_S3}/services_page/Logistics.png`,
    title: 'Logistics',
    description:
       'Sending and receiving your parcels from and to abroad or domestically is just a click away. Let’s Bee logistics provides forwarding, door-to-door, warehousing and courier services wherever that may be. Life will always BEE full of haBEEness with Let’s Bee.'
  } 
]

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
            Main Services
            </Typography>
          </MotionInView>
      

        <Grid container spacing={isDesktop ? 10 : 5}>
          {CARDS.map((card, index) => (
            <Grid key={card.title} item xs={12} sm={4} md={4}>
              <MotionInView variants={varFadeInUp}>                
              <Box style={{ alignItems: "center", display: "flex", justifyContent: "center", padding: "2.05em" }}>
                  <img 
                    src={card.icon}
                    alt={card.title}
                  /></Box>
                  <div style={{textAlign: "center"}}>
                    <Typography style={{ textAlign: "center", margin:"1em"}} variant="h3">
                        <span style={{ color: 'black'}}>{card.title}</span>
                    </Typography>
                  </div>
                  <div style={{textAlign: "center"}}>
                    <Typography style={{ textAlign: "center", margin:"1em"}} variant="h6">
                        <span style={{ color: 'black'}}>{card.description}</span>
                    </Typography>
                  </div>
              </MotionInView>
            </Grid>
          ))}
        </Grid>
        <Grid container>
          {cards2.map((card, index) => (
            <Grid key={card.title} item xs={12} sm={6} md={6} >
              <MotionInView variants={varFadeInUp}>                
              <div style={{paddingLeft:"7rem", paddingRight: "7rem"}}>
              <Box style={{ alignItems: "center", display: "flex", justifyContent: "center", padding: "2.05em" }}>
                  <img 
                    src={card.icon}
                    alt={card.title}
                  /></Box>
                 
                    <div style={{textAlign: "center"}}>
                      <Typography style={{ textAlign: "center", margin:"1em"}} variant="h3">
                          <span style={{ color: 'black'}}>{card.title}</span>
                      </Typography>
                    </div>
                    <div style={{textAlign: "center"}}>
                      <Typography style={{ textAlign: "center", margin:"1em"}} variant="h6">
                          <span style={{ color: 'black'}}>{card.description}</span>
                      </Typography>
                    </div>
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
