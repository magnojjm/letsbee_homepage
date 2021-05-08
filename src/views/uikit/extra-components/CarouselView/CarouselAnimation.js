import clsx from 'clsx';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import React, { useState, useRef } from 'react';
import { IndexArrows } from '~/components/Slider';
import { varFadeInRight, MotionContainer } from '~/components/Animate';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Box, Card, Button, Typography } from '@material-ui/core';

// ----------------------------------------------------------------------

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    position: 'relative',
    '&:after': {
      top: 0,
      zIndex: 8,
      width: '100%',
      content: "''",
      height: '100%',
      position: 'absolute',
      // backgroundImage: `linear-gradient(to top, ${
      //   theme.palette.grey[900]
      // } 0%,${alpha(theme.palette.grey[900], 0)} 100%)`,
    }
  },
  title:{
    width: '596px',
    height: '132.2px',
    margin: '0 0 18.8px',
    textShadow: '2px 3px 7px rgba(0, 0, 0, 0.75)',
    fontFamily: 'Poppins',
    fontSize: '49px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: 'white'
  },
  description: {
    width: '596px',
    height: '132.2px',
    margin: '0 0 18.8px',
    textShadow: '2px 3px 7px rgba(0, 0, 0, 0.75)',
    fontFamily: 'Poppins',
    fontSize: '49px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    color: 'white',
  },
  viewButton: {
    width: '176px',
    height: '42px',
    margin: '18.8px 420px 0 0',
    padding: '9px 36px 8px',
    borderRadius: '15px',
    border: 'solid 2px white',
    backgroundColor: 'rgba(0, 0, 0, 0.15)'
  }
  
}));

// ----------------------------------------------------------------------

SlideItem.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool
};

function SlideItem({ item, isActive }) {
  const classes = useStyles();
  const { image, title } = item;

  return (
    <div className={classes.item}>
      <Box
        component="img"
        alt={title}
        src="/static/images/placeholder.svg"
        srcSet={`${image.small} 600w, ${image.medium} 960w, ${image.large} 1280w`}
        loading="lazy"
        sx={{ width: '100%', height: 719, objectFit: 'cover' }}
      />

      <Box
        sx={{
          p: 3,
          bottom: 0,
          zIndex: 9,
          width: '100%',
          position: 'absolute'
        }}
      >
        <MotionContainer open={isActive}>
          <Box sx={{ maxWidth: 480, color: 'white' }}>
            {/* <motion.div variants={varFadeInRight}>
              <Typography className={classes.title} variant="h3" gutterBottom>
                {item.title}
              </Typography>
            </motion.div>
            <motion.div variants={varFadeInRight}>
              <Typography className={classes.title} variant="body2" noWrap gutterBottom>
                {item.description}
              </Typography>
            </motion.div> */}
            <motion.div variants={varFadeInRight}>
              <Button className={classes.viewButton} variant="contained" sx={{ mt: 3 }}>
                View More
              </Button>
            </motion.div>
          </Box>
        </MotionContainer>
      </Box>
    </div>
  );
}

CarouselAnimation.propTypes = {
  carousels: PropTypes.array.isRequired,
  className: PropTypes.string
};

function CarouselAnimation({ carousels, className, ...other }) {
  const classes = useStyles();
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    speed: 800,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentIndex(next)
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <Card style={{borderRadius:'0px'}} className={clsx(classes.root, className)} {...other}>
      <Slider ref={carouselRef} {...settings}>
        {carousels.map((item, index) => (
          <SlideItem
            key={item.title}
            item={item}
            isActive={index === currentIndex}
          />
        ))}
      </Slider>

      <IndexArrows
        index={currentIndex}
        total={carousels.length}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </Card>
  );
}

export default CarouselAnimation;
