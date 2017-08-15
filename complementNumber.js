var complementNumberByJS = (number) => {
  number = number.toString(2).split('');
  
  var temp ='';
  for(var i in number) {
    if (number[i] > 0) {
      temp += 0;
    } else {
      temp += 1;
    }
  }
  return parseInt(temp,2);
}

console.log(complementNumberByJS(100));