import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

// create context
const TodosContext = createContext({});


// create context provider
export const TodosProvider = ({ children }) => {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get()
        console.log(response)
        setTodos(response.data.slice(0, 10))
      }
      catch {
        console.log(err.message);
        setTodos([])
      }
    }

    fetchTodos()
  }, [])
  const [searchTodo, setSearchTodo] = useState('')

  return <TodosContext.Provider value={{ todos, setTodos, searchTodo, setSearchTodo }}>{children}</TodosContext.Provider>

}

// create context consumer
export const useTodos = () => useContext(TodosContext)