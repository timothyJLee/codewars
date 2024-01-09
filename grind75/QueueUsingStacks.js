/*
232. Implement Queue using Stacks
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:
void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.

Notes:
You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.

Example 1:
Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false

Constraints:
1 <= x <= 9
At most 100 calls will be made to push, pop, peek, and empty.
All the calls to pop and peek are valid.

Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.
*/

const MyQueue = function() {
    this.readStack = [];
    this.writeStack = [];
    this.peekNum = "";
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  // check if write stack is queued if not queue it
    if (this.readStack.length > 0) this.flipStacks();
    this.writeStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  // check if read stack is queued if not queue it
    if (this.writeStack.length > 0) this.flipStacks();
    return this.readStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    this.flipStacks();
    return this.peekNum;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return (this.readStack.length !== 0 || this.writeStack.length !== 0) ? false : true;
};

MyQueue.prototype.flipStacks = function () {
    if(this.writeStack.length > 0) {
        while (this.writeStack.length > 1) {
            this.readStack.push(this.writeStack.pop());
        }
        this.peekNum = this.writeStack.pop();
        this.readStack.push(this.peekNum);
    }
    else {
        this.peekNum = this.readStack.pop();
        this.writeStack.push(this.peekNum);
        while (this.readStack.length > 0) {
            this.writeStack.push(this.readStack.pop());
        }
    }
};

const myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false