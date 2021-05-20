import React from 'react';
import Link from '@material-ui/core/Link';
import Web3Container from '../lib/Web3Container';
import {
	Button,
	Typography,
	TextField,
	CircularProgress,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Box,
	Card,
	CardContent
} from '@material-ui/core';
import Layout from '../Components/Layout';
import BacktoHomepage from '../Components/BacktoHomepage';

import Metamask from '../Components/Metamask';

class Integerstorage extends React.Component {
	state = {
		value: undefined,
		setvalue: undefined,
		ethBalance: undefined,
		metamaskEnabled: false,
		loading: false,
		contractAddress: '',
		transactionURL: '',
		networkID: '',
		darkTheme: false,
		etherscanLink : '',
		faucetlink:'',
		networkName:''
	};

	async componentDidMount() {
		try {
			const { accounts, contract, web3 } = this.props;
			let value = await contract.methods.get().call({ from: accounts[0] });
			let balanceInWei = await web3.eth.getBalance(accounts[0]);
			let networkID = await web3.eth.net.getId();
			if ( networkID === 3 ) {
				this.setState({ darkTheme : false });
				this.setState({ etherscanLink : 'https://ropsten.etherscan.io/address/' });
				this.setState({ faucetlink : "https://faucet.metamask.io/" });
				this.setState({ networkName : "Ropsten Testnet" });
			} else { 
				this.setState({ darkTheme : true });
				this.setState({ etherscanLink : 'https://testnet.bscscan.com/address/' });
				this.setState({ faucetlink : "https://testnet.binance.org/faucet-smart" });
				this.setState({ networkName : "Binance Smart Chain Testnet" });
			}
			this.setState({ networkID });
			this.setState({ ethBalance: balanceInWei / 1e18, contractAddress: contract._address });
			this.setState({ value });
		} catch (error) {
			//	alert(`Click to enable MetaMask.`);
			console.log(error);
		}
	}

	storeValue = async () => {
		event.preventDefault();
		this.setState({ loading: true });
		const { accounts, contract } = this.props;
		try {
			let result = await contract.methods.set(this.state.setvalue).send({ from: accounts[0] });
			result = result.transactionHash;
			let returnString;
			if (this.state.networkID === 3 ) {
				returnString = `https://ropsten.etherscan.io/tx/${result}`;
			} else {
				returnString = `https://testnet.bscscan.com/tx/${result}`;
			}
			this.setState({ transactionURL: returnString });
		} catch (err) {
			alert(`Error`);
			this.setState({ loading: false });
			return;
		}
		alert(`Stored ${this.state.setvalue} into account. Refresh to see the result.`);
		this.setState({ loading: false });
	};

	getValue = async () => {
		const { accounts, contract } = this.props;
		const response = await contract.methods.get().call({ from: accounts[0] });
		this.setState({ value: response });
	};

	getEthBalance = async () => {
		const { web3, accounts } = this.props;
		const balanceInWei = await web3.eth.getBalance(accounts[0]);
		this.setState({ ethBalance: balanceInWei / 1e18 });
	};

	handleValue(event) {
		this.setState({ setvalue: event.target.value });
	}

	enableMetaMask = async () => {
		try {
			await window.ethereum.enable();
			this.setState({ metamaskEnabled: true });
		} catch (err) {
			console.log(err);
		}
		window.location.reload(true);
	};

	handleClose = () => {
		this.setState({ transactionURL: '' });
		//window.location.reload(true);
	};
// 	{this.state.transactionURL.replace('https://ropsten.etherscan.io/tx/', '')}

	render() {
		return (
			<Layout themeMode={this.state.darkTheme}>
				<Dialog
					onClose={this.handleClose}
					aria-labelledby="customized-dialog-title"
					open={!!this.state.transactionURL}
				>
					<DialogTitle>Transaction Hash</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Click to view the-
							<a rel="noopener noreferrer" href={this.state.transactionURL} target="_blank">
								Transaction
							</a>
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="textPrimary">
							Close
						</Button>
					</DialogActions>
				</Dialog>
				<div>
					<Typography style={{ paddingBottom: '30px' }} variant="h4" color="textPrimary" gutterBottom>
						Integer storage Dapp
					</Typography>
					<p> Click on the browser network MetaMask to switch network.</p>

					<Card variant="outlined">
						<CardContent>
							<Typography variant="h6" color="textPrimary">
							Current Network : <b> {this.state.networkName} </b>
							</Typography>
						</CardContent>
					</Card>

					<p>
						{' '}
						{' '}
						Click <b>Enable MetaMask</b> to Sign in before using the Dapp{' '}
					</p>
					<Button
						style={{ float: 'right' }}
						variant="contained"
						color="secondary"
						onClick={this.enableMetaMask}
					>
						Enable MetaMask
					</Button>
					<br />
					<br />
					<br />
					<Typography style={{ paddingBottom: '30px' }} variant="subtitle1" gutterBottom>
						Contract Address :{' '}
						<Link
							color="inherit"
							href={this.state.etherscanLink + this.state.contractAddress}
							target="_blank"
							rel="noopener noreferrer"
						>
							<a>
								{' '}
								<u>{this.state.contractAddress}</u>{' '}
							</a>
						</Link>
					</Typography>
					<Box component="span" display="flex" p={1} m={1} bgcolor="background.paper">
						<Typography variant="h6" color="textPrimary" gutterBottom>
							The purpose of Integer Storage Dapp is to change the state of the Integer in the Smart
							contract.
							<p>Please click on the Contract address and view the source code of the Contract.</p>{' '}
						</Typography>
					</Box>
					<Card variant="outlined">
						<CardContent>
							<Typography variant="h6" color="textPrimary">
								Stored Integer : {this.state.value}
							</Typography>
						</CardContent>
					</Card>

					<p>
						Click on <b> Refresh Integer</b> to see the state change after interacting with the Smart
						Contract.
					</p>
					<Button style={{ float: 'right' }} variant="contained" color="primary" onClick={this.getValue}>
						Refresh Integer
					</Button>

					<br />
					<br />
					<br />
					<b>
						{' '}
						Request network token from{' '}
						<Link
							target="_blank"
							color="inherit"
							href={this.state.faucetlink}
							rel="noopener noreferrer"
						>
							<a>
								{' '}
								<u>Faucet</u>{' '}
							</a>
						</Link>
						to interact with the contract if your Balance is Zero. {' '}
					</b>
					<Typography
						style={{ paddingTop: '30px', paddingBottom: '30px' }}
						variant="h6"
						color="textPrimary"
						gutterBottom
					>
						User Balance: {this.state.ethBalance}
					</Typography>
					<p>
						Click on <b> Refresh Balance</b> to see the deduction of token balance after interacting with the Smart
						Contract
					</p>
					<Button style={{ float: 'right' }} variant="contained" color="primary" onClick={this.getEthBalance}>
						Refresh balance
					</Button>
					<br />
					<br />
					<br />
					<br />
					<br />

					<form style={{ width: '100%' }} onSubmit={this.storeValue}>
						<p>Store Integer will interact with the Smart contract and change the state of the Integer.</p>
						<TextField
							id="standard-basic"
							label="Enter Value"
							name="value"
							setvalue={this.state.setvalue}
							onChange={this.handleValue.bind(this)}
						/>
						<Button
							type="submit"
							style={{ float: 'right', marginTop: '20px' }}
							variant="contained"
							color="secondary"
							disabled={this.state.loading}
						>
							{!this.state.loading && <a> Store Integer </a>}
							{this.state.loading && <CircularProgress color="secondary" thickness={6} size={24} />}
						</Button>
					</form>
					<br />
					<br />
					<br />
					<br />
					<BacktoHomepage networkData ={this.state.networkID} />
				</div>
			</Layout>
		);
	}
}

const Integerpage = () => (
	<Web3Container
		renderLoading={() => <Metamask />}
		render={({ web3, accounts, contract }) => (
			<Integerstorage accounts={accounts} contract={contract} web3={web3} />
		)}
	/>
);
export default Integerpage;
