Originated from : https://github.com/adrianmcli/truffle-next

<h1 align="center">Truffle and Next.js</h1> <br>
<p align="center">
  <img alt="comet" src="https://user-images.githubusercontent.com/943555/33169670-574322ee-cffa-11e7-9150-7b720ee0ee24.png" width="120">
</p>
<p align="center">Rapid Ethereum Dapp Development</p>

<p align="center">
  <img alt="made for blockchain@NTU" src="https://img.shields.io/badge/made%20for-Blockchain%40NTU-blue.svg">
  <img alt="GPL v3 license" src="https://img.shields.io/badge/License-GNU%20GPL%20v3-lightgrey.svg">
</p>

---
# Reference guide to Deploy Smart contract on Ropsten

https://medium.com/coinmonks/deploy-your-smart-contract-directly-from-truffle-with-infura-ba1e1f1d40c2

https://medium.com/coinmonks/5-minute-guide-to-deploying-smart-contracts-with-truffle-and-ropsten-b3e30d5ee1e

Truffle Video guide :
https://www.youtube.com/watch?v=8fPcQIPNfG8

Hardhat Video guide : 
https://www.youtube.com/watch?v=9Qpi80dQsGU

# Deployed Smart Contracts on Ropsten and BSC Testnet
Contract Addresses
  1. SimpleStorage.sol: 0x9693A8E5Cd60DE58cF8520B151f51EaF73cBAa43 ([ETH](https://ropsten.etherscan.io/address/0x9693A8E5Cd60DE58cF8520B151f51EaF73cBAa43) | [BSC](https://testnet.bscscan.com/address/0x9693A8E5Cd60DE58cF8520B151f51EaF73cBAa43))
  2. callSimpleStorage.sol: 0x143e771DA912Cf985Ec0727172bECB0d4bD79434 ([ETH](https://ropsten.etherscan.io/address/0x143e771DA912Cf985Ec0727172bECB0d4bD79434) | [BSC](https://testnet.bscscan.com/address/0x143e771DA912Cf985Ec0727172bECB0d4bD79434))
  3. annoyAttendance.sol: 0x89a38bdaeeD114EB1b063D078933508Fc4D145d6 ([ETH](https://ropsten.etherscan.io/address/0x89a38bdaeeD114EB1b063D078933508Fc4D145d6) | [BSC](https://testnet.bscscan.com/address/0x89a38bdaeeD114EB1b063D078933508Fc4D145d6))

# Steps to integrate into the Demo Frontend.
(1) After contract deployment , import the json output file in the '''contracts''' folder.

(2) Create Contract wrapper in ``` lib ``` folder. 

(3) Create a new page in the ```pages ``` folder, and make the necessary changes for the demo smart contract. 

(4) Create html tag to link the new page in ``` index.js ``` in the ```pages ``` folder. 

# Local frontend setup 
Install Node with v12 @ https://nodejs.org/en/download/

Run the following Command: 

``` $ git clone https://github.com/ntusg-blockchain/bns-demo-app.git ``` 

``` $ npm install ```

``` $ npm run dev ```

# Bns Demo App

- 1st demo is a getter and setter of an integer. To demonstrate state changes.
- 2nd demo is works by calling the 1st contract through another smart contract. To demonstrate Smart contract connectivity.
- 3rd demo is about paying for attendance. To demonstrate the ability of smart contract holding funds , users can pay/ withdraw by calling function.

# Next.js client

This is the frontend client for our dapp. It is built with Next.js and uses a render-prop pattern (via `lib/Web3Container.js`) so we can easily inject blockchain functionality (i.e. web3, accounts, and the contract instance) into each page.

## Pages

There are three pages:

- `index.js` — This is a barebones Next.js page. It links to other pages which are web3-enabled. In your dapp, this can be a landing page.
- `accounts.js` — This is a page listing the accounts returned from Web3. This file demonstrates the basic use of the `Web3Container` component.
- `dapp.js` — This is a barebones demonstration dapp that utilizes the `Web3Container` component, but also makes calls to the contract. More specifically, it stores a value and gets a value.

## The `lib` folder

### `contracts`

A symlink to the `build/contracts` located in the Truffle project is placed here so that the Next.js app can refer to the build artifacts from the parent Truffle project.

### `Web3Container.js`

This is a component that utilizes the render-prop pattern to inject `web3`, `accounts`, and `contract` instance objects into a given function. When these objects are loading, it will render a loading function that is expected to return a React component.

For an example of how to use it, please see the `accounts` and `dapp` pages.

You may want to modify this for your own purposes. For example, you can require multiple contracts if your dapp requires it.

### `getWeb3.js`

This is a function for actually getting the Web3 object. Unfortunately, this file is not as straight-forward as I would have liked it. Your best bet at understanding this is to read the comments I have written in the file. You probably don't need to change anything in this file.

### `getContract.js`

This function requires `web3` to be passed in. It uses `truffle-contract` to initialize and return a contract instance. This function is used by `Web3Container.js`. You probably don't need to change anything in this file.

### `getAccounts.js`

This simply wraps `web3.eth.getAccounts` into a Promise so we can use it cleanly inside `Web3Container.js`. You probably don't need to change anything in this file.

# Reference
## ChainList
https://chainlist.org/
## Materiaul-UI
https://material-ui.com/getting-started/

## Nextjs
https://nextjs.org/learn/basics/create-nextjs-app

# NextJs Github page setupReference 
https://github.com/thierryc/Next-gh-page-example

# License
All files in this repository are released under the [GPLv3](https://github.com/ntusg-blockchain/bns-demo-app/blob/master/LICENSE) license.
