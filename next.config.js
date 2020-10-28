//Set up dotenv
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');
const { createSecureHeaders } = require('next-secure-headers');

module.exports = {
	async headers() {
		return [ { source: '/(.*)', headers: createSecureHeaders() } ];
	},
	webpack: (config, { buildId, dev }) => {
		// This allows the app to refer to files through our symlink
		config.resolve.symlinks = false;
		config.plugins.push(new webpack.EnvironmentPlugin(localEnv)); //dotenv
		return config;
	}
};
