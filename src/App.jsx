
import { Route, Routes } from 'react-router-dom';
import './App.scss';

import {
  Navbar,
  Home,
  Sidebar
} from './components';

import {
  Todos,
  AllTodos,
  AddTodo,
  EditTodo
} from './containers/Todo';
import { TodosProvider } from './hooks/TodosContext';

function App() {

  return (
    <>
      <div className="todosapp">
        <TodosProvider>
          <Navbar />
          <Sidebar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />

              <Route path='todos' element={<Todos />}>
                <Route index element={<AllTodos />} />
                <Route path='addtodo' element={<AddTodo />} />
                <Route path='edittodo/:id' element={<EditTodo />} />
              </Route>

              <Route path='*' element={<h2>Page Not Found</h2>} />
            </Routes>
          </div>
        </TodosProvider>
      </div>
    </>
  );
}

export default App;
