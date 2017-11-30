/*
const str1 = 'FRANCE';
const str2 = 'french';
*/
/*
const str1 = 'handshake';
const str2 = 'shake hands';
*/

/*
const str1 = 'aa1+aa2';
const str2 = 'AAAA12';
*/

const str1 = 'E=M*C^2';
const str2 = 'e=m*c^2';


const special_pattern = /[~!@\#$%<>^&*\()\-=+_\’:;]/gi;
const number_pattern = /[1234567890]/gi;
var makeMultiRecordSet = (str) => {
    var result = new Array;
    var flag;
    for (var i = 0; i < str.length-1; i++) {
        var temp = str[i]+str[i+1];
        flag = true;
        
        if (temp.search(/\s/) != -1) {
            flag = false;
        }
        
        if (temp.search(special_pattern) != -1) {
            flag = false;
        }
    
        if (temp.search(number_pattern) != -1) {
            flag = false;
        }

        if (flag) {
            result.push(temp.toUpperCase());
        }
    }
    return result;
}

var getIntersection = (set1, set2) => {
    var intersection_array = new Array;
    for (var i = 0; i < set1.length; i++) {
        var target = set2.indexOf(set1[i]);
        if (target != -1) {
            intersection_array.push(set1[i]);
            set2.splice(target, 1);
        }
    }

    return intersection_array;
}

var getUnion = (set1, set2) => {
    var union_array = new Array;
    for (var i = 0; i < set1.length; i++) {
        var target = set2.indexOf(set1[i]);
        union_array.push(set1[i]);
        if (target !== -1) {
            set2.splice(target, 1);
        }
    }
    for (var j in set2) {
        union_array.push(set2[j]);
    }
    return union_array;
}

var getJaccardSimilarity = (intersection_length, union_length) => {
    
    if (intersection_length === 0 || union_length === 0) {
        return 65536;
    }
    
    return parseInt(intersection_length/union_length * 65536);
}

var solution = (str1, str2) => {
    var intersection_length = getIntersection(makeMultiRecordSet(str1), makeMultiRecordSet(str2)).length;
    var union_length = getUnion(makeMultiRecordSet(str1), makeMultiRecordSet(str2)).length;
    
    console.log(getJaccardSimilarity(intersection_length, union_length));
}

solution(str1, str2);


var test = () => {
    var set1 = [ 'AA', 'AA' ];
    var set2 = [ 'AA', 'AA', 'AA' ];

    var array = new Array;

    for (var i in set1) {
        array.push(set1[i]);
        target = set2.indexOf(set1[i]);
        if (target != -1) {
            set2.splice(target, 1);
        } 
    }

    for (var j in set2) {
        array.push(set2[j]);
    }
    console.log(array);
}