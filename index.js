const exec = require('./exec');
const babel = require("@babel/core");
module.exports = function (source) {

    return `module.exports = ${JSON.stringify(exec(`
    require('@babel/register')({
        presets: ['@babel/preset-env']
     });
     ${source}`, this.resourcePath, this.context))}`;
};