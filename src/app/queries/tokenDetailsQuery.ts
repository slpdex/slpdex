import { Base64 } from 'js-base64';

export const tokenDetailsQuery = (symbol: string) => {
  const base64Symbol = Base64.encode(symbol);

  const params = {
    v: 3,
    q: {
      db: ['c', 'u'],
      aggregate: [
        {
          $match: {
            'in.h0': '45584348',
            'in.b1.op': 82,
            'slp.valid': true,
          },
        },
        {
          $addFields: {
            txHash: { $concat: ['$tx.h', ':1'] },
          },
        },
        {
          $lookup: {
            from: 'utxos',
            localField: 'txHash',
            foreignField: 'utxo',
            as: 'foundUtxo',
          },
        },
        {
          $addFields: {
            exchInput: {
              $arrayElemAt: [
                {
                  $filter: {
                    input: '$in',
                    as: 'input',
                    cond: {
                      $and: [
                        { $eq: ['$$input.b0', base64Symbol] },
                        { $eq: ['$$input.b1.op', 82] },
                      ],
                    },
                  },
                },
                0,
              ],
            },
            hasUtxo: {
              $size: '$foundUtxo',
            },
          },
        },
        {
          $sort: {
            hasUtxo: -1,
            'blk.t': -1,
          },
        },
        {
          $group: {
            _id: '$slp.detail.tokenIdHex',
            numberOfOpenOffers: { $sum: '$hasUtxo' },
            numberOfClosedOffers: { $sum: { $subtract: [1, '$hasUtxo'] } },
            slp: { $first: '$slp' },
            lastTrade: {
              $first: {
                timestamp: '$blk.t',
                txHash: '$txHash',
                price: '$exchInput.b3',
                isAccepted: { $ne: ['$foundUtxo', []] },
              },
            },
          },
        },
      ],
    },
  };

  const base64Params = Base64.encode(JSON.stringify(params));

  return `https://slpdb.bitcoin.com/q/${base64Params}`;
};

export interface TokenDetails {
  c: TokenDetailsC[];
  u: any[];
}

export interface TokenDetailsOutput {
  address: string;
  amount: string;
}

export interface TokenDetailsDetail {
  decimals: number;
  tokenIdHex: string;
  transactionType: string;
  versionType: number;
  documentUri: string;
  documentSha256Hex?: any;
  symbol: string;
  name: string;
  txnBatonVout?: any;
  txnContainsBaton: boolean;
  outputs: TokenDetailsOutput[];
}

export interface TokenDetailsSlp {
  valid: boolean;
  detail: TokenDetailsDetail;
  invalidReason?: any;
  schema_version: number;
}

export interface TokenDetailsLastTrade {
  timestamp: number;
  txHash: string;
  isAccepted: boolean;
}

export interface TokenDetailsC {
  _id: string;
  numberOfOpenOffers: number;
  numberOfClosedOffers: number;
  slp: TokenDetailsSlp;
  lastTrade: TokenDetailsLastTrade;
}
