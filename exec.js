const Module = require("module");
function exec(code, filename, context) {
    const module = new Module(filename);
    module.paths = Module._nodeModulePaths(context);
    module.filename = filename;
    module._compile(code, filename);
    return module.exports;
}
module.exports = exec;