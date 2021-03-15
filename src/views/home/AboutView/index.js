import React from 'react';
import Hero from './Hero';
import Footer from './Footer';
// import DarkMode from './DarkMode';
import Page from '~/components/Page';
import Type from './TypeSection';
import About from './About';
import Real_Section from './Real_Section';
import CenterText from './CenterText';
// import Partners from './Partners'
// import Advertisement from './Advertisement';
// import CleanInterfaces from './CleanInterfaces';
// import HugePackElements from './HugePackElements';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core'
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

function LandingPageView() {
  const classes = useStyles();

  return (
    <Page title="Let's Bee | Home" id="move_top" className={classes.root}>
      {/* <Hero /> */}
      <div className={classes.content}>
        <Box mt={5}>
        <About />
        <Type />
        <CenterText />
        <Real_Section />
        </Box>
        <Footer />
      </div>
    </Page>
  );
}

export default LandingPageView;
