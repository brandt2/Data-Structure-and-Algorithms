// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
	// TODO: Implement the Node class!
	constructor(val){
		this.value = val;
		this.next = null;
	}
}

class Stack {
	// TODO: Implement the Stack class!
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	push(val) {
		let newNode = new Node(val);
		if (this.length === 0) {
			this.top = newNode.value;
			this.bottom = newNode.value;
		} else {
			let temp = this.top;
			this.top = newNode.value;
			this.top.next = temp;
		}
		this.length++;
		return this.length;
	}

	pop() {
		let removedNode = this.top;
		if (this.length === 0) {
			return null;
		} else if (this.length === 1) {
			this.top = null;
			this.bottom = null;
		} else {
			this.top = removedNode.next;
		}
		this.length--;
		return removedNode;
	}

	size() {
		return this.length;
	}

}

class StackQueue {
	// TODO: Implement the StackQueue class!
	constructor() {
		this.front = null;
		this.back = null;
		this.inStack = new Stack();
		this.outStack = new Stack();
		this.length = 0;
	}

	enqueue(val) {
		let newNode = new Node(val);
		if (this.length === 0) {
			this.front = newNode;
			this.back = newNode;
		} else {
			this.back.next = newNode;
			this.back = newNode;
		}
		this.length++;
		return this.length;
	}

	dequeue() {
		let removedNode = this.front;
		if (this.length === 0) {
			return null;
		} else if (this.length === 1) {
			this.front = null;
			this.back = null;
		} else {
			this.front = removedNode.next;
		}
		this.length--;
		return removedNode;
	}

	size() {
		return this.length;
	}
};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
