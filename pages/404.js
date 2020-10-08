import Layout from '../Components/Layout';
import { Button, Container, Typography } from '@material-ui/core';

export default function Custom404() {
	return (
		<Layout>
			<Container maxWidth="sm">
				<br />
				<Typography variant="h3" component="h2">
					Oops....
				</Typography>
				<br />
				<h1>Error 404 - Page Not Found</h1>
				<br />
				<br />
				<br />
				<br />
				<br />
				<Typography variant="h6">
					<Button href="/" disableRipple rel="noopener noreferrer">
						<h3>
							<u style={{ textTransform: 'none' }}> Back to Dapps page</u>
						</h3>
					</Button>
				</Typography>
			</Container>
		</Layout>
	);
}
