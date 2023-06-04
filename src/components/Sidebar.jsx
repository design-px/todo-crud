import { NavLink } from "react-router-dom";
import { HiHome } from 'react-icons/hi'
import { FaClipboardList } from 'react-icons/fa'
import Theme from "./Theme";

function Sidebar() {

  return (
    <div className='sidebar'>
      <div className="content">
        <NavLink to="/"> <HiHome /> Home</NavLink>
        <NavLink to="/todos"><FaClipboardList /> Todos</NavLink>
        <Theme />
      </div>
    </div>
  );
}
export default Sidebar;