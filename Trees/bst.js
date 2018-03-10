const Node = require('./Node');

class BST {
    constructor() {
        this.root = null;   // start point
        this.min = [];  // to track minimum
        this.max = [];  // to track maximum
    }

    // Insert Private: supporting method if tree is not empty
    _insert(newNode, root) {
        if (newNode.key < root.key) {   // newNode key is smaller than root
            if(root.left === null) {
                root.left = newNode;
            } else {
                this._insert(newNode, root.left);
            }
        } else {
            if(root.right === null) {   // newNode key is larger than root
                root.right = newNode;
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

    // Private: Search min element from tree
    _min(tree) {
        if(!tree.left) {
            return tree.key;
        } else {
            return this._min(tree.left);
        }
    }

    // finds minimum value from tree
    minValue() {
        const current = this.root;

        if (!current.left) {
            return current.key;
        } else {
            return this._min(current);
        }
    }

    // Private method for search max element from tree
    _max(tree) {
        if (!tree.right) {
            return tree.key;
        } else {
            return this._max(tree.right);
        }
    }

    // finds maximum value from tree
    maxValue() {
        const current = this.root;

        if(!current.right) {
            return current.key;
        } else {
            return this._max(current);
        }
    }

    // Private supporting method to check element in the tree
    _has(value, tree) {
        if (!tree) {
            return false;
        }
        if (value === tree.key) {
            return true;
        }
        if (value < tree.key) { // value is smaller than current node value
            return this._has(value, tree.left);
        } else {  // value is larger than current node value
            return this._has(value, tree.right);
        }
    }

    // method to check element is in tree or not
    has(el) {
        const current = this.root;

        if (current) {
            if (current.key === el) {
                return true;
            } else {
                return this._has(el, current);
            }
        } else {
            return false;
        }
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
//myTree.inOrderTraversal(sort);

const max = myTree.maxValue()
//console.log(max);

console.log(myTree.has(7))