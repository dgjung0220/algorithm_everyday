var isEven = (n) => {
    return (n%2 == 0);
}

var isOdd = (n) => {
    return !isEven(n);
}

var power = function(x, n) {
    console.log (x + "의 "+ n+"승");
    if (n === 0) {
        return 1;
    }

    if (isOdd(n)) {
        return x * power(x,n-1);
    }

    if (isEven(n)) {
        var temp = power(x,n/2);
        return temp * temp;
    }
}

window.addEventListener("load", function(){
    document.write(power(2,100));
});