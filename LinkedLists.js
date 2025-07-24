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
        let count = 0
        let current = this.head

        while(current !== null) {
            count += 1
            current = current.nextNode
        }
        return count
    }

    getHead() {
        console.log(this.head)
        return this.head
    }

    getTail() {
        let current = this.head
        if (this.head === null) return null;
        while (current.nextNode !== null) {
           current = current.nextNode 
        }
        return current
    }

    at(index) {
        let count = 0
        let current = this.head

        if (index < 0) return null

        while (current !== null) {
            if (count === index) {
                return current
            }
            current = current.nextNode
            count++
        }
        return null
    }

    pop() {
        if(this.head === null) return null
        if(this.head.nextNode === null) {
            this.head = null
            return
        }

        let current = this.head
        while (current.nextNode.nextNode !== null) {
            current = current.nextNode
        }
        current.nextNode = null
    }

    contains(value) {
        let current = this.head
        while (current !== null) {
            if (current.value === value) return true
            current = current.nextNode
        }
        return false
    }

    find(value) {
        let current = this.head
        let index = 0
        while (current !== null) {
            if(current.value === value) {
                return index
            }
            current = current.nextNode
            index++
        }
        return null
    }

    toString() {
        let current = this.head
        let print = ``
        while (current !== null) {
            print += `( ${current.value} ) -> `
            current = current.nextNode
        }
        return print + "null"
    }

    insertAt(value, index) {
        if (index < 0) return;

        if (index === 0) {
        this.prepend(value)
        return
        }

        const previous = this.at(index - 1)
        if (previous === null) return

        const newNode = new Node(value)
        newNode.nextNode = previous.nextNode
        previous.nextNode = newNode
    }

    removeAt(index) {
        if (index < 0) return console.log("there is nothing to remove");
        if (index === 0) {
            this.head = this.head.nextNode 
            return
        }

        const previous = this.at(index - 1)
        if (previous === null) return

        previous.nextNode = previous.nextNode.nextNode
    }

}

   


export {LinkedList}