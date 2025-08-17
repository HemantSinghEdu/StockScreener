import axios from 'axios';

const API_KEY = process.env.REACT_APP_FINANCE_API_KEY;
const BASE_URL = 'https://finnhub.io/api/v1';

export const fetchAssetDetails = async (symbol) => {
  try {
    const [quote, profile, news] = await Promise.all([
      axios.get(`${BASE_URL}/quote`, {
        params: {
          symbol,
          token: API_KEY
        }
      }),
      axios.get(`${BASE_URL}/stock/profile2`, {
        params: {
          symbol,
          token: API_KEY
        }
      }),
      axios.get(`${BASE_URL}/company-news`, {
        params: {
          symbol,
          from: getDateString(30), // 30 days ago
          to: getDateString(0), // today
          token: API_KEY
        }
      })
    ]);

    return {
      symbol,
      name: profile.data.name,
      price: quote.data.c,
      change: ((quote.data.c - quote.data.pc) / quote.data.pc * 100).toFixed(2),
      changeAmount: (quote.data.c - quote.data.pc).toFixed(2),
      marketCap: formatMarketCap(profile.data.marketCapitalization),
      description: profile.data.description,
      peRatio: quote.data.pe,
      high52w: quote.data.h,
      low52w: quote.data.l,
      news: news.data.slice(0, 10),
      historicalData: await fetchHistoricalData(symbol)
    };
  } catch (error) {
    console.error('Error fetching asset details:', error);
    return null;
  }
};

const fetchHistoricalData = async (symbol) => {
  try {
    const response = await axios.get(`${BASE_URL}/stock/candle`, {
      params: {
        symbol,
        resolution: 'D',
        from: Math.floor(Date.now() / 1000) - 365 * 24 * 60 * 60, // 1 year ago
        to: Math.floor(Date.now() / 1000),
        token: API_KEY
      }
    });

    return response.data.t.map((timestamp, index) => ({
      date: new Date(timestamp * 1000).toLocaleDateString(),
      price: response.data.c[index]
    }));
  } catch (error) {
    console.error('Error fetching historical data:', error);
    return [];
  }
};

const getDateString = (daysAgo) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString().split('T')[0];
};

const formatMarketCap = (marketCap) => {
  if (marketCap >= 1000000) {
    return `$${(marketCap / 1000000).toFixed(2)}T`;
  } else if (marketCap >= 1000) {
    return `$${(marketCap / 1000).toFixed(2)}B`;
  }
  return `$${marketCap}M`;
};
