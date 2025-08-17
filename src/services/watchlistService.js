import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  addDoc,
  deleteDoc
} from 'firebase/firestore';
import { firebaseConfig, sampleWatchlist } from '../config/firebase';

let app;
let db;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  console.warn('Firebase not configured. Using sample data.');
}

export const fetchWatchlistData = async (userId) => {
  // If Firebase is not configured, return sample data
  if (!db || firebaseConfig.apiKey === 'YOUR_API_KEY') {
    return sampleWatchlist;
  }

  try {
    const watchlistRef = collection(db, 'watchlists');
    const q = query(watchlistRef, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    
    const watchlist = [];
    querySnapshot.forEach((doc) => {
      watchlist.push({ id: doc.id, ...doc.data() });
    });

    return watchlist;
  } catch (error) {
    console.error('Error fetching watchlist:', error);
    return sampleWatchlist; // Fallback to sample data on error
  }
};

export const addToWatchlist = async (userId, asset) => {
  try {
    const watchlistRef = collection(db, 'watchlists');
    await addDoc(watchlistRef, {
      userId,
      symbol: asset.symbol,
      name: asset.name,
      addedAt: new Date()
    });
    return true;
  } catch (error) {
    console.error('Error adding to watchlist:', error);
    return false;
  }
};

export const removeFromWatchlist = async (watchlistId) => {
  try {
    const watchlistRef = collection(db, 'watchlists');
    await deleteDoc(doc(watchlistRef, watchlistId));
    return true;
  } catch (error) {
    console.error('Error removing from watchlist:', error);
    return false;
  }
};
