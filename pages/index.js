import React from 'react';
import Layout from '../Components/Layout';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Typography
} from '@material-ui/core';

class Index extends React.Component {
	state = {
		modalMode: false
	};

	handleClose = () => {
		this.setState({ modalMode: false });
		//window.location.reload(true);
	};
	render() {
		return (
			<Layout themeMode = {true}>
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
						<Button onClick={this.handleClose} variant="outlined" color="primary">
							Close
						</Button>
					</DialogActions>
				</Dialog>
				<div>
					<Typography style={{ padding: '20px' }} variant="h4">
						Welcome to Blockchain@NTU Dapps.{' '}
					</Typography>
					<br />
					<Typography variant="subtitle1">
						{' '}
						Dapps are built for educational and demonstration purposes only.{' '}
						<p>
							💻📦🌈📦🌈📦💻 <Typography variant="subtitle1"> Choose the following Testnet</Typography>
							<p>
								<Button color="subtitle1" href="/ETHropsten" disableRipple rel="noopener noreferrer">
								<img style ={{width: '6vw', height: '6vh' }} src = "static/ethereum-eth-logo.svg" alt="BNB SVG"/>

									<b>
										<u> Ropsten Testnet</u>
									</b>
								</Button>{' '}
								Or {' '}
								<Button color="subtitle1" href="/BSCtestnet" disableRipple rel="noopener noreferrer">
								<img style ={{width: '6vw', height: '6vh' }} src = "static/binance-coin-bnb-logo.svg" alt="BNB SVG"/>
									<b>
										<u> BSC Testnet</u>
									</b>
								</Button>{' '}
							</p>{' '}
						</p>
					</Typography>
				</div>
				<br />
				<br />
				<Typography variant="h6">
					<Button href="https://clubs.ntu.edu.sg/ntublockchain" disableRipple rel="noopener noreferrer">
						<u style={{ textTransform: 'none' }}> Check out our Official Club Website </u>
					</Button>
				</Typography>
			</Layout>
		);
	}
}

export default Index;
