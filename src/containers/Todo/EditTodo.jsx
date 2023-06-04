import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTodos } from "../../hooks/TodosContext";
import axios from 'axios';

function EditTodo() {

  const { id } = useParams()
  const navigate = useNavigate()
  const { todos, setTodos } = useTodos()

  const [editedTitle, setEditedTitle] = useState('')
  const findTodo = todos.find(prevTodo => {
    const selectedId = prevTodo.id > 200 ? prevTodo.todoId : prevTodo.id
    return selectedId == id
  })

  useEffect(() => {
    setEditedTitle(findTodo.title)
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()

    if (editedTitle) {
      if (findTodo.id <= 200) {
        console.log(findTodo);

        try {
          const response = await axios.put(`/${id}`, {
            ...findTodo,
            title: editedTitle
          })
          console.log('edited todo', response.data)
          setTodos(prevTodo => prevTodo.map(todo => todo.id == id ? response.data : todo))
        } catch (err) {
          console.log(err.message);
        }

      } else {
        setTodos(prevTodo => prevTodo.map(todo => todo.todoId == id ? { ...todo, title: editedTitle } : todo))
      }

      navigate('/todos')
    }
  }

  return (
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
  );
}
export default EditTodo;
