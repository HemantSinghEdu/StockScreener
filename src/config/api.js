// You can get a free API key from https://finnhub.io/register
export const FINNHUB_API_KEY = process.env.REACT_APP_FINNHUB_API_KEY || 'YOUR_FINNHUB_API_KEY';

// Sample data for development (when API key is not set)
export const sampleIndices = [
  {
    symbol: '^GSPC',
    name: 'S&P 500',
    price: 4532.12,
    change: 0.75
  },
  {
    symbol: '^DJI',
    name: 'Dow Jones',
    price: 35234.45,
    change: 0.62
  },
  {
    symbol: '^IXIC',
    name: 'NASDAQ',
    price: 14123.67,
    change: 1.12
  },
  {
    symbol: '^FTSE',
    name: 'FTSE 100',
    price: 7432.23,
    change: 0.45
  }
];

export const sampleNews = [
  {
    id: 1,
    title: 'Markets Rally on Strong Economic Data',
    datetime: '2025-08-17 10:30:00',
    url: '#'
  },
  {
    id: 2,
    title: 'Tech Stocks Lead Market Gains',
    datetime: '2025-08-17 09:45:00',
    url: '#'
  },
  {
    id: 3,
    title: 'Federal Reserve Maintains Current Policy',
    datetime: '2025-08-17 09:15:00',
    url: '#'
  }
];

export const sampleStocks = [
  {
    id: 1,
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 185.34,
    marketCap: '2.9T',
    sector: 'Technology',
    pe: 30.5
  },
  {
    id: 2,
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 337.89,
    marketCap: '2.5T',
    sector: 'Technology',
    pe: 35.2
  },
  {
    id: 3,
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 128.45,
    marketCap: '1.8T',
    sector: 'Technology',
    pe: 25.8
  }
];
