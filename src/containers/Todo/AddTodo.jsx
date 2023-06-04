import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTodos } from "../../hooks/TodosContext";

function AddTodo() {

  const { setTodos } = useTodos()

  const [title, setTitle] = useState('')
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()

    if (title) {

      fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
          todoId: Date.now(),
          title: title,
          completed: false
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log('added todo', json)
          setTodos(prevTodos => [json, ...prevTodos])
        })
        .catch((err) => {
          console.log(err.message);
        })
      navigate('/todos')
    }
  }



  return (
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
  );
}
export default AddTodo;
