import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

// create context
const TodosContext = createContext({});


// create context provider
export const TodosProvider = ({ children }) => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get()
      .then((response) => {
        console.log(response)
        setTodos(response.data.slice(0, 10))
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