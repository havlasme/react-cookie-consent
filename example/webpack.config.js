const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        src: path.resolve(__dirname, 'index.js'),
    },
    output: {
        filename: 'react-cookie-consent.js',
    },
    devServer: {
        static: __dirname,
    },
    module: {
        rules: [
            {
                test: path.resolve(__dirname, 'index.js'),
                exclude: path.resolve(__dirname, '..', 'node_modules'),
                use: 'babel-loader',
            },
            {
                test: path.join(__dirname, '..', 'src'),
                exclude: path.resolve(__dirname, '..', 'node_modules'),
                oneOf: [
                    {
                        test: /\.js$/,
                        use: 'babel-loader',
                    },
                    {
                        test: /\.scss$/,
                        sideEffects: true,
                        use: [
                            'style-loader',
                            'css-loader',
                            'sass-loader',
                        ],
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: {
            '@havlasme/react-cookie-consent': path.join(__dirname, '..', 'src'),
        },
    },
    stats: {
        colors: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            inject: true,
            filename: 'index.html',
        }),
    ],
}
