import BigNumber from 'bignumber.js';

export const convertSatsToBch = (sats: BigNumber) => {
  return sats.div(100_000_000);
};

export const convertBchToSats = (bch: BigNumber) => {
  return new BigNumber(bch).times(100000000);
};

export const generateShortId = (id: string) => {
  id = id.replace('bitcoincash:', '').replace('simpleledger:', '');
  const length = id.length;

  return `${id.slice(0, 5)}...${id.slice(length - 4, length)}`;
};

export const generateBase64QrCode = async (value: string): Promise<string> => {
  const QRCode = await import('qrcode');
  return QRCode.toDataURL(value, { margin: 0 });
};

export const getJdenticon = (id: string, size = 30) => {
  // tslint:disable-next-line: no-string-literal
  return window['jdenticon'].toSvg(id, size);
};
