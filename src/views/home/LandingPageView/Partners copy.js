import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import useBreakpoints from '~/hooks/useBreakpoints';
import { varFadeInUp, varFadeInDown, MotionInView } from '~/components/Animate';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Card, Container, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';
import {
  varFadeIn,
  // varWrapEnter,
  // varFadeInUp,
  // varFadeInRight
} from '~/components/Animate';
import { brand_partners } from '../PartnersView/components/constants/brand-partners.data'
// ----------------------------------------------------------------------

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
      marginBottom: theme.spacing(5),
      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(15)
      }
    },
    partnerWithUs: {
      height: '47px',
      flexGrow: '0',
      margin: '45px 91px 12px 141px',
      padding: '8px 38px 7px',
      borderRadius: '15px',
      border: 'solid 2px #000000',
      color: 'black',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
    },
    content: {
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: theme.palette.background.white
    }
   
  };
});

// ----------------------------------------------------------------------

PartnersHelps.propTypes = {
  className: PropTypes.string
};

function PartnersHelps({ className }) {
  const classes = useStyles();
  const isDesktop = useBreakpoints('up', 'lg');

  return (
    <div className={clsx(classes.root, className)} style={{backgroundColor: "white"}}>
      <Container maxWidth="lg" >
        <div className={classes.heading}>
          <MotionInView variants={varFadeInDown}>
            <Typography variant="h2" align="center" style={{color: "black"}}>
              Partnered with businesses - big and small
            </Typography>
          </MotionInView>
        </div>
        <Grid container style={{display: "flex", justifyContent: 'center'}} spacing={isDesktop ? 10 : 5} >
          {/* {brand_partners.map((card, index) => ( */}
            {/* <Grid item key={card.name} xs={5} md={3} >
              <MotionInView variants={varFadeInUp}> */}
                {/* <Card
                  className={clsx(classes.card, {
                    [classes.cardLeft]: index === 0,
                    [classes.cardCenter]: index === 1
                  })}
                > */}
                  {/* <img
                    src={card.image}
                    className={classes.content}
                  /> */}
                  {/* <Typography variant="h5" paragraph>
                    {card.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {card.description}
                  </Typography> */}
                {/* </Card> */}
              {/* </MotionInView>
            </Grid>
          ))} */}
          <Button href="./partners" className={classes.partnerWithUs}>Be our merchant partner</Button>
          
        </Grid>
      </Container>
    </div>
  );
}

export default PartnersHelps;