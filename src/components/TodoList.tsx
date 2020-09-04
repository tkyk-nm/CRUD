import React from 'react'
import Todo from './Todo'
import {TodoInterface} from '../interface'

const TodoList:React.FC<{todos: TodoInterface[]}> = ({todos}) => {
    return(
        <ul className="todo-list">
            {todos.map((todo: TodoInterface, index: number)=>(
                <Todo index = {index} key = {index} todo = {todo} />
            )
            )}
        </ul>

    )
}

export default TodoList