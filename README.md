# Crypto Exchange Platform

A full-stack cryptocurrency exchange platform with real-time trading capabilities, complete with orderbook management, interactive charts, and multiple market support.

## Project Overview

This project implements a cryptocurrency trading platform with the following components:

- **Frontend**: A Next.js application providing a modern trading interface with real-time data updates
- **Orderbook Server**: A TypeScript-based server managing buy/sell orders and trade execution
- **Database Layer**: TimescaleDB setup for time-series data storage with Redis for caching
- **Exchange Proxy**: Middleware to facilitate communication with external exchange APIs

## Architecture

```
┌─────────────────┐         ┌────────────────┐
│                 │         │                │
│     Frontend    │◄───────►│ Exchange Proxy │◄───► External Exchange API
│    (Next.js)    │         │   (Express)    │
│                 │         │                │
└────────┬────────┘         └────────────────┘
         │
         │
         ▼
┌─────────────────┐         ┌────────────────┐
│                 │         │                │
│   Orderbook     │◄───────►│     Redis      │
│    Server       │         │                │
│                 │         │                │
└────────┬────────┘         └────────────────┘
         │
         │
         ▼
┌─────────────────┐
│                 │
│   TimescaleDB   │
│                 │
│                 │
└─────────────────┘
```

## Features

- Real-time orderbook display with bid/ask visualization
- Interactive trading charts with multiple timeframes
- Market and limit order support
- WebSocket integration for live data updates
- Time-series database for efficient historical data storage
- Trading pair support (e.g., SOL/USDC)
- Modern, responsive UI with Tailwind CSS

## Technology Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Lightweight Charts
- **Backend**: Express, Node.js, TypeScript
- **Database**: TimescaleDB (PostgreSQL), Redis
- **DevOps**: Docker, Docker Compose
- **Communication**: WebSockets, REST APIs

## Getting Started

### Prerequisites

- Node.js (v16+)
- Docker and Docker Compose
- Git

### Setup

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/crypto-exchange-platform.git
   cd crypto-exchange-platform
   ```

2. Start the database services:

   ```
   docker-compose up -d
   ```

3. Set up the orderbook server:

   ```
   cd orderbook-server
   npm install
   npm start
   ```

4. Set up the exchange proxy:

   ```
   cd ../exchange-proxy
   npm install
   node index.js
   ```

5. Start the frontend:

   ```
   cd ../frontend
   npm install
   npm run dev
   ```

6. Initialize the database (optional):

   ```
   cd ../db
   npm install
   npm run seed:db
   npm run dev
   ```

7. Access the application at http://localhost:3000

## Component Details

### Frontend (Next.js)

The frontend provides a modern trading interface with:

- Real-time orderbook visualization
- Interactive price charts
- Market selection
- Buy/Sell interface
- Trade history

### Orderbook Server

Handles order management including:

- Limit and market order creation
- Order matching and execution
- Orderbook depth maintenance
- Trade fills

### Database Layer

Uses TimescaleDB for efficient time-series data storage:

- Historical price data
- Trade records
- Materialized views for different timeframes (1m, 1h, 1w)

### Exchange Proxy

Acts as a middleware between the frontend and external exchange APIs:

- Handles CORS issues
- Routes API requests
- Can be extended for rate limiting and authentication
