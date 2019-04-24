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
			let current = this.head;
			while (current !== null) {
				if (current.value === target) {
					return true;
				}
				current = current.next;
			}
			return false;
    }

    // TODO: Implement the get method here
    get(index) {
			let i = 0;
			for (let current = this.head; current !== null; current = current.next) {
				if (i === index) {
					return current;
				}
				i++;
			}
			return null;
    }

    // TODO: Implement the set method here
    set(index, val) {
			let i = 0;
			for (let current = this.head; current !== null; current = current.next) {
				if (i === index) {
					current.value = val;
					return true;
				}
				i++;
			}
			return false;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
			let i = 0;
			if (this.length - 1 < index) {
				return false;
			}
			if (index === 0) {
				this.addToHead(val);
				return true;
			}
			for (let current = this.head; current !== null; current = current.next) {
				if (i === index - 1) {
					let temp = current.next;
					let newNode = new Node(val);
					current.next = newNode;
					newNode.next = temp;
					this.length++;
					return true;
				}
				i++;
			}
			return false;
    }

    // TODO: Implement the remove method here
    remove(index) {
			let i = 0;
			if (this.length - 1 < index) {
				return undefined;
			}
			if (index === 0) {
				return this.removeHead();
			}
			for (let current = this.head; current !== null; current = current.next) {
				if (i === index - 1){
					let temp = current.next;
					current.next = current.next.next;
					this.length--;
					return temp;
				}
				i++;
			}
			return undefined;
    }

    // TODO: Implement the size method here
    size() {
			return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
