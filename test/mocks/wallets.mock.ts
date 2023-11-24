import { Wallet } from "ethers";

/**
 * A mock wallet for testing purposes
 * @address 0x49b8ad014F8183e8a75c30a79aBbBA1Ab28645A6
 * @privateKey 1b9bafcbf7921494a0f1947761df39935aa880a8ff1ade8ff045391331423dfe
 */
export const walletA = new Wallet(
  "1b9bafcbf7921494a0f1947761df39935aa880a8ff1ade8ff045391331423dfe"
);

/**
 * A mock wallet for testing purposes
 * @address 0x2493e4048880b2B63A8410600fA85e2682987709
 * @privateKey 4a222b74703f0a447f081b8693f882344a5f432724bb048f59c7ef24b42b2cfd
 */
export const walletB = new Wallet(
  "4a222b74703f0a447f081b8693f882344a5f432724bb048f59c7ef24b42b2cfd"
);

/**
 * A mock wallet for testing purposes
 * @address 0x2f4780e2e98EB14785EDe8BF50A9F1B4072CAb97
 * @privateKey dc4d84d8430a9256a6ace2f3dd14f48bd5e9af9e5776c47c2c16c5098d2a50c1
 */
export const walletC = new Wallet(
  "dc4d84d8430a9256a6ace2f3dd14f48bd5e9af9e5776c47c2c16c5098d2a50c1"
);
