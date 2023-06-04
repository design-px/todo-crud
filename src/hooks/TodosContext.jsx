import { createContext, useContext, useEffect, useState } from "react";

// create context
const TodosContext = createContext({});


// create context provider
export const TodosProvider = ({ children }) => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setTodos(json.slice(0, 10))
      })
      .catch((err) => {
        console.log(err.message);
        setTodos([])
      })
  }, [])
  const [searchTodo, setSearchTodo] = useState('')

  return <TodosContext.Provider value={{ todos, setTodos, searchTodo, setSearchTodo }}>{children}</TodosContext.Provider>

}

// create context consumer
export const useTodos = () => useContext(TodosContext)