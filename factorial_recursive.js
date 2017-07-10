var factorial = function(n) {

    if (n === 0) {
        return 1;
    } 

    return n * factorial(n-1);
}

window.addEventListener("load",function(){
    document.write(factorial(5));
});

