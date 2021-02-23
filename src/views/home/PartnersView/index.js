import React from 'react';
import Page from '~/components/Page';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import BrandPartners from './brand-partners';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
    root: {
      height: '100%'
    },
    content: {
      overflow: 'hidden',
      position: 'relative',
      backgroundColor: theme.palette.background.default
    }
  }));

  function PartnersView() {
      const classes = useStyles();

      return (
        <Page title="Minimal | Home" id="move_top" className={classes.root}>
            <BrandPartners />
            <Footer />
        </Page>
      );
  }

  export default PartnersView;