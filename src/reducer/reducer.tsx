import React from 'react'

import {TodoInterface, ActionInterface} from '../interface'

export const reducer = (todos: TodoInterface[], action: ActionInterface) => {
  switch (action.type) {
    case "INIT_TODO":
			if(action.todos !== undefined){
			return action.todos;
			}
			return [];

    case "ADD_TODO":
		if(action.text !== undefined){	
		return [
        ...todos,
        {
          text: action.text,
          isComplete: false,
        },
			];
		}
		return [...todos];

    case "REMOVE_TODO":
      const newTodos = [];
      for (let i = 0; i < todos.length; i++) {
        if (i !== action.index) {
          newTodos.push(todos[i]);
        }
      }
      return newTodos;

    case "TOGGLE_TODO":
      return todos.map((todo: TodoInterface, index: number) => {
        if (action.index === index) {
          return Object.assign({}, todo, {
            isComplete: !todo.isComplete,
          });
        }
        return todo;
      });
    default:
      return [...todos];
  }
};
