
import { useMemo } from 'react';
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { useTodos } from '../../hooks/TodosContext';
import TodoList from './TodoList';
import Skeleton from './Skeleton';
import axios from 'axios';

function AllTodos() {

  const { todos, todos: { todosArray, searchTodo, isLoading }, dispatch } = useTodos()
  console.log('alltodos', todos, todosArray);
  const filteredTodos = useMemo(() =>
    !searchTodo ?
      todosArray :
      todosArray.filter(todo =>
        todo.title.toLowerCase().includes(searchTodo.toLowerCase()))
    , [todosArray, searchTodo])


  const handleTick = (id, todoId) => {
    dispatch({
      type: 'tick',
      payload: { id, todoId }
    })
  }

  const handleDelete = async (id, todoId, title) => {
    if (window.confirm(`Are you sure you want to delete this task?\n ${title} `)) {

      if (id > 200) {
        dispatch({ type: 'delete', payload: todoId })
        return
      }

      try {
        const respone = await axios.delete(`${id}`)
        console.log('removed todo', respone.data)
        dispatch({ type: 'delete', payload: id })

      } catch (err) {
        console.log(err.message)
      }
    }
  }

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
