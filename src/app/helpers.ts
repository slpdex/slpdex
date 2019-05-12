import BigNumber from 'bignumber.js';

export const convertSatsToBch = (sats: BigNumber) => {
  return sats.dividedBy(100000000).decimalPlaces(8);
};

export const convertBchToSats = (sats: BigNumber) => {
  return sats.times(100000000).decimalPlaces(8);
};
