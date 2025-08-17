import axios from 'axios';
import { FINNHUB_API_KEY, sampleIndices, sampleNews } from '../config/api';

const BASE_URL = 'https://finnhub.io/api/v1';

export const fetchGlobalIndices = async () => {
  // If no API key is set, return sample data
  if (!FINNHUB_API_KEY || FINNHUB_API_KEY === 'YOUR_FINNHUB_API_KEY') {
    return sampleIndices;
  }

  try {
    const indices = ['^GSPC', '^DJI', '^IXIC', '^FTSE', '^N225'];
    const results = await Promise.all(
      indices.map(symbol =>
        axios.get(`${BASE_URL}/quote`, {
          params: {
            symbol,
            token: FINNHUB_API_KEY
          }
        })
      )
    );
    
    return results.map((res, index) => ({
      symbol: indices[index],
      name: getIndexName(indices[index]),
      price: res.data.c,
      change: ((res.data.c - res.data.pc) / res.data.pc * 100).toFixed(2)
    }));
  } catch (error) {
    console.error('Error fetching global indices:', error);
    return sampleIndices; // Fallback to sample data on error
  }
};

export const fetchMarketNews = async () => {
  // If no API key is set, return sample data
  if (!FINNHUB_API_KEY || FINNHUB_API_KEY === 'YOUR_FINNHUB_API_KEY') {
    return sampleNews;
  }

  try {
    const response = await axios.get(`${BASE_URL}/news/general`, {
      params: {
        token: FINNHUB_API_KEY
      }
    });
    
    return response.data.slice(0, 10).map(item => ({
      id: item.id,
      title: item.headline,
      datetime: new Date(item.datetime * 1000).toLocaleString(),
      url: item.url
    }));
  } catch (error) {
    console.error('Error fetching market news:', error);
    return sampleNews; // Fallback to sample data on error
  }
};

const getIndexName = (symbol) => {
  const names = {
    '^GSPC': 'S&P 500',
    '^DJI': 'Dow Jones',
    '^IXIC': 'NASDAQ',
    '^FTSE': 'FTSE 100',
    '^N225': 'Nikkei 225'
  };
  return names[symbol] || symbol;
};
