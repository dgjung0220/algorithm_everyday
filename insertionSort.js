var insertionSort = function(array) {
    printArray(array);
    
    for (var end = 1; end < array.length; end++) {

        var value = array[end];
        var i;
        
        for (i = end; value < array[i-1]; i--) {
            array[i] = array[i-1];
        }
        array[i] = value;

        printArray(array);
    }
}

var printArray = function(array) {
    for (var i = 0; i < array.length; i++) {
        document.write(array[i] + " ");
    }
    document.write("<br>");
}

window.addEventListener("load",function(){
    var array = [1,5,22,-1,-20, 456, 123,234, 7, 23,1, -20];
    document.write("insertionSort<br>");
    insertionSort(array);
});