process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});


/** Insert code here */


/** code end */


var fs = require('fs');
var wstream = fs.createWriteStream(process.env.OUTPUT_PATH);
process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    var res;

    var _arr_size = 0;
    _arr_size = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;
    
    var _arr = [];
    var _arr_item;
    for(var _arr_i = 0; _arr_i < _arr_size; _arr_i++) {
        var _arr_item = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
        __input_currentline += 1;
        _arr.push(_arr_item);
    }
    
    var _k = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;
    
    /** solution */
    //res = solution();
    wstream.write(res+"\n");
    
    wstream.end();
});