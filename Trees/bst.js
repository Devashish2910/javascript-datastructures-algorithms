const Node = require('./Node');

class BST {
    constructor() {
        this.root = null;   // start point
        this.min = [];  // to track minimum
        this.max = [];  // to track maximum
    }

    _minmax(key) {
        if (this.min[(this.min.length - 1)] > key) {
            this.min.push(key)
        } else {
            this.min.push(this.min[(this.min.length - 1)])
        }

        if (this.max[(this.max.length - 1)] < key) {
            this.max.push(key)
        } else {
            this.max.push(this.max[(this.max.length - 1)])
        }
    }

    _insert(newNode, root) {
        if (newNode.key < root.key) {   // newNode key is smaller than root
            if(root.left === null) {
                root.left = newNode;
                this._minmax(newNode.key);
            } else {
                this._insert(newNode, root.left);
            }
        } else {
            if(root.right === null) {   // newNode key is larger than root
                root.right = newNode;
                this._minmax(newNode.key);
            } else {
                this._insert(newNode, root.right);
            }
        }
    }

    insert(el) {
        const newNode = new Node(el);
        if (this.root == null) { // if tree is empty
            this.root = newNode;
            this.min.push(newNode.key);
            this.max.push(newNode.key);
        } else {  // if tree is not empty
             this._insert(newNode, this.root);
        }
    }
}

const myTree = new BST();
myTree.insert(10);
myTree.insert(20);
myTree.insert(5);
myTree.insert(7);
console.log(myTree)