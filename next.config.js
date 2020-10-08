
//Set up dotenv
const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')

module.exports = {
  webpack: (config, { buildId, dev }) => {
    // This allows the app to refer to files through our symlink
    config.resolve.symlinks = false
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv)) //dotenv
    return config
  }
}
