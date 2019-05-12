import BigNumber from 'bignumber.js';

export const convertSatsToBch = (sats: BigNumber) => {
  return sats.dividedBy(100000000).decimalPlaces(8);
};

export const convertBchToSats = (bch: BigNumber) => {
  return bch.times(100000000).decimalPlaces(8);
};

export const generateShortId = (id: string) => {
  const length = id.length;

  return `${id.slice(0, 5)}...${id.slice(length - 4, length)}`;
};
