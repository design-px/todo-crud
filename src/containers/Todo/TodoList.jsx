import { BsCircle, BsCheckCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

function TodoList({ todo, handleDelete, handleTick }) {

  const todoId = todo.id > 200 ? todo.todoId : todo.id

  return (
    <>
      <div className="todo">
        <button onClick={() => handleTick(todo.id, todo.todoId)} className='tick-btn'>
          {todo.completed ? <BsCheckCircleFill /> :
            <BsCircle />}
        </button>
        <p>{todo.title}</p>
        <button className="view-btn"><Link to={`edittodo/${todoId}`}>Edit</Link></button>
        <button className="view-btn" onClick={() => handleDelete(todo.id, todo.todoId, todo.title)}>Delete</button>

      </div>
    </>
  );
}
export default TodoList;
