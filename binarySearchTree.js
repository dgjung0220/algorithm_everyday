var Tree = function() {
  this.root = null;
}

var Node = function(element, parent) {
  this.data = element;
  this.left = null;
  this.right = null;
}

Tree.prototype.add = function(element) {
  
  var root = this.root;

  // If tree is empty...
  if(!root) {
    this.root = new Node(element);
    return;
  }

  var currentNode = root;
  var newNode = new Node(element);

  while(currentNode) {
    if(element < currentNode.data) {
      if(currentNode.left == null) {
        currentNode.left = newNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if(currentNode.right == null){
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}

function inorder(node) {
  if(node) {
    inorder(node.left);
    console.log(node.data);
    inorder(node.right);
  }  
}

function preorder(node) {
  if(node) {
    console.log(node.data);
    preorder(node.left);
    preorder(node.right);
  }
}

function postorder(node) {
  if(node) {
    postorder(node.left);
    postorder(node.right);
    console.log(node.data);
  }
}

var binaryTree = new Tree();
binaryTree.add(10);
binaryTree.add(8);
binaryTree.add(14);
binaryTree.add(7);
binaryTree.add(9);
binaryTree.add(13);
binaryTree.add(15);

console.log('inorder');
inorder(binaryTree.root);
console.log('preorder');
preorder(binaryTree.root);
console.log('postorder');
postorder(binaryTree.root);