export interface ActionInterface {
    type: string;
    todos?: TodoInterface[];
    text?: string;
    index?: number;
  }
  
  export interface TodoInterface {
      text: string;
    isComplete: boolean;
  }
  

  export interface InitInterface{
      TODOS: TodoInterface[];
  }