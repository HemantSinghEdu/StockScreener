import { useState, useEffect } from 'react';
import { fetchMarketData } from '../services/api';

function useMarketData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMarketData()
      .then(setData)
      .catch(setError);
  }, []);

  return { data, error };
}

export default useMarketData;
