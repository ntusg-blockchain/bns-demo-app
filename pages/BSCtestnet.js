import React from 'react';
import Layout from '../Components/Layout';
import {
	Button,
	Link,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Typography
} from '@material-ui/core';

class BscTestnet extends React.Component {
	state = {
		modalMode: true
	};

	handleClose = () => {
		this.setState({ modalMode: false });
		//window.location.reload(true);
	};
	render() {
		return (
			<Layout themeMode={true}>
				<Dialog
					fullWidth={true}
					maxWidth="md"
					onClose={this.handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
					open={!!this.state.modalMode}
				>
					<DialogTitle>
						{' '}
						<h3 style={{ display: 'inline' }}> User notices</h3> ⚠️
					</DialogTitle>

					<DialogContent dividers>
						<DialogContentText>
							<b>
								{' '}
								Please note that this is a beta version of the BNS Dapps which is still undergoing final
								testing before its official release. The platform, its software and all content found on
								it are provided on an “as is” and “as available” basis. BNS Dapps does not give any
								warranties, whether express or implied, as to the suitability or usability of the
								website, its software or any of its content.{' '}
							</b>
						</DialogContentText>
						<DialogContentText>
							<b>
								NTU will not be liable for any loss, whether such loss is direct, indirect, special or
								consequential, suffered by any party as a result of their use of the BNS Dapps, its
								software or content. {' '}
							</b>
						</DialogContentText>
						<DialogContentText>
							<b>
								Should you encounter any bugs, glitches, lack of functionality or other problems on the
								website, please let us know immediately so we can rectify these accordingly. Your help
								in this regard is greatly appreciated!
							</b>
						</DialogContentText>
						<DialogContentText>
							<b>You can write to us - Blockchain-ntu@e.ntu.edu.sg</b>
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} variant="outlined" color="secondary">
							Close
						</Button>
					</DialogActions>
				</Dialog>
				<div>
					<Typography style={{ padding: '20px' }} variant="h4">
						Welcome to Blockchain@NTU Dapps.{' '}
					</Typography>

					<Typography variant="subtitle1">
						{' '}
						Dapps are built for educational and demonstration purposes only.{' '}
						<p>
							💖🔸🌈{' '}
						</p>
					</Typography>

					<Typography variant="subtitle2">
						{' '}
						To enjoy the best experience , please use Desktop browser and sign in with browser extension
						Metamask.
					</Typography>
					<br />
					<b>
						{' '}
						Follow this
						<Button
							color="subtitle1"
							href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"
							target="_blank"
							disableRipple
							rel="noopener noreferrer"
						>
							<b>
								<u>guide</u>
							</b>
						</Button>
						to install Binance Testnet MetaMask.
					</b>
					<p>
						{' '}
						Request BSC from{' '}
						<Button
							color="subtitle1"
							href="https://testnet.binance.org/faucet-smart"
							target="_blank"
							disableRipple
							rel="noopener noreferrer"
						>
							<b>
								<u> Binance Smart Chain Faucet</u>
							</b>
						</Button>
						to experiment with the Dapps below. {' '}
					</p>
					<br />
					<ul>
						<li>
							<Typography variant="subtitle1">
								{' '}
								<Button
									href="/integerstorage"
									as={process.env.BACKEND_URL + '/integerstorage'}
									disableRipple
									rel="noopener noreferrer"
								>
									<u style={{ textTransform: 'none' }}> Integer Storage</u>
								</Button>
							</Typography>
						</li>

						<li>
							<Typography variant="subtitle1">
								{' '}
								<Button
									href="/callIntegerStorage"
									as={process.env.BACKEND_URL + '/callIntegerStorage'}
									disableRipple
									rel="noopener noreferrer"
								>
									<u style={{ textTransform: 'none' }}> Call Integer Storage</u>
								</Button>
							</Typography>
						</li>

						<li>
							<Typography variant="subtitle1">
								{' '}
								<Button
									href="/attendanceTracker"
									as={process.env.BACKEND_URL + '/attendanceTracker'}
									disableRipple
									rel="noopener noreferrer"
								>
									<u style={{ textTransform: 'none' }}> Attendance Tracker </u>
								</Button>
							</Typography>
						</li>
					</ul>
				</div>
				<br />
				<br />
				<br />
				<Typography variant="h6">
					<Button href="/" disableRipple rel="noopener noreferrer">
						<u style={{ textTransform: 'none' }}> Return to Mainpage. </u>
					</Button>
				</Typography>
			</Layout>
		);
	}
}

export default BscTestnet;
