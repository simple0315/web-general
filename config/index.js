'use strict'

const path = require('path')

module.exports = {
    dev: {
        env: require('./prod.env'),
        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
        // Various Dev Server settings
        host: '0.0.0.0', // can be overwritten by process.env.HOST
        port: 8088, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
        devtool: 'cheap-module-eval-source-map',
        cacheBusting: true,
        cssSourceMap: true
    },

    build: {
        env: require('./dev.env'),
        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),
        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
        productionSourceMap: false,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',
        productionGzip: false,
        productionGzipExtensions: [
            'js', 'css'
        ],
        bundleAnalyzerReport: process.env.npm_config_report
    }
}
