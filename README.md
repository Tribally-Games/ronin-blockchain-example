# Fetching burnt SLP transactions from Ronin

## Setup
```bash
$ nvm use
$ npm install
$ cat example.env > .env # Then specify the address of the ronin node
```

## Running
```bash
$ npm start
```

### Output
```json
[
  {
    "address": "0xa8754b9Fa15fc18BB59458815510E40a12cD2014",
    "blockNumber": 22104525,
    "transactionHash": "0xb0186e505835f7f763862f4f464e4184bda7509b0f75ba9f097409df194498a9",
    "transactionIndex": 0,
    "blockHash": "0x50bfba6e497d89529644774179efdd5eb3299b1c5cc0140ef1cfa7592c1e96c8",
    "logIndex": 1,
    "removed": false,
    "id": "log_816ea9ea",
    "returnValues": {
      "0": "0x9f69b8f82B0cAbb3F83FE13c3a4fEe825a8f1a60",
      "1": "0x0000000000000000000000000000000000000000",
      "2": "2700",
      "from": "0x9f69b8f82B0cAbb3F83FE13c3a4fEe825a8f1a60",
      "to": "0x0000000000000000000000000000000000000000",
      "value": "2700"
    },
    "event": "Transfer",
    "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
    "raw": {
      "data": "0x0000000000000000000000000000000000000000000000000000000000000a8c",
      "topics": [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x0000000000000000000000009f69b8f82b0cabb3f83fe13c3a4fee825a8f1a60",
        "0x0000000000000000000000000000000000000000000000000000000000000000"
      ]
    }
  },
  {
    "address": "0xa8754b9Fa15fc18BB59458815510E40a12cD2014",
    "blockNumber": 22104566,
    "transactionHash": "0xc3f166a3eedb9d113204d9a09cbb0892c28c8fb2da0b1250f950332bd1369dc4",
    "transactionIndex": 1,
    "blockHash": "0x072e586bb8be952fd26db2a42c799e211e8921dad139e6604e49a6b1ef2bf74e",
    "logIndex": 7,
    "removed": false,
    "id": "log_7d484b67",
    "returnValues": {
      "0": "0x9f69b8f82B0cAbb3F83FE13c3a4fEe825a8f1a60",
      "1": "0x0000000000000000000000000000000000000000",
      "2": "4500",
      "from": "0x9f69b8f82B0cAbb3F83FE13c3a4fEe825a8f1a60",
      "to": "0x0000000000000000000000000000000000000000",
      "value": "4500"
    },
    "event": "Transfer",
    "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
    "raw": {
      "data": "0x0000000000000000000000000000000000000000000000000000000000001194",
      "topics": [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x0000000000000000000000009f69b8f82b0cabb3f83fe13c3a4fee825a8f1a60",
        "0x0000000000000000000000000000000000000000000000000000000000000000"
      ]
    }
  }
]
```

## How it works
- Creates a connection to the Ronin node with the `Web3` library
- Using the ERC 20 ABI for the SLP contract, create a new instance of the contract and specify the address of where the contract is deployed.
- Get all past `Transfer` events that have ocurred in the block range of `22104500` and `22104682` where the recipient has been `0x0000000000000000000000000000000000000000`.