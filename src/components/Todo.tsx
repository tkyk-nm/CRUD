import React, {useContext} from 'react'
import {DispatchContext} from './App'
import{
    removeTodo,
    toggleTodo
} from '../actions/actions'

import {TodoInterface} from '../interface'

const Todo:React.FC<{todo: TodoInterface, index: number}> = ({todo, index}) => {
    const dispatch = useContext(DispatchContext)

    return(
        <li>
            <p style = {{textDecoration: todo.isComplete ? 'line-through' : 'none'}}>{todo.text}</p>
            <ul className="button-list">
                <li>
                    <button type = "button" onClick={()=> dispatch(toggleTodo(index))}>{todo.isComplete? '未達成':'達成'}</button>
                </li>
                <li>
                    <button type = "button" onClick={()=> dispatch(removeTodo(index))}>削除</button>
                </li>
            </ul>
        </li>
    )

}

export default Todo

