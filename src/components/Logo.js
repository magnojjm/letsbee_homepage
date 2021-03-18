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
      src="https://res.cloudinary.com/jdm01263d/image/upload/v1615853565/letsbeelife/logo.png"
      height={40}
      className={className}
      {...other}
    />
  );
}

export default Logo;
