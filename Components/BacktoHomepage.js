import React, { Component } from 'react';
import { Button, Typography } from '@material-ui/core';

const BacktoHomepage = (props) => {
	let networkID = props.networkData;
	//alert(networkID);
	if (networkID === 3) {
		return (
			<div>
				<Typography variant="h6">
					<Button href="/ETHropsten" disableRipple rel="noopener noreferrer">
						<u style={{ textTransform: 'none' }}> Back to Homepage. </u>
					</Button>
				</Typography>
			</div>
		);
	} else if (networkID === 56) {
		return (
			<div>
				<Typography variant="h6">
					<Button href="/BSCtestnet" disableRipple rel="noopener noreferrer">
						<u style={{ textTransform: 'none' }}> Back to Homepage. </u>
					</Button>
				</Typography>
			</div>
		);
	} else {
		return (
			<div>
				<Typography variant="h6">
					<Button href="/" disableRipple rel="noopener noreferrer">
						<u style={{ textTransform: 'none' }}> Back to Homepage. </u>
					</Button>
				</Typography>
			</div>
		);
	}
};

export default BacktoHomepage;
