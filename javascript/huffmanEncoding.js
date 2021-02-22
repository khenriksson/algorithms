/*
 * Informal description
 * Given: A set of symbols and their weights (usually proportional to probabilities).
 * Find: A prefix-free binary code (a set of codewords) with minimum expected codeword length (equivalently, a tree with minimum weighted path length from the root).
 */

/*
 * Create a leaf node for each symbol and add it to the priority queue.
 * While there is more than one node in the queue:
 * Remove the two nodes of highest priority (lowest probability) from the queue
 * Create a new internal node with these two nodes as children and with probability equal to the sum of the two nodes' probabilities.
 * Add the new node to the queue.
 * The remaining node is the root node and the tree is complete.
 */

const arr = [('a', 0.2), ('b', 0.15), ('c', 0.1), ('d', 0.3), ('e', 0.25)]

class Tree {
  constructor(data) {
    var node = new Node(null, data)
    this._root = node
    this.children = []
  }
}

class Node {
  constructor(parent, data) {
    this.data = data
    this.Parent = parent
    this.FirstChild = null
    this.LastChild = null
    this.PreviousSibling = null
    this.NextSibling = null
  }

  AddChild(child) {
    child.Parent = this
    child.PreviousSibling = this.LastChild
    if (this.LastChild != null) this.LastChild.NextSibling = child
    this.LastChild = child
    if (this.FirstChild == null) this.FirstChild = child
  }

  GetChildren(node) {
    var result = new Array()
    var child = node.FirstChild
    while (child) {
      result.push(child)
      child = child.NextSibling
    }

    return result
  }
}

let parent = new Node()
let firstChild = new Node(parent, '')
let secondChild = new Node(parent)
let thirdChild = new Node(secondChild)
let fourthChild = new Node(secondChild)
parent.AddChild(firstChild)
parent.AddChild(secondChild)
secondChild.AddChild(thirdChild)
secondChild.AddChild(fourthChild)
let tree = new Tree()

children = parent.GetChildren(parent)

/*Heap.prototype
var Leafify = function (arr) {
  console.log('arr :>> ', arr)
  const sortedArr = arr.sort((a, b) => a - b)
  console.log('sortedArr :>> ', sortedArr)
  console.log('sortedArr[0] :>> ', sortedArr[0])
}

leafify(arr)*/
