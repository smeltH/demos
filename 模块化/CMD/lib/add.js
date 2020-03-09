define(function(require, exports, module) {
    function show() {
        const { msg } = require('./sub.js');
        console.log(msg);
    };
    exports.show = show;
});
