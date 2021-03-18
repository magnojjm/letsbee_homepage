import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import Logo from '~/components/Logo';
import { Link as ScrollLink } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { BASE_IMG } from '~/utils/getImages';
import { Box, Grid, Icon, Link, Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 0px 0 60px",
    backgroundImage: `url("${BASE_IMG}/v1615963711/letsbeelife/services_page/Section_Background.png")`,
    backgroundSize: "cover",
  },
  footerInfo: {
    maxWidth: "100%",
    flexGrow: "0",
    margin: "5px 0 0",
    fontSize: "22px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#000000",
  },
  footerTitle: {
    fontWeight: "bold"
  },
  copyright: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    maxWidth: "100%",
    height: "85px",
    fontWeight: 'bold',
    padding: "24px",
    // backgroundColor: "white",
  },

  map: {
    width: "448px", height: "370px", flexGrow: "0", margin: "0 0 0 230px"},
  logo: {
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
      <div className= {classes.content}>
          {/* <Container> */}
          <Grid container > 
            {/* <Container> */}
                <Grid item xs={12} md={7} >
                  <Box style={{ paddingTop: "70px" }}>
                    <Typography>
                    <Box >
                      <div component="subtitle" display={{ xs: 'none', lg: 'block', xl: 'block' }} 
                      className={classes.footerInfo}>                       
                      <div>
                      <Typography className={classes.footerTitle} variant="h2">Download Let's Bee App Now! </Typography>
                          </div>
                          <div>
                          <Box mt={4}/>
                          <Typography variant="h4" style={{marginRight:"40px"}}>
                          <span>Lorem ipsum dolor sit amet consectetur adipiscing Lorem ipsum dolor 
                            sit amet consectetur adipiscing consectetur adipiscing  Lorem ipsum dolor sit amet consectetur adipiscing </span>
                          </Typography>
                          </div>
                          {/* <Box sx={{
                              position: 'absolute',
                              display: { xs: 'none', md: 'block' }
                            }}> */}
                          <div>
                            <img style={{overflow: "hidden", display: "inline-block", marginTop: "40px", marginRight: "40px"}} src={`${BASE_IMG}/v1615964489/letsbeelife/services_page/Google_Play.png`}/>
                            <img style={{overflow: "hidden", display: "inline-block"}} src={`${BASE_IMG}/v1615964506/letsbeelife/services_page/App_Store.png`}/> 
                            </div>
                            {/* </Box> */}
                        </div>
                      </Box>
                      </Typography>
                  </Box>
                  
                </Grid>
                {/* </Container> */}
                {/* <Grid item xs={12} md={3} style={{padding:"10px" }}>
                  
                </Grid> */}
                
                <Grid item xs={12} md={5} style={{paddingTop:"80px" }}>
                <Box sx={{display: { xs: 'none', md: 'none', lg: 'block' } }}>
                  <img src={`${BASE_IMG}/v1615961885/letsbeelife/services_page/Phone.png`} />
                  </Box>
              </Grid>
            </Grid>
      </div>
        <Grid>
            <Typography className={classes.copyright}>
              All Rights Reserved © 2021 Let's Bee
            </Typography>
        </Grid>
        
    </div>
    
  );
}

export default Footer;
