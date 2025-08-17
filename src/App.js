import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import './styles/App.css';

// Pages
import Dashboard from './pages/Dashboard';
import Screeners from './pages/Screeners';
import AssetDetails from './pages/AssetDetails';
import Watchlist from './pages/Watchlist';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Context Providers
import { AuthProvider } from './hooks/useAuth';

// Create theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/screeners">
        <ListItemText primary="Screeners" />
      </ListItem>
      <ListItem button component={Link} to="/watchlist">
        <ListItemText primary="Watchlist" />
      </ListItem>
    </List>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <div className="App">
            <Header onMenuClick={handleDrawerToggle} />
            
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile
              }}
            >
              {drawer}
            </Drawer>

            <main style={{ minHeight: 'calc(100vh - 64px - 100px)', padding: '20px' }}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/screeners" element={<Screeners />} />
                <Route path="/asset-details/:symbol" element={<AssetDetails />} />
                <Route path="/watchlist" element={<Watchlist />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
