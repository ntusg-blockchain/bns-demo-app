//Set up dotenv
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');
const { createSecureHeaders } = require('next-secure-headers');

module.exports = {
	//In general, X-Powered-By HTTP response header should be removed from response headers because it helps hackers to get the server information.
	poweredByHeader: false,

	async headers() {
		return [
			{
				source: '/(.*)',
				headers: createSecureHeaders({ contentSecurityPolicy: true, referrerPolicy: 'no-referrer' })
			}
		];
	},
	webpack: (config, { buildId, dev }) => {
		// This allows the app to refer to files through our symlink
		config.resolve.symlinks = false;
		config.plugins.push(new webpack.EnvironmentPlugin(localEnv)); //dotenv
		return config;
	}
};