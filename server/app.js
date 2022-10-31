const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(express.urlencoded( { extended: true } ))
app.use(cors())

let id = 2
const todoList = [{
    id: 1,
    text: '할일 1',
    done: false
}]
app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/api/todo', (req, res) => {
    return res.json(todoList)
})

app.post('/api/todo', (req, res) => {
    const { text, done } = req.body
    todoList.push({
        id: id++, text, done
    })
    return res.send('sueccess')
})

app.listen(4000, () => {
    console.log('server started!')
})