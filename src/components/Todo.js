import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(function(prevState) {
            const updatedTodos = prevState.todos.map(function(todo) {
                if (todo.id == id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }


    render() {
        const that = this
        const todoItems = this.state.todos.map(function(item) {
            return <TodoItem 
                key={item.id} 
                item={item} 
                handleChange={that.handleChange}
            />
        })

        return (
            <div>
                {todoItems}
            </div>
        )
    }
}


export default Todo