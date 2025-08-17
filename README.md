# Global Asset Screener

## Project Overview
Global Asset Screener is a responsive web application designed to screen major stocks, mutual funds, and ETFs from all major stock markets worldwide. The application features a modern UI optimized for both desktop and mobile devices.

## Features
- **Global Market Coverage**: Support for major stock exchanges worldwide.
- **Screeners**: Searchable and sortable tables for stocks, mutual funds, and ETFs.
- **Dynamic Filters**: Filter by price, market cap, sector, P/E, fund category, returns, expense ratio, risk, currency, and geography.
- **Asset Details**: Profiles, charts, fundamentals, risk scores, analyst ratings, and news.
- **Watchlist**: User accounts with Google/Apple/email authentication.
- **Responsive UI**: Optimized for all devices.
- **Performance**: Async loading and caching.
- **Accessibility**: Features included.

## Technology Stack
- **Frontend**: React.js with Material UI.
- **Backend/API**: Node.js.
- **Global Financial Data APIs**: Yahoo Finance, Finnhub, Alpha Vantage.

## Folder Structure
```
/global-asset-screener
├── src
├── components
├── pages
├── services
├── styles
├── hooks
├── utils
├── public
├── docs
├── prompts
├── config
├── tests
├── scripts
```

## Setup Instructions
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.

## Deployment
The application is implemented as a Progressive Web App (PWA) for installation and offline use. CI/CD scripts are included for automated deployment.
