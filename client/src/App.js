
import { useEffect, useState } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:4000/api/todo'

function App() {
  const [todoList, setTodoList] = useState(null)

  const fetchData = async () => {
    const res = await axios.get(SERVER_URL)
    setTodoList(res.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onSubmitHandler = async e => {
    e.preventDefault();
    const text = e.target.text.value;
    const done = e.target.done.checked;

    await axios.post(SERVER_URL, {text, done})
    fetchData()
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input type="text" name="text" />
        <input type="checkbox" name="done" />
        <input type="submit" value="추가" />
      </form>
      {todoList?.map(todo => (
        <div key={todo.id} style={ {display: 'flex'} }>
          <div>{todo.id}</div>
          <div>{todo.text}</div>
          <div>{todo.done ? 'Y' : 'N'}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
