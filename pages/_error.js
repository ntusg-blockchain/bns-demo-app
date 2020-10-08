import Layout from '../Components/Layout';
import { Typography, Container } from '@material-ui/core';

function Error({ statusCode }) {
	return (
		<Layout>
			<Container maxWidth="sm">
				<br />
				<Typography variant="h3" component="h2">
					Oops....
				</Typography>
				<br />
				<h1>
					Error {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'} -
					Page Not Found
				</h1>
				<br />
				<br />
				<br />
				<br />
				<br />

				<Typography variant="h6">
					<Button href="/" disableRipple rel="noopener noreferrer">
						<u style={{ textTransform: 'none' }}> Back to Dapps page.</u>
					</Button>
				</Typography>
			</Container>
		</Layout>
	);
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
