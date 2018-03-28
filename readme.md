# webpack-script-run-loader
wepack script exec loader in build time.

## usage
complete example in the test folder.

```
// webpack.config.js
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
                        // can use custom babel config or default config.
                        // default config:
                        // require('@babel/register')({
                        //     presets: ['@babel/preset-env']
                        // });
                    },  
                   
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
}
```

```
// run2.js
import a from './run/module';
var xx = {
    a: {
        x: 1,
        y: 2,
        z: 3,
        0: 4,
    },
};
for (let x of [1, 2, 3]) {
    xx['a' + x] = Object.assign({}, xx.a);
    delete xx['a' + x][0];
}
const test = require('./run/cjs');

export const run2 = Object.assign({
    xx,
    a,
    d() {
        return 5;
    },
}, test);

```
## note
1. this loader serialized data by `JSON.stringify`.
2. this loader will not watch `run script file` dependent files, so need to manual trigger `run script file` file change if dependent files changed.