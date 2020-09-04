import React, {createContext} from 'react';
import {useRender} from '../hooks/render';
import Form from './Form';
import TodoList from './TodoList';

import {TodoInterface, ActionInterface} from '../interface'

export const DispatchContext = createContext({} as React.Dispatch<ActionInterface>);

const App: React.FC = () => {
    const [todos, dispatch] = useRender('https://jsondata.okiba.me/v1/json/8EFbJ200902095302');

    return(
        <div className = "todo-wrap">
            <DispatchContext.Provider value = {dispatch}>
                <TodoList todos = {todos}/>
                <Form/>
            </DispatchContext.Provider>
        </div>
    )

}

export default App;


