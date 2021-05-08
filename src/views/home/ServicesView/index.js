import React from 'react';
import Page from '~/components/Page';
import Footer from './Footer';
import Services from './Services_sec1';
import Service_sec2 from './Service_sec2';
import Service_sec3 from './Service_sec3';
import Service_4 from './Service_4';
import Service_5 from './Service_5';
import Service_7 from './Service_7';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
    root: {
      height: '100%'
    },
    content: {
      overflow: 'hidden',
      position: 'relative',
      // backgroundColor: theme.palette.background.white
    }
  }));

  function ServicesView() {
      const classes = useStyles();

      return (
        <Page title="Let's Bee | Services" id="move_top" className={classes.root}>
            <Box 
            >
              <Services />
              <Service_sec2 />
              <Service_sec3 />
              <Service_4 />
              <Service_5 />
              <Service_7 />
              {/* <Partners /> */}
            </Box>
            {/* <Minimal /> */}
            <Footer />
        </Page>
      );
  }

  export default ServicesView;