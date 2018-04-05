const Node = require('./Node');

class AVL {
    constructor() {
        this.root = null;
    }

    // Inserting Node
    insert(el) {
        this.root = this._insert(this.root, el);
    }

    // Single Rotation
    _rotationSingleRight(node) {
        let temp = node.left;
        node.left = node.left.right;
        temp.right = node;
        return temp;
    }

    _rotationSingleLeft(node) {
        let temp = node.right;
        node.right = node.right.left;
        temp.right = node;
        return temp;
    }

    // Double Rotation
    _rotationDoubleLeftToRight(node) {
        node.left = this._rotationSingleLeft(node.left);
        return this._rotationSingleRight(node)
    }

    _rotationDoubleRightToLeft(node) {
        node.right = this._rotationSingleRight(node.right);
        return this._rotationSingleLeft(node);
    }


    // Find the height of the subtree
    heightOfNode(node) {
        if (!node) {
            return -1
        } else {
            return Math.max(this.heightOfNode(node.left), this.heightOfNode(node.right)) + 1;
        }
    }

    // Insert Node Helper Method
    _insert(node, el) {
        if (!node) {    // current node value is null
            node = new Node(el)
        } else if (node.key > el) {    // new node is smaller than current node
            node.left = this._insert(node.left, el);

            if (node) {
                if (this.heightOfNode(node.left) - this.heightOfNode(node.right) > 1) {
                    if (el < node.left.key) {
                        node = this._rotationSingleRight(node);
                    } else {
                        node = this._rotationDoubleLeftToRight(node);
                    }
                }
            }
        } else if  (node.key < el) {      // new node is larger than current node
            node.right = this._insert(node.right, el);

            if (node) {
                if (this.heightOfNode(node.right) - this.heightOfNode(node.left) > 1) {
                    if (el > node.right.key) {
                        node = this._rotationSingleLeft(node);
                    } else {
                        node = this._rotationDoubleRightToLeft(node);
                    }
                }
            }
        }
        return node;
    }

    // Remove Node
    remove(el) {
        this.root = this._removeAndBalance(this.root, el);
    }

    // Remove and balance Helper
    _removeAndBalance(node, el) {
        const root = node;
        node = this._remove(node, el);

        if(node) {
            if (this.heightOfNode(node.left)-this.heightOfNode(node.right) > 1) {
                if (el < root.left.key) {
                    node = this._rotationSingleRight(node);
                } else {
                    node = this._rotationDoubleRightToLeft(node);
                }

            } else if (this.heightOfNode(node.right) - this.heightOfNode(node.left) > 1) {
                if (el > root.right.key) {
                    node = this._rotationSingleLeft(node);
                } else {
                    node = this._rotationDoubleLeftToRight(node);
                }
            }
        }
        return node;
    }

    // Remove node helper method
    _remove(node, el) {
        if (!node) {
            return null;
        }

        if (node.left.key > el) {
            node.left = this._remove(node.left, el);
            return node;
        } else if (node.right.key < el) {
            node.right = this._remove(node.right, el);
            return node;
        } else {
            if (!node.left && !node.right) {
                node = null;
                return node;
            }

            if (!node.right && node.left) {
                node = node.left;
                return node;
            } else if (!node.left && node.right) {
                node = node.right;
                return node;
            }

            if (node.left && node.right) {
                const aux = this._smallestInRightSubTree(node.right);
                node.key = aux.key;
                node.right = this._remove(node.right, aux.key);
                return node;
            }
        }
    }

    // Find smallest element in the right sub tree
    _smallestInRightSubTree(node) {
        if(node.left) {
            while(node.left) {
                node = node.left;
            }
        }
        return node;
    }
}
