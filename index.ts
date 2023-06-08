import express from 'express'
import * as LinkedList from './linkedlist'

const app = express()
const port = 3000

app.listen(port, () => {       
    console.log( `server started at http://localhost:${port}`)

    const linkedList = new LinkedList.LinkedList<LinkedList.Post>() 

    linkedList.traverse() // []

    linkedList.insertAtEnd({ title: "Post A" })
    linkedList.insertAtEnd({ title: "Post B" })
    linkedList.insertAtEnd({ title: "Post C" })
    linkedList.insertAtEnd({ title: "Post D" })
    linkedList.insertAtEnd({ title: "Post E" })
    linkedList.insertAtEnd({ title: "Post F" })

    console.log(linkedList.traverse())
    console.log(linkedList.search(({ title }) => title === "Post A")) // Node { data: { title: "Post A" }, prev: Node, next: Node};
    // console.log(linkedList.middleNode())
    // console.log(linkedList.middleNodeRecursive(linkedList.getNode(), linkedList.size(), 1))
})
