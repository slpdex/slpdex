export const bchUsdQuery = () => {
  return 'https://api.cryptonator.com/api/ticker/bch-usd';
};

export interface CryptoNatorTicker {
  base: string;
  target: string;
  price: string;
  volume: string;
  change: string;
}

export interface CryptoNator {
  ticker: CryptoNatorTicker;
  timestamp: number;
  success: boolean;
  error: string;
}
