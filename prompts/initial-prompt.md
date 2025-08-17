# Initial Prompt

Create a responsive web application that screens major stocks, mutual funds, and ETFs from all the major stock markets worldwide. The project should start from an empty codebase and follow a clear, scalable folder and file structure for clean organization. The app should have a modern, dynamic UI optimized for both desktop and mobile devices without alignment or usability issues.

## Features
1. **Global Market Coverage**
   - Support all major stock exchanges globally including NYSE, NASDAQ, LSE, Euronext, TSE, SSE, HKEX, BSE, TSX, FWB, and others.
   - Enable filtering by country, region, exchange, and global indices.

2. **App Features**
   - Home Dashboard: Global market indices overview and headlines.
   - Screeners: Tabs for Stocks, Mutual Funds, ETFs with searchable and sortable tables.
   - Dynamic Filters: Price, market cap, sector, P/E, fund category, returns, expense ratio, risk, currency, geography.
   - Asset Details: Profiles, charts, fundamentals, risk scores, analyst ratings, news.
   - Watchlist: User accounts with Google/Apple/email authentication.
   - Responsive UI with grid/flexbox to support all devices.
   - Performance optimized with async loading and caching.
   - Accessibility features included.

3. **Technology Stack**
   - Frontend: React.js or Vue.js with Material UI, Ant Design, or Bootstrap.
   - Backend/API: Node.js, Flask, or Firebase.
   - Global financial data APIs (Yahoo Finance, Finnhub, Alpha Vantage, or similar).

4. **Documentation & Prompts Management**
   - Save all planning documents, architecture diagrams, API references, and user instructions in `/docs`.
   - Store AI or development prompts (like this one) in `/prompts` with clear filenames and version notes.
   - Keep `README.md` in the root covering project overview and setup instructions.

5. **Deployment**
   - Ensure the app runs on all modern browsers.
   - Implement as a Progressive Web App (PWA) for installation and offline use.
   - Use CI/CD or scripts in `/scripts` for automated deployment and builds.

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

## Notes
Emphasize clean, maintainable code and directory organization to ease future development, scalability, and team collaboration.
