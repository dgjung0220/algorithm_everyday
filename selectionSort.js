var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

var indexOfMinimum = function(array, startIndex) {
    var minIndex = startIndex;
    var minValue = array[minIndex];

    for (var i = minIndex + 1; i < array.length; i++ ) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i]
        }
    }

    return minIndex;
}

var printArray = function(array) {
    for (var i = 0; i < array.length; i++) {
        document.write(array[i] + " ");
    }
    document.write("<br>");
}

var selectionSort = function(array) {
    for (var i = 0; i < array.length; i++) {
        swap(array, i, indexOfMinimum(array,i));
    }
}

window.addEventListener("load",function(){
    var array = [1,5,22,-1,-20, 456, 123,234, 7, 23,1, -20];

    printArray(array);
    selectionSort(array);
    printArray(array);
});