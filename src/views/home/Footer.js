import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import Logo from '~/components/Logo';
import { Link as ScrollLink } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import "./Footer.css";
import { Box, Grid, Icon, Link, Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
 
    padding: '55px 33px 61px',
    backgroundColor: '#fad932',

  },
  about: {
    
    height: '146px',
    margin: '7px 115px 41px 18px',
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: 'white',
  }, 
  copyright: {
    width: '533px',
    height: '38px',
    fontFamily: 'Poppins',
    fontSize: '18px',
    // fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },
  logo: {
    width: '150px',
    height: '150px',
    margin: '0 18px 44px 0'
  }
}));

// ----------------------------------------------------------------------

Footer.propTypes = {
  className: PropTypes.string
};

function Footer({ className }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
        
         <Grid container direction="row" 
                justify="space-between"
                alignItems="flex-start" xs={12}> 
            <Grid style={{display: "flex", alignItems: "center"}} item xs={12} sm={4}>
                {/* <ScrollLink to="move_top" spy={true} smooth={true}></ScrollLink> */}
                <Logo className={classes.logo} sx={{ mb: 1, mx: 'auto' }} />
                  <Typography variant="body1" className={classes.about}><strong>Let’s Bee Delivery Services Corporation</strong><br /> 
                  {/* <span>is a [pertinent company information] in Angeles City that runs a provider of services such as food delivery and business information.</span> */}
                  </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                  {/* <Typography style={{display: "flex", alignItems: "center"}} className="Follow-us">Follow us
                  </Typography> */}
                  <Box component="span" display={{ xs: 'none', lg: 'block', xl: 'block' }}>
                    <Typography className="Follow-us">Download our apps</Typography>
                    <Typography className="Follow-us">Let's Bee Delivery</Typography>
                    <Typography className="Follow-us">Let's Bee Life</Typography>
                  </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                  <Typography>
                    <Icon className="social-facebook"><img src="/static/images/social/facebook.png" /></Icon>
                    <Icon className="social-youtube"><img src="/static/images/social/youtube.png" /></Icon>
                    <Icon className="social-tiktok"><img src="/static/images/social/tiktok.png" /></Icon>
                  </Typography>
              </Grid>
          </Grid>
        
      <Typography className={classes.copyright} variant="caption">
          Copyright © 2020 Let's Bee Delivery
        </Typography>
    </div>
  );
}

export default Footer;
