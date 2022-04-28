var Stack = require('./Stack');

function BinarySearchTree() {
    var Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    var root = null;

    var insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                insertNode(node.right, newNode);
            }
        }
    };

    this.insert = function (key) {
        var newNode = new Node(key);
        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    this.getRoot = function () {
        return root;
    };

    /**
     * 中序遍历指先访问左子树，然后访问根，最后访问右子树的遍历方式
     */
    function inOrderTraverseNode(node, callback) {
        if (node !== null) {  // 注意一定要写上终止条件
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };
    this.inOrderTraverse = function (callback) {
        inOrderTraverseNode(root, callback);
    };
    this.inOrderTraverseUnRec = function (callback) {
        if (root !== null) {
            var stack = new Stack(),
                node = root;
            while (!stack.isEmpty() || node) {
                if (node) {   // 有右复一
                    stack.push(node); // 左尽入栈
                    node = node.left;
                } else {   // 无右复二
                    node = stack.pop(); // 出栈访问
                    callback(node.key);
                    node = node.right;
                }
            }
        }
    }

    /**
     * 先序遍历指先访问根，再访问子树
     */
    function preOrderTraverseNode(node, callback) {
        if (node !== null) {
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };
    this.preOrderTraverse = function (callback) {
        preOrderTraverseNode(root, callback);
    }

    this.preOrderTraverseUnRec = function (callback) {
        if (root !== null) {
            var stack = new Stack();
            stack.push(root);
            while (!stack.isEmpty()) {
                var node = stack.pop();
                if (callback) {
                    callback(node.key);
                }
                if (node.right) {
                    stack.push(node.right);
                }
                if (node.left) {
                    stack.push(node.left);
                }
            }
        }
    }

    /**
     * 后序遍历指先访问子树，再访问根
     */
    function postOrderTraverseNode(node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }
    this.postOrderTraverse = function (callback) {
        postOrderTraverseNode(root, callback);
    }
    this.postOrderTraverseUnRec = function (callback) {
        if (root !== null) {
            var stack = new Stack(),
                outputStack = new Stack(),
                node;
            stack.push(root);
            while (!stack.isEmpty()) {
                node = stack.pop();
                outputStack.push(node);  // 将先序遍历中的访问操作改为入栈操作
                if (node.left) {
                    stack.push(node.left);
                }
                if (node.right) {
                    stack.push(node.right);
                }
            }
            while (!outputStack.isEmpty()) {
                node = outputStack.pop();  // 全部入栈后出栈访问
                if (callback) {
                  callback(node.key);
                }
            }
        }
    }
    this.orderBFS = function (callback) {
        var arr = [], node;
        if (root !== null) {
            arr.push(root);
            while (arr.length !== 0) {
                node = arr.shift();
                if (callback) {
                    callback(node.key)
                }
                if (node.left) {
                    arr.push(node.left);
                }
                if (node.right) {
                    arr.push(node.right);
                }
            }
        }
    }

    this.values = function (traverseFuc) {
        var keyList = [];
        this[traverseFuc](function (key) {
            keyList.push(key);
        });
        return keyList;
    };
}

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(11);
binarySearchTree.insert(7);
binarySearchTree.insert(13);
binarySearchTree.insert(5);
binarySearchTree.insert(3);
binarySearchTree.insert(9);
console.log(binarySearchTree.getRoot());
console.log(binarySearchTree.values('inOrderTraverse'));
console.log(binarySearchTree.values('preOrderTraverse'));
console.log(binarySearchTree.values('postOrderTraverse'));
console.log(binarySearchTree.values('orderBFS'));