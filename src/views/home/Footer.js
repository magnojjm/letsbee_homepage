import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import Logo from '~/components/Logo';
import { Link as ScrollLink } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { BASE_IMG, BASE_IMG_S3 } from '~/utils/getImages';
import { Box, Grid, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  content: {
    padding: "37px 0px 37px 0px",
    backgroundImage: `url("${BASE_IMG}/v1615853565/letsbeelife/2_gnaqqz.jpg")`,
    backgroundSize: "cover",
  },
  footerInfo: {
    flexGrow: "0",
    margin: "10px 0 0",
    fontFamily: "Poppins",
    fontSize: "22px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "normal",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#000000",
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
      <div className={classes.content}>
        <Grid container direction="row">
          <Grid
            item
            xs={12}
            lg={4}
            style={{ marginLeft: '100px', padding: '30px' }}
          >
            <Box
              style={{
                paddingTop: '10px'
              }}
            >
              <Typography>
                <div style={{ marginBottom: '40px' }}>
                  {/* <img src="https://letsbeelife.s3.ap-east-1.amazonaws.com/footerLogo.png" /> */}
                  <img
                    width="60%"
                    minWidth="60%"
                    src={`${BASE_IMG_S3}/logo.png`}
                  />
                </div>
                <div
                  style={{
                    alignItems: 'flex-start',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    marginRight: '5px'
                  }}
                >
                  <a href="#" style={{ marginRight: '5px' }}>
                    <img src="/static/images/social/facebook.png" />
                  </a>
                  <a href="#" style={{ marginRight: '5px' }}>
                    <img src="/static/images/social/Instagram.png" />
                  </a>
                  <a href="#" style={{ marginRight: '5px' }}>
                    <img src="/static/images/social/youtube.png" />
                  </a>
                  <a href="#" style={{ marginRight: '5px' }}>
                    <img src="/static/images/social/tiktok.png" />
                  </a>
                </div>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4} style={{ padding: '10px' }}>
            <Box>
              <div
                component="subtitle"
                display={{ xs: 'none', lg: 'block', xl: 'block' }}
                className={classes.footerInfo}
              >
                {' '}
                <div>
                  <Typography variant="h3">Contact Information </Typography>
                  <span>
                    Head Office: Block 4, Lot 5, Yukon Street, <br />
                    Riverside Subdivision, Brgy. Anunas, Angeles City, <br />
                    Pampanga
                  </span>
                </div>
                <div>
                  <Box mt={4} />
                  <span>Hotline: (045) 300 6546</span>
                </div>
                <Box mt={2} />
                <div>
                  <span>Email: hello@letsbee.ph</span>
                </div>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} lg={3} style={{ padding: '10px' }}>
            <img src={`${BASE_IMG_S3}/mapVector.png`} />
          </Grid>
        </Grid>
      </div>
      <Grid>
        <Typography className={classes.copyright}>
          All Rights Reserved ?? 2021 Let's Bee
        </Typography>
      </Grid>
    </div>
  );
}

export default Footer;
