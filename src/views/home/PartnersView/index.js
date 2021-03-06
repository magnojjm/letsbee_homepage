import React from 'react';
import Page from '~/components/Page';
import Footer from '../Footer';
import { makeStyles } from '@material-ui/core/styles';
import Partners from './Partners';
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

  function PartnersView() {
      const classes = useStyles();

      return (
        <Page title="Let's Bee | Partners" id="move_top" className={classes.root}>
            <Box mt={2}>
              <Partners />
            </Box>
            {/* <Footer /> */}
        </Page>
      );
  }

  export default PartnersView;