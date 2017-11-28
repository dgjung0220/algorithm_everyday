//var TARGET = ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'];
//var TARGET = ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul'];
//var TARGET = ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome'];
//var TARGET = ['Jeju', 'Pangyo', 'NewYork', 'newyork'];
var TARGET = ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'];	
var cache_size = 0;

const cache_hit = 1;
const cache_miss = 5;

var map = new Map();
var executeTime = 0;

var getLeastRecentlyUsedInList = () => {
    var target = '';
    var temp = 0;
    for (var [key, value] of map) {
        if (temp < value) {
            temp = value;
            target = key;
        }
    }
    return target;
}

var aging = () => {
    for (var [key, value] of map.entries()) {
        var temp = parseInt(value);
        map.set(key, temp+1);
    }
}

var cache_input = (city) => {
    var cnt = map.has(city);
    
    if (!cnt) {
        if (map.size < cache_size) {
            map.set(city, 0);
        } else {
            map.delete(getLeastRecentlyUsedInList());
            map.set(city, 0);
        }
        executeTime += cache_miss;
    } else {
        map.set(city, 0);
        executeTime += cache_hit;
    }

    aging();
}

for (var i in TARGET) {
    cache_input(TARGET[i].toUpperCase());
}
console.log(map);
console.log(executeTime);