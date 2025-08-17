import axios from 'axios';
import { FINNHUB_API_KEY, sampleStocks } from '../config/api';

const BASE_URL = 'https://finnhub.io/api/v1';

export const fetchScreenerData = async (filters) => {
  // If no API key is set, return sample data
  if (!FINNHUB_API_KEY || FINNHUB_API_KEY === 'YOUR_FINNHUB_API_KEY') {
    // Filter sample data based on filters
    let filteredData = [...sampleStocks];
    if (filters.sector !== 'all') {
      filteredData = filteredData.filter(item => item.sector.toLowerCase() === filters.sector.toLowerCase());
    }
    return filteredData;
  }

  try {
    let endpoint = '';
    switch (filters.type) {
      case 'stocks':
        endpoint = '/stock/symbol';
        break;
      case 'etfs':
        endpoint = '/etf/profile';
        break;
      case 'mutualfunds':
        endpoint = '/mutual-fund/profile';
        break;
      default:
        endpoint = '/stock/symbol';
    }

    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      params: {
        exchange: getExchangeByRegion(filters.region),
        token: FINNHUB_API_KEY
      }
    });

    // Apply additional filters
    let filteredData = response.data;
    if (filters.sector !== 'all') {
      filteredData = filteredData.filter(item => item.sector === filters.sector);
    }

    // Add unique id for DataGrid
    return filteredData.map((item, index) => ({
      id: index,
      ...item
    }));
  } catch (error) {
    console.error('Error fetching screener data:', error);
    return sampleStocks; // Fallback to sample data on error
  }
};

const getExchangeByRegion = (region) => {
  switch (region) {
    case 'na':
      return 'US';
    case 'eu':
      return 'L';
    case 'asia':
      return 'T';
    default:
      return 'US';
  }
};
