const path = require('path')
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin')

require('dotenv').config()

module.exports = {
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[contenthash].[name].js',
    },
    plugins: [
        new HtmlBundlerPlugin({
            entry: {
                index: {
                    import: './src/index.html',
                },
            },
        }),
    ],
    module: {
        rules: [
            {
                include: path.resolve(__dirname, 'src'),
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
                resolve: {
                    extensions: ['.ts'],
                },
            },
        ],
    },
}
