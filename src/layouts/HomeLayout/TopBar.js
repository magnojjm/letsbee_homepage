import clsx from 'clsx';
import Logo from '~/components/Logo';
import { Icon } from '@iconify/react';
import React, { useState, useRef } from 'react';
import useOffSetTop from '~/hooks/useOffSetTop';
import PopoverMenu from '~/components/PopoverMenu';
import homeFill from '@iconify-icons/eva/home-fill';
import { PATH_HOME, PATH_DOCS } from '~/routes/paths';
import roundSpeed from '@iconify-icons/ic/round-speed';
import menu2Fill from '@iconify-icons/eva/menu-2-fill';
import bookOpenFill from '@iconify-icons/eva/book-open-fill';
import roundStreetview from '@iconify-icons/ic/round-streetview';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { makeStyles, alpha } from '@material-ui/core/styles';
import {
  Box,
  List,
  Link,
  Menu,
  Button,
  AppBar,
  Hidden,
  Toolbar,
  MenuItem,
  Container,
  ListItemText,
  ListItemIcon,
  Typography
} from '@material-ui/core';
import { MIconButton } from '~/@material-extend';

// ----------------------------------------------------------------------

const MENU_LINKS = [
  // { title: 'Home', icon: homeFill, href: '/' },
  // { title: 'Components', icon: roundStreetview, href: PATH_HOME.components },
  // { title: 'Dashboard', icon: roundSpeed, href: PATH_HOME.dashboard },
  // { title: 'Documentation', icon: bookOpenFill, href: PATH_DOCS.root },
  { title: 'Home', icon: roundStreetview, href: '/'},
  { title: 'Services', icon: roundStreetview, href: '/services'},
  { title: 'About Us', icon: homeFill, href: '/about'},
  // { title: 'Partner With Us', icon: roundStreetview, href: '/partners'}
  
];

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 96;

const useStyles = makeStyles(theme => ({
  root: {
    width: "1920px",
    height: "72px",
    padding: "14.5px 67px 10.5px 180.5px;",
    backgroundColor: "#fedc3e",
  },
  topBarLogo: {
    width: '314px',
    height: '50px',
    margin: '0 0 0 0'
  },
  loginButton: {
    // width: "160px",
    height: "44px",
    flexGrow: "0",
    padding: "9px 0px 10px",
    color: "#000",
    // borderRadius: "11px",
    // backgroundColor: "#cbb031",
    "& :active": { color: "white" },
  },
  onClick: {
    width: "138px",
    height: "72px",
    flexGrow: "0",
    padding: "23px 17px 22px 16px",
    backgroundColor: "#efc11e",
  },
  toolbar: {
    height: APP_BAR_MOBILE,
    transition: theme.transitions.create(['height', 'background-color'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter
    }),
    [theme.breakpoints.up('md')]: {
      height: APP_BAR_DESKTOP
    },
    padding: "0 10px 10px"
  },
  toolbarContainer: {
    lineHeight: 0,
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'space-between'
  },
  toolbarShadow: {
    left: 0,
    right: 0,
    bottom: 0,
    height: 24,
    zIndex: -1,
    content: "''",
    margin: 'auto',
    borderRadius: '50%',
    position: 'absolute',
    width: `calc(100% - 48px)`,
    boxShadow: theme.shadows[25].z8
  },
  desktopMenu: {
    '& > * ': {
      color: theme.palette.text.primary,
      marginRight: `${theme.spacing(2)} !important`
    }
  },
  isDesktopActive: {
    // color: `${theme.palette.primary.main} !important`
    color: `#fff !important`
  },
  mobileMenu: {
    color: theme.palette.text.secondary
  },
  isMobileActive: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    )
  },
  isHome: { color: theme.palette.common.black },
  // onScroll: {
  //   '& $toolbar': {
  //     backgroundColor: theme.palette.background.default
  //   },
  //   '& $isHome': { color: theme.palette.text.primary },
  //   [theme.breakpoints.up('md')]: {
  //     '& $toolbar': { height: APP_BAR_DESKTOP - 20 }
  //   }
  // }
}));

// ----------------------------------------------------------------------

function TopBar() {
  const classes = useStyles();
  const anchorRef = useRef(null);
  const { pathname } = useLocation();
  const offset = useOffSetTop(100);
  const [openMenu, setOpenMenu] = useState(false);
  const isHome = pathname === '/';
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClickPartners = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosePartners = () => {
    setAnchorEl(null);
  };

  const renderMenuDesktop = (
    <div className={classes.desktopMenu}>
      {MENU_LINKS.map(link => (
        <Link
          exact
          to={link.href}
          key={link.title}
          color="initial"
          underline="none"
          variant="subtitle2"
          component={RouterLink}
          activeClassName={classes.isDesktopActive}
          className={clsx({
            [classes.isHome]: isHome
          })}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );

  const renderMenuMobile = (
    <PopoverMenu
      width={220}
      open={openMenu}
      anchorEl={anchorRef.current}
      onClose={() => setOpenMenu(false)}
    >
      <List>
        {MENU_LINKS.map(link => (
          <MenuItem
            exact
            to={link.href}
            key={link.title}
            component={RouterLink}
            onClick={() => setOpenMenu(false)}
            activeClassName={classes.isMobileActive}
            className={classes.mobileMenu}
          >
            <ListItemIcon>
              <Icon icon={link.icon} width={20} height={20} />
            </ListItemIcon>
            <ListItemText>{link.title}</ListItemText>
          </MenuItem>
        ))}
      </List>
    </PopoverMenu>
  );

  return (
    <AppBar
      color="transparent"
      className={clsx(classes.root, { [classes.onScroll]: offset })}
    >
      <Toolbar disableGutters className={classes.toolbar}>
        <Container disableGutters maxWidth="xl" className={classes.toolbarContainer}>
          <RouterLink to="/">
            <Box component="span" display="block" className={classes.topBarLogo}>
              <Typography display={{ md: 'none', lg: 'block'}} style={{color: "white"}}>
                <img src="https://letsbeelife.s3.ap-east-1.amazonaws.com/logo.png" />
              </Typography>
            </Box>
          </RouterLink>
          <Box sx={{ flexGrow: 1 }} />

          <Hidden mdDown>{renderMenuDesktop}</Hidden>

          <Button
            className={classes.loginButton}
            // variant="outlined"
            component={Link}
            // href={PATH_HOME.dashboard}
            // href='./partners'
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClickPartners}
          >
            Partner with us
          </Button>
          
          <Menu
           id="demo-positioned-menu"
           aria-labelledby="demo-positioned-button"
           anchorEl={anchorEl}
           open={open}
           onClose={handleClosePartners}
           getContentAnchorEl={null}
           anchorOrigin={{
             vertical: 'bottom',
             horizontal: 'center',
           }}
           transformOrigin={{
             vertical: 'top',
             horizontal: 'center',
           }}
 
        >
          <MenuItem exact
            to="https://partners.letsbee.ph/"
            target="blank"
            component={RouterLink}
            onClose={handleClosePartners} ><a style={{textDecoration:"none", color:"black"}} href="https://partners.letsbee.ph">Partner</a></MenuItem>
          <MenuItem exact
            to="https://letsbeerider.ph"
            target="blank"
            component={RouterLink}
            onClose={handleClosePartners} ><a style={{textDecoration:"none", color:"black"}} href="https://letsbeerider.ph">Riders</a></MenuItem>
        </Menu>

          <Hidden mdUp>
            <MIconButton
              ref={anchorRef}
              onClick={() => setOpenMenu(true)}
              className={clsx({
                [classes.isHome]: isHome
              })}
            >
              <Icon icon={menu2Fill} />
            </MIconButton>
            {renderMenuMobile}
          </Hidden>
        </Container>
      </Toolbar>
      {offset && <span className={classes.toolbarShadow} />}
    </AppBar>
  );
}

export default TopBar;
