import BigNumber from 'bignumber.js';

export const convertSatsToBch = (sats: number) => {
  return +new BigNumber(sats).dividedBy(100000000).toFixed(8);
};

export const convertBchToSats = (bch: number) => {
  return Math.floor(new BigNumber(bch).times(100000000).toNumber());
};

export const generateShortId = (id: string) => {
  id = id.replace('bitcoincash:', '').replace('simpleledger:', '');
  const length = id.length;

  return `${id.slice(0, 5)}...${id.slice(length - 4, length)}`;
};
