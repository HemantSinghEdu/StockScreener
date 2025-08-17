import React, { useState } from 'react';
import { Tabs, Tab, Paper, Box, TextField, MenuItem, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { fetchScreenerData } from '../services/screenerService';

const Screeners = () => {
  const [tabValue, setTabValue] = useState(0);
  const [filters, setFilters] = useState({
    type: 'stocks',
    region: 'all',
    sector: 'all',
    marketCap: 'all',
    priceRange: 'all'
  });
  const [data, setData] = useState([]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    setFilters(prev => ({ ...prev, type: ['stocks', 'etfs', 'mutualfunds'][newValue] }));
  };

  const handleFilterChange = (event) => {
    setFilters(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const applyFilters = async () => {
    const filteredData = await fetchScreenerData(filters);
    setData(filteredData);
  };

  const columns = {
    stocks: [
      { field: 'symbol', headerName: 'Symbol', width: 120 },
      { field: 'name', headerName: 'Name', width: 200 },
      { field: 'price', headerName: 'Price', width: 120 },
      { field: 'marketCap', headerName: 'Market Cap', width: 150 },
      { field: 'sector', headerName: 'Sector', width: 150 },
      { field: 'pe', headerName: 'P/E', width: 120 }
    ],
    etfs: [
      { field: 'symbol', headerName: 'Symbol', width: 120 },
      { field: 'name', headerName: 'Name', width: 200 },
      { field: 'price', headerName: 'Price', width: 120 },
      { field: 'aum', headerName: 'AUM', width: 150 },
      { field: 'expense', headerName: 'Expense Ratio', width: 150 }
    ],
    mutualfunds: [
      { field: 'symbol', headerName: 'Symbol', width: 120 },
      { field: 'name', headerName: 'Name', width: 200 },
      { field: 'nav', headerName: 'NAV', width: 120 },
      { field: 'category', headerName: 'Category', width: 150 },
      { field: 'returns', headerName: '1Y Returns', width: 150 }
    ]
  };

  return (
    <div className="screeners">
      <Paper>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Stocks" />
          <Tab label="ETFs" />
          <Tab label="Mutual Funds" />
        </Tabs>
      </Paper>

      <Box sx={{ mt: 2, mb: 2 }}>
        <TextField
          select
          name="region"
          label="Region"
          value={filters.region}
          onChange={handleFilterChange}
          sx={{ mr: 2 }}
        >
          <MenuItem value="all">All Regions</MenuItem>
          <MenuItem value="na">North America</MenuItem>
          <MenuItem value="eu">Europe</MenuItem>
          <MenuItem value="asia">Asia</MenuItem>
        </TextField>

        <TextField
          select
          name="sector"
          label="Sector"
          value={filters.sector}
          onChange={handleFilterChange}
          sx={{ mr: 2 }}
        >
          <MenuItem value="all">All Sectors</MenuItem>
          <MenuItem value="tech">Technology</MenuItem>
          <MenuItem value="finance">Finance</MenuItem>
          <MenuItem value="health">Healthcare</MenuItem>
        </TextField>

        <Button variant="contained" onClick={applyFilters}>
          Apply Filters
        </Button>
      </Box>

      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns[filters.type]}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Screeners;
