import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { reducerTodo } from "./reducer";
import axios from "axios";

// create context
const TodosContext = createContext({});


// create context provider
export const TodosProvider = ({ children }) => {

  const [todos, dispatch] = useReducer(reducerTodo, {
    todosArray: [],
    searchTodo: '',
    isLoading: true
  })

  useEffect(() => {
    const fetchTodos = async () => {
      console.log('fetching todos');
      try {
        const response = await axios.get()
        console.log(response.data)
        dispatch({ type: 'get', payload: response })
        dispatch({ type: 'loading', payload: false })
      }
      catch (err) {
        console.log(err.message)
        dispatch({ type: 'fetchErr' })
      }
    }
    fetchTodos()

  }, [])

  console.log('todos', todos.todosArray);
  console.log('todos isloading', todos.isLoading);

  return <TodosContext.Provider value={{ todos, dispatch }}>{children}</TodosContext.Provider>

}

// create context consumer
export const useTodos = () => useContext(TodosContext)