import {TodoInterface} from '../interface'


export const initTodo = (todos:TodoInterface[])  =>{
    return{
        type: 'INIT_TODO',
        todos
    }
}

export const addTodo = (text:string) => {
    return{
        type: "ADD_TODO",
        text
    }
}

export const removeTodo = (index:number) => {
    return{
        type: "REMOVE_TODO",
        index
    }
}

export const toggleTodo = (index:number) => {
    return{
        type: "TOGGLE_TODO",
        index
    }
}

