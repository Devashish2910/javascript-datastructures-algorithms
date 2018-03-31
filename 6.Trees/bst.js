const Node = require('./Node');

class BST {
    constructor() {
        this.root = null;   // start point
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

    // private method to find smallest element in right sub-tree
    _smallestElementInRightSubtree(subtree) {
        while (subtree && subtree.left !== null) {
            subtree = subtree.left;
        }
        return subtree;
    }

    // private method for deletion of an element
    _delete(value, tree) {

        if(!tree) {
            return null;
        }

        if (value < tree.key) {
            tree.left = this._delete(value, tree.left);
            return tree;
        } else if (value > tree.key) {
            tree.right = this._delete(value, tree.right);
            return tree;
        } else {
            // Case 1: current key has no child
            if (!tree.left && !tree.right) {
                tree = null;
                return tree;
            }

            // Case 2: current key has a child
            if(!tree.right && tree.left) {
                tree = tree.left;
                return tree;
            } else if (!tree.left && tree.right) {
                tree = tree.right;
                return tree;
            }

            // Case 3: current key has two children
            if(tree.left && tree.right) {
                const aux = this._smallestElementInRightSubtree(tree.right);
                tree.key = aux.key;
                tree.right = this._delete(aux.key, tree.right);
                return tree;
            }
        }
    }

    // method for deletion of an element from tree
    delete(el) {
           this.root = this._delete(el, this.root);
    }

}

const myTree = new BST();
myTree.insert(10);
myTree.insert(5);
myTree.insert(4);
myTree.insert(3);
myTree.insert(6);
myTree.insert(12);
myTree.insert(15);
myTree.insert(16);

const sort = (val) => {
    console.log(val);
}
//myTree.inOrderTraversal(sort);

const max = myTree.maxValue()
//console.log(max);

//console.log(myTree.has(7))

myTree.delete(10);
myTree.inOrderTraversal(sort)
