var swap = function(array, i, j){
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

var bubbleSort = function(array) {

    for (var i = array.length-1; i > 0; i--) {

        for (var j = 0; j < i; j++) {
            if (array[j] > array[j+1]) {
                swap(array, j, j+1);
            }
        }
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
    document.write("bubbleSort<br>");
    bubbleSort(array);
    printArray(array);
});