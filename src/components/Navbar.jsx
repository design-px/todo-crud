import { useTodos } from "../hooks/TodosContext";

export default function Navbar() {
  const { searchTodo, setSearchTodo } = useTodos()

  return (
    <>
      <nav className="nav-top">
        <h3>Todo</h3>
        <div className='search-todos'>
          <input type="search" value={searchTodo} onChange={e => setSearchTodo(e.target.value)} placeholder="Search your task" />
          <button className="btn" onClick={() => setSearchTodo('')}>
            &times;
          </button>
        </div>
      </nav>
    </>
  )
}
