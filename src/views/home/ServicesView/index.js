import React from 'react';
import Page from '~/components/Page';
import Footer from '../Footer';
import Services from './Services';
import Partners from '../PartnersView';
import About from './About';
import Minimal from './Minimal';
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
      backgroundColor: theme.palette.background.white
    }
  }));

  function ServicesView() {
      const classes = useStyles();

      return (
        <Page title="Let's Bee | Services" id="move_top" className={classes.root}>
            <Box 
            >
              <Services />
              <About />
              <Partners />
            </Box>
            {/* <Minimal /> */}
            <Footer />
        </Page>
      );
  }

  export default ServicesView;