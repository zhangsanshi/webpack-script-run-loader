const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, './index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /run\d\.js$/, 
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: path.resolve(__dirname, '../index.js'),
                        options: {
                            babel: `require('babel-register')({
                                presets: ['babel-preset-env']
                             });`
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            }
        ]
    },
};