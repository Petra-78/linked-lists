import { Node } from "./Node.js";

class LinkedList {

    constructor() {
        this.head = null;
    }    

    append(value) {
        const newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode
            return
        }
        let current = this.head
        while (current.nextNode !== null) {
            current = current.nextNode
        }
        current.nextNode = newNode
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.nextNode = this.head
        this.head = newNode
    }

    size() {
        let count = 1
        let current = this.head

        if(this.head === null) {
            count = 0
        }

        else {
            while(current.nextNode !== null) {
                count += 1
                current = current.nextNode
            }
        }
        return count
    }

    getHead() {
        console.log(this.head)
        return this.head
    }

    getTail() {
        let current = this.head
        while (current.nextNode !== null) {
           current = current.nextNode 
        }
        console.log(current)
    }

    at(index) {
        let count = 1
        let current = this.head

        if (index <= 0) return null

        while (current !== null) {
            if (count === index) {
                console.log(current)
                return current
            }
            current = current.nextNode
            count++
        }
    }
}
   


export {LinkedList}