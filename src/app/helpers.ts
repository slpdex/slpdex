import BigNumber from 'bignumber.js';

export const convertSatsToBch = (sats: BigNumber) => {
  return sats.dividedBy(10000000).decimalPlaces(8);
};
