import { useEffect, useState } from "react"
import axios from "axios";

const App = () => {
  const [description, setDescription] = useState('');
  const [user, setUer] = useState([]);
  const baseURL = import.meta.env.VITE_PUBLIC_URL + 'todos'

  const createTodo = async () => {
    const body = { description };
    await axios.post(baseURL, body, {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log('created todo successfully');
    fetchData();
  }

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const result = await axios.get(baseURL);
    const data = result.data.allTodos;
    setUer(data);
  }

  const createImage = async () => {
    const res = await axios.post(`${import.meta.env.VITE_PUBLIC_URL}images`, {
      prompt_user: 'Ironman is eating',
      amount: 1
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = res.data;
    console.log(data);
    console.log('created image successfully');
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

      <button onClick={() => createImage()}>Create Image</button>
    </div>
  )
}

export default App