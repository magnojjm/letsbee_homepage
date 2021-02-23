import React from 'react'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
// import { Row, Col, Container } from 'reactstrap'
import { brand_partners } from './components/constants/brand-partners.data'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      [theme.breakpoints.up('md')]: {
        flexGrow: 1,
        paddingLeft: theme.spacing(10)
      }
    },
    section: {
      cursor: 'pointer',
      overflow: 'hidden',
      marginBottom: theme.spacing(10),
      boxShadow: theme.shadows[25].z16,
      borderRadius: theme.shape.borderRadiusMd
    },
    handleControl: {
      width: 3,
      height: '100%',
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.palette.common.white,
      boxShadow: `-16px 0 32px 4px ${theme.palette.grey[500]}`
    },
    circle: {
      width: 23,
      zIndex: 9,
      height: 23,
      borderRadius: '50%',
      position: 'absolute',
      background: theme.palette.gradients.error,
      boxShadow: 'inset -2px -2px 4px 0 rgba(0, 0, 0, 0.24)'
    },
    circleLarge: {
      zIndex: 8,
      width: 29,
      height: 29,
      boxShadow: theme.shadows[24],
      background: theme.palette.common.white
    }
  }));
  
  // ----------------------------------------------------------------------
  
function BrandPartners({ className }) {
    const classes = useStyles();
    return (
    <>
        {brand_partners.map(b =>
        <Card className={classes.root}>
            <CardMedia
        className={classes.media}
        image={b.image}
        title={b.name}
        alt={b.name}
      />
            <div className={clsx(classes.root, className)}>
            
            <div key={b.name}>
                <img width='100%' src={b.image} alt={b.name} /> 
            </div>
          
        </div>
            </Card>  )}
            </>
    )
}

BrandPartners.propTypes = {
    links: PropTypes.array.isRequired,
    className: PropTypes.string
  };
export default BrandPartners
