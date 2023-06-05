
import { useMemo } from 'react';
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { useTodos } from '../../hooks/TodosContext';
import TodoList from './TodoList';
import axios from 'axios';
import Skeleton from './Skeleton';

function AllTodos() {

  const { todos, searchTodo, setTodos, isLoading } = useTodos()

  const filteredTodos = useMemo(() =>
    !searchTodo ?
      todos :
      todos.filter(todo =>
        todo.title.toLowerCase().includes(searchTodo.toLowerCase()))
    , [todos, searchTodo])


  const handleTick = (id, todoId) => {
    setTodos(prevTodo => prevTodo.map(todo => {

      if (id > 200) {
        return todo.todoId == todoId ?
          { ...todo, completed: !todo.completed } : todo
      }
      return todo.id == id ?
        { ...todo, completed: !todo.completed } : todo
    }))
  }

  const handleDelete = async (id, todoId, title) => {
    if (window.confirm(`Are you sure you want to delete this task?\n ${title} `)) {
      if (id > 200) {
        setTodos(prevTodo => prevTodo.filter(todo => todo.todoId !== todoId))
        return
      }
      try {
        const respone = await axios.delete(`${id}`)
        console.log('removed todo', respone.data);
        setTodos(prevTodo => prevTodo.filter(todo => todo.id !== id))
      } catch (err) {
        console.log(err.message)
      }
    }
  }

  console.log(todos);

  return (
    <>
      <div className="todo-list">
        {
          isLoading ?
            <Skeleton />
            :
            filteredTodos.length === 0 ?
              <p className='empty-msg'>
                {todos.length == 0 ?
                  <>
                    Create your task
                    <Link to='/todos/addtodo' className='btn add-btn'><FiPlus /></Link>
                  </>
                  : 'No task found'
                }
              </p> :
              filteredTodos.map(todo =>
                <TodoList
                  key={todo.id > 200 ? todo.todoId : todo.id}
                  todo={todo}
                  handleDelete={handleDelete}
                  handleTick={handleTick}
                />)
        }
      </div>
    </>

  );
}
export default AllTodos;
