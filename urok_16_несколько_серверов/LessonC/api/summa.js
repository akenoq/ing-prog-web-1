"use strict";

module.exports = function(request, response) {
    const a = request.query["a"] + "";
    const b = request.query["b"] + "";
    const result = parseInt(a) + parseInt(b);
    response.end(result + "");
}
