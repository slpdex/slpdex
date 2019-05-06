export const allTokensQuery = () => {
  return 'https://slpdb.bitcoin.com/q/ewogICJ2IjogMywKICAiZGIiOiBbInQiXSwKICAicSI6IHsKICAgICJhZ2dyZWdhdGUiOiBbCiAgICAgIHsiJHByb2plY3QiOiB7InNscC5kZXRhaWwiOiAiJHRva2VuRGV0YWlscyJ9fQogICAgXSwKICAgICJsaW1pdCI6IDEwMAogIH0KfQ==';
};

export interface AllTokens {
  t: AllTokensToken[];
}

export interface AllTokensToken {
  _id: string;
  slp: AllTokensSlp;
}

export interface AllTokensDetail {
  decimals: number;
  tokenIdHex: string;
  timestamp: string;
  transactionType: string;
  versionType: number;
  documentUri: string;
  documentSha256Hex?: any;
  symbol: string;
  name: string;
  batonVout?: any;
  containsBaton: boolean;
  genesisOrMintQuantity: string;
  sendOutputs?: any;
}

export interface AllTokensSlp {
  detail: AllTokensDetail;
}
