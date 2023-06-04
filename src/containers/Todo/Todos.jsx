
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'

function Todos() {
  return (
    <div className="todos">
      <header>
        <div className='todos-header'>
          <NavLink to="/todos" end >
            <h3 className='title'>Todos</h3>
          </NavLink>

          <Link to='/todos/addtodo' className='btn add-btn'><FiPlus /></Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
export default Todos;
