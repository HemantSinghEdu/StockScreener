export async function fetchMarketData() {
  const response = await fetch('https://api.example.com/market-data');
  if (!response.ok) {
    throw new Error('Failed to fetch market data');
  }
  return response.json();
}
