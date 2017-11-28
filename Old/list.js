var linkedList = function() {
    this.length = 0;
    this.headNode = new node(null);
}

var node = function(element) {
    this.data = element;
    this.next = null;
}

linkedList.prototype.add = function(element, position) {
    var position = position == undefined ? this.length+1:position;

    var newNode = new node(element);
    var preNode = this.headNode;

    for (var i = 1; i < position; i++) {
        preNode = preNode.next;
    }
    newNode.next = preNode==null?null:preNode.next;
    preNode.next = newNode;

    this.length++;
}

linkedList.prototype.print = function() {
    var str = "linkedList : ";
    var node = this.headNode.next;

    while(node != null) {
        str += node.data;
        str += " => ";
        node = node.next;
    }
    console.log(str);
}

list = new linkedList();
list.add(1);
list.add(2);
list.print();