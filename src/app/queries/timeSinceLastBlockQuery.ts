export const timeSinceLastBlockQuery = () => {
// tslint:disable-next-line: max-line-length
  return 'https://bitdb2.fountainhead.cash/q/ewogICJ2IjogMywKICAicSI6IHsKICAgICJkYiI6IFsiYyJdLAogICAgImZpbmQiOiB7fSwKICAgICJwcm9qZWN0IjogewogICAgICAiYmxrIjogMQogICAgfSwKICAgICJzb3J0IjogewogICAgICAiYmxrLmkiOiAtMQogICAgfSwKICAgICJsaW1pdCI6IDEKICB9LAogICJyIjogewogICAgImYiOiAiWyAuW10gfCB7IGxhc3RfYmxvY2tfdGltZTogLmJsay50IH0gXVswXSIKICB9Cn0=';
};

export interface TimeSinceLastBlockInfo {
  last_block_time: number;
}

export interface TimeSinceLastBlock {
  c: TimeSinceLastBlockInfo;
}
