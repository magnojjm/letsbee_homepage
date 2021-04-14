import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

// ----------------------------------------------------------------------

Logo.propTypes = {
  className: PropTypes.string
};

function Logo({ className, ...other }) {
  return (
    <Box
      component="img"
      alt="logo"
      src="https://letsbeelife.s3.ap-east-1.amazonaws.com/aboutuspage/logo.png"
      height={40}
      className={className}
      {...other}
    />
  );
}

export default Logo;
