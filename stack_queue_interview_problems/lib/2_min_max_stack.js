// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Modify the definition of the Stack class provided to create an enhanced 
// version of a Stack data structure called MinMaxStack.
//
// A MinMaxStack has all of the same behavior as a Stack, but can also return
// the node with the minimum or maximum value in constant time.
//
// You may alter any of the original Stack's methods, including the 
// constructor.
//  
// Values of nodes of the MinMaxStack are always guaranteed to be numbers.
//
//
// ------------
// Constraints:
// ------------
//
// (1) All MinMaxStack methods must run in constant time, O(1).
//
//
// --------
// Example:
// --------
//
// const minMaxStack = new MinMaxStack();
//
// minMaxStack.push(10);
// minMaxStack.push(12);
// minMaxStack.push(8);
// minMaxStack.push(2);
// minMaxStack.push(20);
//
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 20
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 8
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 10
//
// minMaxStack.pop();
// console.log(minMaxStack.min());   => null
// console.log(minMaxStack.max());   => null
//
//
// -----------
// Let's code!
// -----------
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.curMin = null;
        this.curMax = null;
    }
}

// Refactor the regular Stack below into a MinMaxStack!
class MinMaxStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
        this.mini = null;
        this.maxi = null;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
            this.mini = newNode;
            this.maxi = newNode;
        } else {
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
            if (this.mini.value > val) {
                this.mini = newNode;
            } else if (this.maxi.value < val) {
                this.maxi = newNode;
            }
        }
        newNode.curMax = this.maxi;
        newNode.curMin = this.mini;
        return ++this.length;
    }

    pop() {
        let removedNode = this.top;
        if (this.length === 0) {
            return null;
        } else if (this.length === 1) {
            this.top = null;
            this.bottom = null;
            this.maxi = null;
            this.mini = null;
        } else {
            this.top = removedNode.next;
            this.maxi = this.top.curMax;
            this.mini = this.top.curMin;
        }
        this.length--;
        return removedNode;
    }

    size() {
        return this.length;
    }

    min() {
        return this.mini;
    }

    max() {
        return this.maxi;
    }
}

// Forgetting something down here? 
exports.Node = Node;
exports.MinMaxStack = MinMaxStack;
