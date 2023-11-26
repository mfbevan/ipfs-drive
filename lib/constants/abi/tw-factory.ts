/**
 * ABI for the Token Deployment Factory
 */
export const TW_FACTORY_ABI = [
  {
    inputs: [
      { internalType: "address", name: "_trustedForwarder", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "proxy",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "deployer",
        type: "address",
      },
    ],
    name: "ProxyDeployed",
    type: "event",
  },
  {
    inputs: [
      { internalType: "address", name: "_implementation", type: "address" },
      { internalType: "bytes", name: "_data", type: "bytes" },
      { internalType: "bytes32", name: "_salt", type: "bytes32" },
    ],
    name: "deployProxyByImplementation",
    outputs: [
      { internalType: "address", name: "deployedProxy", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "forwarder", type: "address" }],
    name: "isTrustedForwarder",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes[]", name: "data", type: "bytes[]" }],
    name: "multicall",
    outputs: [{ internalType: "bytes[]", name: "results", type: "bytes[]" }],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export const TW_CLONE_FACTORY_ADDRESS =
  "0x76F948E5F13B9A84A81E5681df8682BBf524805E";
