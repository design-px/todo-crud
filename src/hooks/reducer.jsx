
export const reducerTodo = (state, action) => {

  switch (action.type) {
    case 'get':
      return { ...state, todosArray: fetchTodo(action.payload) }
    case 'fetchErr':
      return { ...state, todosArray: [] }
    case 'post':
      return post(state, action.payload)
    case 'put':
      return put(state, action.payload)
    case 'delete':
      return del(state, action.payload)
    case 'tick':
      return tick(state, action.payload)
    case 'loading':
      return loading(state, action.payload)
    case 'search':
      return searchTodo(state, action.payload)
    default:
      return state
  }
}

const fetchTodo = (response) => {
  return response.data.slice(0, 10)
}

const post = (state, response) => {
  return {
    ...state,
    todosArray: [response.data, ...state.todosArray]
  }
}


const loading = (state, isLoading) => {
  return {
    ...state,
    isLoading: isLoading
  }
}


const tick = (state, { id, todoId }) => {
  return {
    ...state,
    todosArray: state.todosArray.map(todo => {

      if (id > 200) {
        return todo.todoId == todoId ?
          { ...todo, completed: !todo.completed } : todo
      }
      return todo.id == id ?
        { ...todo, completed: !todo.completed } : todo
    })
  }
}

const put = (state, { editedTodo, id }) => {
  return {
    ...state,
    todosArray: state.todosArray.map(todo =>
      (todo.id > 200 ? todo.todoId : todo.id) == id ? editedTodo : todo)
  }
}


const del = (state, todoId) => {
  return {
    ...state,
    todosArray: state.todosArray.filter(todo =>
      (todo.id > 200 ? todo.todoId : todo.id) !== todoId)
  }
}

const searchTodo = (state, text) => {
  return {
    ...state,
    searchTodo: text
  }
}