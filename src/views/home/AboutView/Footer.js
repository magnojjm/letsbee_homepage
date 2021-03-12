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
  },
  content: {
    // width: "1919px",
    // height: "444px",
    // margin: "0 0 0 1px",
    padding: "37px 187px 37px 186px",
    backgroundColor: "#fad932",
  },
  footerInfo: {
    width: "579px",
    height: "266px",
    flexGrow: "0",
    margin: "10px 0 0",
    fontFamily: "Poppins",
    fontSize: "25px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#000000",
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
    MaxWidth: "100%",
    height: "85px",
    padding: "24px 1350px 23px 186px",
    backgroundColor: "white",
  },
  map: {
    width: "448px", height: "370px", flexGrow: "0", margin: "0 0 0 330px"},
  logo: {
    width: "250px", 
    height: "47.1px", 
    flexGrow: "0", 
    margin: "10.9px 23px 9.8px 0", 
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
      <div className={classes.content}>
          <Grid container direction="row"> 
              <Grid style={{display: "flex", alignItems: "center"}} lg={3}>
                  {/* <ScrollLink to="move_top" spy={true} smooth={true}></ScrollLink> */}
                  <Grid >
                    {/* <Logo  className={classes.logo}/> */}
                    <img className={classes.logo}src="/static/footerLogo.png" />
                    <Box mt={2}/>
                    <Typography style={{position: "absolute"}}>
                        <Icon className="social-facebook"><img src="/static/images/social/facebook.png" /></Icon>
                        <Icon className="social-instagram"><img src="/static/images/social/Instagram.png" /></Icon>
                        <Icon className="social-youtube"><img src="/static/images/social/youtube.png" /></Icon>
                        <Icon className="social-tiktok"><img src="/static/images/social/tiktok.png" /></Icon>
                        
                      </Typography>
                    </Grid>
                </Grid>
                <Grid xs={12} lg={3}>
                  <Box mt={2}/>
                    <Typography 
                    className="Contact"><span >Contact Information</span>
                    </Typography> 
                    <div component="span" display={{ xs: 'none', lg: 'block', xl: 'block' }} className={classes.footerInfo}>                       <div>
                        <span>Head Office: Block 4, Lot 5, Yukon Street, 
                        Riverside Subdivision, Brgy. Anunas, Angeles 
                        City, Pampanga</span>
                        </div>
                        <div>
                        <Box mt={4}/>
                        <span>Hotline: (045) 888 8888</span></div>
                        <Box mt={2}/>
                        <div><span>Email: letsbeecorp@gmail.com</span>
                        </div>
                      </div>
                </Grid>
                <Grid className={classes.map} item  lg={3}>
                  <img src="/static/mapVector.png" />
              </Grid>
            </Grid>
            
      </div>
        <Grid container direction="row" >
            <Typography className={classes.copyright}>
              Copyright © 2020 Let's Bee
            </Typography>
        </Grid>
        
    </div>
    
  );
}

export default Footer;
