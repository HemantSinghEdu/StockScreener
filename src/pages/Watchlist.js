import React, { useState, useEffect } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchWatchlistData } from '../services/watchlistService';
import { useAuth } from '../hooks/useAuth';

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const loadWatchlist = async () => {
      if (user) {
        const data = await fetchWatchlistData(user.uid);
        setWatchlist(data);
      }
    };

    loadWatchlist();
  }, [user]);

  const handleRemove = async (symbol) => {
    // Remove from watchlist logic
  };

  if (!user) {
    return (
      <div className="watchlist-auth">
        <Typography variant="h5" gutterBottom>
          Please sign in to view your watchlist
        </Typography>
        <Button variant="contained" color="primary">
          Sign In
        </Button>
      </div>
    );
  }

  return (
    <div className="watchlist">
      <Typography variant="h4" gutterBottom>
        My Watchlist
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Symbol</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Change</TableCell>
              <TableCell>Market Cap</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {watchlist.map((item) => (
              <TableRow key={item.symbol}>
                <TableCell>{item.symbol}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell
                  sx={{
                    color: item.change >= 0 ? 'success.main' : 'error.main'
                  }}
                >
                  {item.change}%
                </TableCell>
                <TableCell>{item.marketCap}</TableCell>
                <TableCell>
                  <IconButton
                    color="error"
                    onClick={() => handleRemove(item.symbol)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Watchlist;
