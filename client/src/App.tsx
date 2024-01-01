import { useEffect, useState } from "react"
import axios from "axios";

const App = () => {
  const [description, setDescription] = useState('');
  const [user, setUer] = useState([]);

  const createTodo = async () => {
    const body = { description };
    await axios.post(import.meta.env.VITE_PUBLIC_URL, body, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('created successfully');
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const result = await axios.get(import.meta.env.VITE_PUBLIC_URL);
    const data = result.data.allTodos;
    setUer(data);
  }

  return (
    <div>
      <input onChange={e => setDescription(e.target.value)} type="text" placeholder="Description ... " />
      <button onClick={() => createTodo()}>Create Todo</button>
      {user?.map((e: any) => (
        <div key={e.todo_id}>
          {e.description}
        </div>
      ))}
    </div>
  )
}

export default App