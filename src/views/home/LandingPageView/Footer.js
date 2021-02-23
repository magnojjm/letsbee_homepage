import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';
import Logo from '~/components/Logo';
import { Link as ScrollLink } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Container, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    padding: '41px 0px',
    background:'#fcb200'
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
      <Container maxWidth="lg">
        <ScrollLink to="move_top" spy={true} smooth={true}>
          <Logo sx={{ mb: 1, mx: 'auto' }} />
        </ScrollLink>

        <Typography variant="caption">
          letsbeelife © All rights reserved 2021
          {/* <br /> Made by &nbsp;
          <Link href="https://minimals.cc/">minimals.cc</Link> */}
        </Typography>
      </Container>
    </div>
  );
}

export default Footer;
