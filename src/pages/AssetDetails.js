import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Grid,
  Paper,
  Typography,
  Tabs,
  Tab,
  Box,
  Button
} from '@mui/material';
import { fetchAssetDetails } from '../services/assetService';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const AssetDetails = () => {
  const { symbol } = useParams();
  const [asset, setAsset] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const loadAssetData = async () => {
      const data = await fetchAssetDetails(symbol);
      setAsset(data);
      setChartData(data.historicalData);
    };

    loadAssetData();
  }, [symbol]);

  if (!asset) {
    return <div>Loading...</div>;
  }

  return (
    <div className="asset-details">
      <Grid container spacing={3}>
        {/* Header Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h4">{asset.name} ({asset.symbol})</Typography>
            <Typography variant="h5">${asset.price}</Typography>
            <Typography color={asset.change >= 0 ? 'success.main' : 'error.main'}>
              {asset.change}% ({asset.changeAmount})
            </Typography>
          </Paper>
        </Grid>

        {/* Chart Section */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={chartData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Details Tabs */}
        <Grid item xs={12}>
          <Paper>
            <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
              <Tab label="Overview" />
              <Tab label="Financials" />
              <Tab label="News" />
              <Tab label="Analysis" />
            </Tabs>
            
            <Box sx={{ p: 2 }}>
              {tabValue === 0 && (
                <div>
                  <Typography variant="h6">Company Profile</Typography>
                  <Typography paragraph>{asset.description}</Typography>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                      <Typography variant="subtitle2">Market Cap</Typography>
                      <Typography>${asset.marketCap}</Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Typography variant="subtitle2">P/E Ratio</Typography>
                      <Typography>{asset.peRatio}</Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Typography variant="subtitle2">52W High</Typography>
                      <Typography>${asset.high52w}</Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                      <Typography variant="subtitle2">52W Low</Typography>
                      <Typography>${asset.low52w}</Typography>
                    </Grid>
                  </Grid>
                </div>
              )}
              
              {/* Add content for other tabs */}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={() => {/* Add to watchlist logic */}}
      >
        Add to Watchlist
      </Button>
    </div>
  );
};

export default AssetDetails;
