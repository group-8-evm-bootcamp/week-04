# Weekend Project - Week-04

Deployed link: https://encode8ballot.vercel.app/ (note: because it's hobby plan. request is going to return 504, but the request still went through)

## Instructions

This is a group activity for at least 3 students:

- Complete the projects together with your group
- Create a voting dApp to cast votes, delegate and query results on chain
- Request voting tokens to be minted using the API
- (bonus) Store a list of recent votes in the backend and display that on frontend
- (bonus) Use an oracle to fetch off-chain data
  - Use an oracle to fetch information from a data source of your preference
  - Use the data fetched to create the proposals in the constructor of the ballot

## How to Use the Application

### Prerequisites

1. **Alchemy Account**: Obtain your `ALCHEMY_API_KEY`.
2. **Metamask Account**: Retrieve your `PRIVATE_KEY` from your wallet.
3. **Etherscan Account**: Obtain your `ETHERSCAN_API_KEY`.
4. **ETH Sepolia Balance**: To interact with the smart contract, ensure you have a balance of ETH on the Sepolia testnet. You can acquire some from the [Google Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia).
5. **Environment Setup**: Create a `.env` file in the root directory of the application. You can copy and modify the variables from the provided [.env.example](.env.example) file.
6. **Package Manager**: Ensure you have `Yarn v1.22.22 (Classic)` installed.

### Installation

1. In the frontend and backend, Install the necessary dependencies by running:

   ```bash
   yarn install
   ```

2. To deploy contract (in Sepolia), from the frontend run the following script:

   ```bash
   yarn deploy
   ```

3. To start the frontend and backend, run the following script:

   ```bash
   yarn start
   ```

## Group 8 Participants

| Unique id | Discord username | Wallet Address                             |
| --------- | ---------------- | ------------------------------------------ |
| gGe7Bg    | @ErZeTe          |                                            |
| 4Qt1qT    | @0xOwenn         |                                            |
| c8ynre    | @tianbuyung      | 0xaEF3fa5C5ee0dDfC7041Bf742803D246ddf4DF6E |
| PCy7xD    | @joosh75         | 0x62cA7B13a0f7F3B4f55aAd7968aD0a78ea2d625C |		


Please check into [CONTRACT INTERACTION REPORT](/interaction.md)
