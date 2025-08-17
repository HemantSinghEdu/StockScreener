// Firebase Configuration (replace with your own config from Firebase Console)
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || 'YOUR_API_KEY',
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || 'your-project.firebaseapp.com',
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || 'your-project-id',
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || 'your-project.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || 'your-sender-id',
  appId: process.env.REACT_APP_FIREBASE_APP_ID || 'your-app-id'
};

// Sample watchlist data for development
export const sampleWatchlist = [
  {
    id: 1,
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 185.34,
    change: 1.25,
    marketCap: '2.9T'
  },
  {
    id: 2,
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 337.89,
    change: 0.75,
    marketCap: '2.5T'
  },
  {
    id: 3,
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 128.45,
    change: -0.50,
    marketCap: '1.8T'
  }
];
