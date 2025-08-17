import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../hooks/useAuth';

const Header = ({ onMenuClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { user, signIn, signOut } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onMenuClick}
          >
            <MenuIcon />
          </IconButton>
        )}

        <Typography variant="h6" component={RouterLink} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          StockScreener
        </Typography>

        {!isMobile && (
          <>
            <Button color="inherit" component={RouterLink} to="/">
              Dashboard
            </Button>
            <Button color="inherit" component={RouterLink} to="/screeners">
              Screeners
            </Button>
            <Button color="inherit" component={RouterLink} to="/watchlist">
              Watchlist
            </Button>
          </>
        )}

        {user ? (
          <Button color="inherit" onClick={signOut}>
            Sign Out
          </Button>
        ) : (
          <Button color="inherit" onClick={signIn}>
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
