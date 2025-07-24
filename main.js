import { LinkedList } from "./LinkedLists.js"
import { Node } from "./Node.js"



const list = new LinkedList()

list.append("five")
list.append("four")
list.append("three")
list.prepend("one")

list.size()

console.log(list)