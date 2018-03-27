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
this loader has own babel config for run script in node, maybe something not work and serialized by `JSON.stringify`.