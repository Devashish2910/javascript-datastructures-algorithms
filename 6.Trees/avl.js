const Node = require('./Node');

class AVL {
    constructor() {
        this.root = null;
    }

    // Private Method: To insert new element
    _insert(el, tree) {

        if (el < tree.key) {    // new element is smaller than current node

        } else if (el > tree.key) {     // new element is larger than current node

        }
    }

    // Method: To insert new element
    insert(el) {
        const newNode = new Node(el);
        let current = this.root;

        if (!current) {
            current = newNode;
            return this.root;
        }
        return this._insert(newNode, current);
    }
}