import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { fetchGlobalIndices, fetchMarketNews } from '../services/marketDataService';

const Dashboard = () => {
  const [indices, setIndices] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadDashboardData = async () => {
      const [indicesData, newsData] = await Promise.all([
        fetchGlobalIndices(),
        fetchMarketNews()
      ]);
      setIndices(indicesData);
      setNews(newsData);
    };

    loadDashboardData();
  }, []);

  return (
    <div className="dashboard">
      <Typography variant="h4" component="h1" gutterBottom>
        Global Markets Overview
      </Typography>
      
      <Grid container spacing={3}>
        {/* Market Indices Section */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Major Indices
              </Typography>
              {indices.map((index) => (
                <div key={index.symbol} className="index-item">
                  <Typography variant="subtitle1">
                    {index.name}: {index.price} ({index.change}%)
                  </Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Market News Section */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Market Headlines
              </Typography>
              {news.map((item) => (
                <div key={item.id} className="news-item">
                  <Typography variant="subtitle2">
                    {item.title}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {item.datetime}
                  </Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
