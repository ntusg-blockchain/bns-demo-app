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

https://material-ui.com/getting-started/templates/


// Handle Change and update to state.

handleChange = input => e => {
    this.setState({ [input]: e.target.value});
};

this.handleChange to access in local componenet.

In other component.
<TextField
onChange={this.props.handleChange('stateVariable')}
/>


https://www.youtube.com/watch?v=pHclLuRolzE

/*
x = new BigNumber(1.23)
x.shiftedBy(3)                      // '1230'
x.shiftedBy(-3)                     // '0.00123'
new BigNumber(userBalance).shiftedBy(-TokenDecimals).toString();
*/
removed in Layouts before 						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'flex-end'
							}}
						>
							<InvertColorsSharpIcon />
							<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
