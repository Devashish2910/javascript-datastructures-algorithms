const Node = require('./Node');

class BST {
    constructor() {
        this.root = null;   // start point
        this.min = [];  // to track minimum
        this.max = [];  // to track maximum
    }

    // Private: to track min-max value of the tree
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

    // Insert Private: supporting method if tree is not empty
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

    // Insert Element in the tree
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

    // Has Private: supporting method to find element deep in the tree
    _has(value, node) {
        if (node.key > value) {
            if (node.left === null) {
                return false;
            } else {
                if (node.left.key === value) {
                    return true;
                } else {
                    return this._has(value, node.left);
                }
            }
        } else {
            if (node.right === null) {
                return false;
            } else {
                if (node.right.key === value) {
                    return true;
                } else {
                    return this._has(value, node.right);
                }
            }
        }
    }

    // Finds tree has a required element or not (returns bool)
    has(el) {
        const current = this.root;
        if (current.key === el) {  // if root is the required element
            return true;
        } else {  // if not
            return this._has(el, current);
        }
    }

    // Private: in-order traverse deep in the tree
    _inOrderTraverseNode(node, callBack) {
        if (node) {
            this._inOrderTraverseNode(node.left, callBack);
            callBack(node.key);
            this._inOrderTraverseNode(node.right, callBack);
        }
    }

    // In-order traversal (Left - Root - Right)
    inOrderTraversal(callBack) {
        const current = this.root;
        this._inOrderTraverseNode(current, callBack);
    }

    // Private: supporting pre-order method traverse in tree
    _preOrderTraverseNode(node, callBack) {
        if (node) {
            callBack(node.key);
            this._preOrderTraverseNode(node.left, callBack);
            this._preOrderTraverseNode(node.right, callBack);
        }
    }

    // Pre-order traversal (Root - Left - Right)
    preOrderTraversal(callBack) {
        const current = this.root;
        this._preOrderTraverseNode(current, callBack);
    }

    // Private: supporting method for post-order traversal in tree
    _postOrderTraverseNode(node, callBack) {
        if (node) {
            this._postOrderTraverseNode(node.left, callBack);
            this._postOrderTraverseNode(node.right, callBack);
            callBack(node.key);
        }
    }

    // post-order traversal (Left - Right - Root)
    postOrderTraversal(callBack) {
        const current = this.root;
        this._postOrderTraverseNode(current, callBack);
    }
}

const myTree = new BST();
myTree.insert(10);
myTree.insert(20);
myTree.insert(25);
myTree.insert(27);
myTree.insert(5);
myTree.insert(7);

const sort = (val) => {
    console.log(val);
}
myTree.inOrderTraversal(sort)