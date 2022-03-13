const path = require('path');

const config = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            Kbot: path.resolve(__dirname, './../kbot/dist'),
            kbot: path.resolve(__dirname, './../kbot/dist'),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    devtool: 'inline-source-map',
    target: 'node'
};


module.exports = (env, argv) => {

    return config
}
