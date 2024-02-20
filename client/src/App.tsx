import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [dataList, setDataList] = useState<{ id: number;  title: string}>()
  const getData = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/post`);
    const data = await res.json();
    setDataList(data[data.length-1]);
  } 
  useEffect(() => {
    getData()
  }, [])

  const createNewTitle = async () => {
    await fetch(`${import.meta.env.VITE_API_URL}/post`, { method: "POST" });
    getData();
  }

  return (
    <>
      <div>
      </div>
      <h1>Docker mysql + React</h1>
      <div className="card">
        <button onClick={createNewTitle} >
          Create New Title
        </button>
        <p>
          title: {dataList?.title}
        </p>
          <p>id: {dataList?.id}</p>
      </div>
    </>
  )
}

export default App
