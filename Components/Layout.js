import React from 'react';
import { Header, Footer } from '../Components/Layouts';
import Head from 'next/head';
import { Paper, CircularProgress } from '@material-ui/core';
import { useState, useEffect } from 'react';
import red from '@material-ui/core/colors/red';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const Layout = (props) => {
	const [ darkMode, setDarkMode ] = useState(props.themeMode);
	const [ loading, setLoading ] = useState(true);

	// It will be executed before rendering

	// Create a theme instance.
	const darkTheme = createMuiTheme({
		palette: {
			type: 'dark',
			primary: {
				main: '#2b2e3b'
			},
			secondary: {
				main: '#ffc107'
			},
			error: {
				main: red.A400
			},
			background: {
				default: '#fff'
			}
		},
		typography: {
			subtitle1: {
				color: 'yellow'
			}
		}
	});
	const lightTheme = createMuiTheme({
		palette: {
			type: 'light',
			primary: {
				main: '#2b2e3b'
			},
			secondary: {
				main: '#19857b'
			},
			error: {
				main: red.A400
			},
			background: {
				default: '#fff'
			}
		}
	});

	useEffect(() => {
		let timer1 = setTimeout(() => setLoading(false), 1000);
		return () => {
			clearTimeout(timer1);
		};
	}, []);

	useEffect(() => {
		// KIV
		if( props.themeMode !== false){
			setDarkMode(true);
			console.log(typeof props.themeMode);
			console.log("change to dark : " + props.themeMode )
		}
	  }, [props.themeMode]);

	if (loading == true) {
		return (
			<div
				style={{
					position: 'fixed',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
					height: '100%',
					zIndex: 999999
				}}
			>
				<CircularProgress size={50} thickness={5} />{' '}
			</div>
		);
	} else {
		console.log = console.warn = console.error = () => {};
		// if darkmode true = dark theme , if false light.
		return (
			<div >
				<ThemeProvider theme={darkMode ? darkTheme : lightTheme }>
					<Head>
						<html lang="en" />
						<link rel="shortcut icon" href="static/favicon.ico"   as={ process.env.BACKEND_URL + '/'}/>
						<title>Blockchain@NTU Dapps</title>
						<meta property="og:title" content="Blockchain@NTU Dapps" key="title" />
					</Head>
					<Paper>
						<Header />
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'flex-end'
							}}
						/>
						<style jsx global>{`
									body {
									margin: 0;
							`}</style>
						<br />
						<Footer children={props.children} />
					</Paper>
				</ThemeProvider>
			</div>
		);
	}
};
export default Layout;
