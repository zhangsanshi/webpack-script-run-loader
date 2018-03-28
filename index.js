const exec = require('./exec');
const loaderUtils = require("loader-utils");
module.exports = function (source) {
    this.cacheable && this.cacheable();
    const options = loaderUtils.getOptions(this) || {};
    const babel = options.babel || `require('@babel/register')({
        presets: ['@babel/preset-env']
     });`;
    return `module.exports = ${JSON.stringify(exec(`${babel};${source}`, this.resourcePath, this.context))}`;
};
