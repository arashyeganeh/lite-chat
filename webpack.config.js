const path = require('path');

module.exports = {
    entry: {
        login: path.join(__dirname, '/src/page/login/script.js'),
        room: path.join(__dirname, '/src/page/room/script.js')
    },
    output: {
        filename: '[name].script.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    }
};