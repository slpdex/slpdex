import BigNumber from 'bignumber.js';
import QRCode from 'qrcode';

export const convertSatsToBch = (sats: number) => {
  return +new BigNumber(sats).div(100000000).toFormat(8);
};

export const convertBchToSats = (bch: number) => {
  return Math.floor(new BigNumber(bch).times(100000000).toNumber());
};

export const generateShortId = (id: string) => {
  id = id.replace('bitcoincash:', '').replace('simpleledger:', '');
  const length = id.length;

  return `${id.slice(0, 5)}...${id.slice(length - 4, length)}`;
};

export const generateBase64QrCode = async (value: string): Promise<string> => {
  return QRCode.toDataURL(value, { margin: 0 });
};

export const getJdenticon = (id: string, size = 30) => {
  // tslint:disable-next-line: no-string-literal
  return window['jdenticon'].toSvg(id, size);
};
