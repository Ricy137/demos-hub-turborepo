export const domain = {
  name: "sign a typed message",
  chainId: 1,
};

export const types = {
  Account: [{ name: "address", type: "address" }],
  Content: [
    { name: "account", type: "Account" },
    { name: "information", type: "string" },
  ],
};
