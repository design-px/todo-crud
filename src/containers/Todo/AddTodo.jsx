import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTodos } from "../../hooks/TodosContext";
import Skeleton from "./Skeleton";
import axios from "axios";

function AddTodo() {

  const { todos: { isLoading }, dispatch } = useTodos()

  const [title, setTitle] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    if (title) {
      const newTodo = {
        todoId: Date.now(),
        title: title,
        completed: false
      }

      try {
        dispatch({ type: 'loading', payload: true })
        const response = await axios.post('', newTodo)
        console.log('added todo', response.data)
        dispatch({ type: 'post', payload: response })
        dispatch({ type: 'loading', payload: false })

      } catch (err) {
        console.log(err.message);
      }

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

              <Link to='/todos' className='btn danger'>Back</Link>

              <button className="btn success" onClick={handleSubmit
              }>Save</button>

            </div>

            <form className="todo-form" onSubmit={handleSubmit}>

              <div className="label-box">
                <input type="text" id="todo-title" autoFocus value={title} onChange={e => setTitle(e.target.value)} maxLength={20} />
                <label htmlFor="todo-title" className="input-label">Todo Title</label>
              </div>

            </form>
          </>
      }

    </>
  );
}
export default AddTodo;
