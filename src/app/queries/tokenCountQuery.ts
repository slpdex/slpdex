export const tokenCountQuery = () => {
  return 'https://slpdb.fountainhead.cash/q/ewogICJ2IjogMywKICAicSI6IHsKICAgICJkYiI6IFsidCJdLAogICAgImFnZ3JlZ2F0ZSI6IFsKICAgICAgewogICAgICAgICIkbWF0Y2giOiB7fQogICAgICB9LAogICAgICB7CiAgICAgICAgIiRncm91cCI6IHsKICAgICAgICAgICJfaWQiOiBudWxsLAogICAgICAgICAgImNvdW50IjogeyAiJHN1bSI6IDEgfQogICAgICAgIH0KICAgICAgfQogICAgXQogIH0sCiAgInIiOiB7CiAgICAiZiI6ICJbIC5bXSB8IHtjb3VudDogLmNvdW50IH0gXSIKICB9Cn0=';
};

export interface TokenCountObj {
  count: number;
}

export interface TokenCount {
  t: TokenCountObj[];
}
