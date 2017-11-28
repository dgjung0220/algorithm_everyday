function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.rear = rear;
    this.toString = toString;
    this.isEmpty = isEmpty;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function rear() {
    return this.dataStore[this.dataStore.length-1];
}

function toString() {
    var resultStr = "";
    for (i in this.dataStore) {
        resultStr += this.dataStore[i]+1 + " ";
    }
    console.log(resultStr);
}

function isEmpty() {
    if (this.dataStore.length == 0) {
        return true;
    } else {
        return false;
    }
}

var ary = [
	[0,1,1,0,0,0,0],
	[1,0,0,1,1,0,0],
	[1,0,0,0,0,0,1],
	[0,1,0,0,0,1,0],
	[0,1,0,0,0,0,0],
	[0,0,0,1,0,0,0],
	[0,0,1,0,0,0,0]
]

var visit = new Array(7);
var queue = new Queue();

var bfs = (start) => {
    
    for (var v = start; v < 7; v++) {
        
        if(visit[v] !== 1) {
            visit[v] = 1;
            queue.enqueue(v);
        }
        
        queue.toString();
        
        for (var i = 0; i < 7; i++) {
            if (ary[v][i] == 1 && visit[i] != 1) {
                visit[i] = 1;
                queue.enqueue(i);
            }
        }
        queue.dequeue();
    }
}

bfs(0);