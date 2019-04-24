// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
			this.value = val;
			this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
			this.head = null;
			this.tail = null;
			this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
			let newNode = new Node(val);
			if (this.length === 0) {
				this.head = newNode;
			} else {
				this.tail.next = newNode;
			}
			this.tail = newNode;
			this.length++;
			return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
			let removedNode = this.tail;
			if (this.length === 0) {
					return undefined;
			} else if (this.length === 1) {
					this.head = null;
					this.tail = null;
					this.length = 0;
			} else {
					let current = this.head;
					while (current.next !== this.tail) {
							current = current.next;
					}
					current.next = null;
					this.tail = current;
					this.length--;
			}
			return removedNode;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
			let newNode = new Node(val);
			let temp = this.head;
			if (this.length === 0) {
				this.head = newNode;
				this.tail = newNode;
			} else if (this.length >= 1) {
				this.head = newNode;
				this.head.next = temp;
			}
			this.length++;
			return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
			let removedNode = this.head;
			if (this.length === 0) {
				return undefined;
			} else if (this.length === 1) {
				this.head = null;
				this.tail = null;
				this.length = 0;
			} else {
				this.head = removedNode.next;
				this.length--;
			}
			return removedNode;
    }

    // TODO: Implement the contains method here
    contains(target) {

    }

    // TODO: Implement the get method here
    get(index) {

    }

    // TODO: Implement the set method here
    set(index, val) {

    }

    // TODO: Implement the insert method here
    insert(index, val) {

    }

    // TODO: Implement the remove method here
    remove(index) {

    }

    // TODO: Implement the size method here
    size() {
			return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
