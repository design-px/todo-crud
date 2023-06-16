import { useTodos } from "../hooks/TodosContext";

export default function Navbar() {
  const { todos: { searchTodo }, dispatch } = useTodos()

  return (
    <>
      <nav className="nav-top">
        <h3>Todo</h3>
        <div className='search-todos'>
          <input
            type="search"
            value={searchTodo}
            onChange={e =>
              dispatch({ type: 'search', payload: e.target.value })}
            placeholder="Search your task" />
          <button className="btn" onClick={() =>
            dispatch({ type: 'search', payload: '' })}>
            &times;
          </button>
        </div>
      </nav>
    </>
  )
}
