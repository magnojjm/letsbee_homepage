import React from 'react';
import Footer from '../Footer';
import Page from '~/components/Page';
import CustomerService from './CustomerService/CustomerService';
import Safety from './Safety/Safety';
import Faq from './Faqs/Faqs';
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

function HelpCenterView() {
  const classes = useStyles();

  return (
    <Page title="Let's Bee | Home" id="move_top" className={classes.root}>
      <div className={classes.content}>
        <Box mt={5}>
          <Faq />
          {/* <Safety />
          <CustomerService /> */}
        </Box>
        <Footer />
      </div>
    </Page>
  );
}

export default HelpCenterView;
