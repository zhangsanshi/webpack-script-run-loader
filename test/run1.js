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

module.exports = Object.assign({
    xx,
    a,
    d() {
        return 5;
    },
}, test);