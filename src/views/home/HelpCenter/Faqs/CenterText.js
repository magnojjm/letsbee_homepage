import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import { Tabs, Tab, Avatar } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Box from '@material-ui/core/Box';
import { varFadeInUp, varFadeInDown, MotionInView } from '~/components/Animate';
import useBreakpoints from '~/hooks/useBreakpoints';
import { Grid, Container, Typography } from '@material-ui/core';
import { BASE_IMG_S3 } from '~/utils/getImages';
import Paper from '@material-ui/core/Paper';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`
  };
}

const CARDS = [
  {
    tabOne: {
      icon: `${BASE_IMG_S3}/aboutuspage/Hassle-free-vector.png`,
      title: 'FAQs',
      heading:
        'Quisque ante lacus, posuere eget ultrices quis, fringilla eget lorem?',
      description:
        'The set is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.'
    },
    tabTwo: {
      icon: `${BASE_IMG_S3}/aboutuspage/Community-Vector.png`,
      title: 'Safety',
      heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
      description:
        'Maecenas volutpat sit amet nisl ut maximus. Vestibulum consequat dui in purus auctor tincidunt. Vestibulum sodales ante in imperdiet tristique.'
    },
    tabThree: {
      icon: `${BASE_IMG_S3}/aboutuspage/Technology-Vector.png`,
      title: 'Customer Service',
      heading: 'Nunc id mollis odio, nec gravida felis?',
      description:
        'The set is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.'
    }
  }
];


const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1
    }
  }
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: '500px'
  },
  sectionThree: {
    fontSize: '60px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#000000'
  },
  adsSection: {
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textAlign: 'center',
    color: '#000000'
  },
  padding: {
    padding: theme.spacing(3)
  },
  rectangle: {
    width: '383px',
    height: '329px',
    margin: '0 54px',
    padding: '48px 92px 23px',
    borderRadius: '13px',
    boxShadow: '0 0 42px -13px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'var(--white)'
  },
  demo1: {
    height: '447px',
    backgroundImage: `url("${BASE_IMG_S3}/1.jpg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: '89px 257px 106px',
    objectFit: 'contain',
    backgroundColor: '#fad932'
  }
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const classTab = StyledTab;
  const [value, setValue] = React.useState(0);
  const isDesktop = useBreakpoints('up', 'lg');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="xl" className={classes.sectionThree}>
      {/* <Container maxWidth="xl"> */}
      <div className={classes.demo1} onChange={handleChange}>
        <Grid>
          <Tabs
            classes={classTab.root}
            centered={true}
            value={value}
            onChange={handleChange}
          >
            <Tab
              label={
                <>
                  <div style={{ backgroundColor: '#fff' }}>
                    {
                      <Avatar
                        className={classes.rectangle}
                        style={{
                          width: '329px',
                          minWidth: '330px',
                          height: '222px',
                          margin: '0 0 6px',
                          borderRadius: '10px'
                        }}
                        src={require(`/Users/jdm0126/Documents/trackerApp/new_template/letsbeeLife/src/assets/faqs.png`)}
                      />
                    }
                    FAQs
                  </div>
                </>
              }
              {...a11yProps(0)}
            />

            <Tab
              label={
                <>
                  <div style={{ backgroundColor: '#fff' }}>
                    {
                      <Avatar
                        className={classes.rectangle}
                        style={{
                          width: '329px',
                          minWidth: '330px',
                          height: '222px',
                          margin: '0 0 6px',
                          borderRadius: '10px'
                        }}
                        src={require(`/Users/jdm0126/Documents/trackerApp/new_template/letsbeeLife/src/assets/safety.png`)}
                      />
                    }
                    Safety
                  </div>
                </>
              }
              {...a11yProps(1)}
            />

            <Tab
              label={
                <>
                  <div style={{ backgroundColor: '#fff' }}>
                    {
                      <Avatar
                        className={classes.rectangle}
                        style={{
                          width: '329px',
                          minWidth: '330px',
                          height: '222px',
                          margin: '0 0 6px',
                          borderRadius: '10px'
                        }}
                        src={require(`/Users/jdm0126/Documents/trackerApp/new_template/letsbeeLife/src/assets/customerservice.png`)}
                      />
                    }
                    Customer Service
                  </div>
                </>
              }
              {...a11yProps(2)}
            />
          </Tabs>
        </Grid>
      </div>
      {/* </Container> */}
      <TabPanel value={value} index={0}>
        {CARDS.map(card => (
          <Container maxWidth="md">
            <div>
              <h3
                style={{
                  marginBottom: '1rem',
                  paddingBottom: '1rem',
                  paddingTop: '2rem'
                }}
              >
                {card.tabOne.title}
              </h3>
              <hr />
              {/* <Typography variant="p">
                Quisque ante lacus, posuere eget ultrices quis, fringilla eget
                lorem?
              </Typography> */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style={{ marginTop: '1rem', marginBottom: '1rem' }}
                >
                  <Typography className={classes.heading}>
                    {card.tabOne.heading}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{card.tabOne.description}</Typography>
                </AccordionDetails>
              </Accordion>
              <hr />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>
                    {card.tabTwo.heading}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{card.tabTwo.description}</Typography>
                </AccordionDetails>
              </Accordion>
              <hr />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    {card.tabThree.heading}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{card.tabThree.description}</Typography>
                </AccordionDetails>
              </Accordion>
              <hr />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    {card.tabOne.heading}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Quisque ante lacus, posuere eget ultrices quis, fringilla
                    eget lorem?
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <hr />
            </div>
          </Container>
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {CARDS.map(card => (
          <Container maxWidth="md">
            <div>
              <h3
                style={{
                  marginBottom: '1rem',
                  paddingBottom: '1rem',
                  paddingTop: '2rem'
                }}
              >
                {card.tabTwo.title}
              </h3>
              <hr />
              {/* <Typography variant="p">
                Quisque ante lacus, posuere eget ultrices quis, fringilla eget
                lorem?
              </Typography> */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style={{ marginTop: '1rem', marginBottom: '1rem' }}
                >
                  <Typography className={classes.heading}>
                    {card.tabTwo.heading}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{card.tabTwo.description}</Typography>
                </AccordionDetails>
              </Accordion>
              <hr />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>
                    {card.tabTwo.heading}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{card.tabTwo.description}</Typography>
                </AccordionDetails>
              </Accordion>
              <hr />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    {card.tabThree.heading}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{card.tabThree.description}</Typography>
                </AccordionDetails>
              </Accordion>
              <hr />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    {card.tabOne.heading}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Quisque ante lacus, posuere eget ultrices quis, fringilla
                    eget lorem?
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <hr />
            </div>
          </Container>
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {CARDS.map(card => (
          <Container maxWidth="md">
            <div>
              <h3
                style={{
                  marginBottom: '1rem',
                  paddingBottom: '1rem',
                  paddingTop: '2rem'
                }}
              >
                {card.tabThree.title}
              </h3>
              <hr />
              {/* <Typography variant="p">
                Quisque ante lacus, posuere eget ultrices quis, fringilla eget
                lorem?
              </Typography> */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style={{ marginTop: '1rem', marginBottom: '1rem' }}
                >
                  <Typography className={classes.heading}>
                    {card.tabThree.heading}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{card.tabOne.description}</Typography>
                </AccordionDetails>
              </Accordion>
              <hr />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>
                    {card.tabThree.heading}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{card.tabTwo.description}</Typography>
                </AccordionDetails>
              </Accordion>
              <hr />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    {card.tabThree.heading}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{card.tabThree.description}</Typography>
                </AccordionDetails>
              </Accordion>
              <hr />
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    {card.tabOne.heading}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Quisque ante lacus, posuere eget ultrices quis, fringilla
                    eget lorem?
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <hr />
            </div>
          </Container>
        ))}
      </TabPanel>
    </Container>
  );
}
