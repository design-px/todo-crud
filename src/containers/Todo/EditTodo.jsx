import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTodos } from "../../hooks/TodosContext";
import Skeleton from "./Skeleton";
import axios from "axios";

function EditTodo() {

  const { id } = useParams()
  const navigate = useNavigate()
  const { todos: { todosArray, isLoading }, dispatch } = useTodos()

  const [editedTitle, setEditedTitle] = useState('')
  const findTodo = todosArray.find(prevTodo => {
    const selectedId = prevTodo.id > 200 ? prevTodo.todoId : prevTodo.id
    return selectedId == id
  })

  useEffect(() => {
    setEditedTitle(findTodo.title)
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()

    if (editedTitle) {
      dispatch({ type: 'loading', payload: true })

      const editedTodo = { ...findTodo, title: editedTitle }

      if (findTodo.id <= 200) {
        try {
          const response = await axios.put(`/${id}`, editedTodo)
          console.log('edited todo', response.data)
          dispatch({
            type: 'put',
            payload: {
              editedTodo: response.data,
              id
            }
          })
        } catch (err) {
          console.log(err.message);
        }
      } else {
        dispatch({
          type: 'put',
          payload: {
            editedTodo,
            id
          }
        })
      }

      dispatch({ type: 'loading', payload: false })

      navigate('/todos')
    }
  }

  return (
    <>
      {
        isLoading ?
          <Skeleton />
          :
          <>
            <div className="btn-header">

              <Link to='/todos' className='btn danger'>Cancel</Link>

              <button className="btn success" onClick={handleSubmit}>Save changes</button>

            </div>

            <form className="todo-form" onSubmit={handleSubmit}>

              <div className="label-box">
                <input type="text" id="todo-title" autoFocus value={editedTitle} onChange={e => setEditedTitle(e.target.value)} />
                <label htmlFor="todo-title" className="input-label">Todo Title</label>
              </div>
            </form>
          </>
      }
    </>
  );
}
export default EditTodo;
