const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (!data) return;

    function addNode(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (node.data > value) {
        node.left = addNode(node.left, value);
      } else {
        node.right = addNode(node.right, value);
      }
      return node;
    }

    this.rootNode = addNode(this.rootNode, data);
  }

  has(data) {
    function searchData(node, value) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      return node.data > value
        ? searchData(node.left, value)
        : searchData(node.right, value);
    }

    return searchData(this.rootNode, data);
  }

  find(data) {
    function findData(node, value) {
      if (!node) {
        return null;
      }

      if (node.data === value) {
        return node;
      }

      return node.data > value
        ? findData(node.left, value)
        : findData(node.right, value);
    }

    return findData(this.rootNode, data);
  }

  remove(data) {
    if (!this.has(data)) {
      return;
    }
    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (node.data > value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minimalRightNode = node.right;

        while (minimalRightNode.left) {
          minimalRightNode = minimalRightNode.left;
        }

        node.data = minimalRightNode.data;

        node.right = removeNode(node.right, minimalRightNode.data);

        return node;
      }
    }

    return removeNode(this.rootNode, data);
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
