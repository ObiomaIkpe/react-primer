import { useState, useEffect } from "react";
import Form from "./Form";


function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchItems =  async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const items = await response.json();
        setData(items)
      } catch (err) {
          console.log(err)
      }

    }
    fetchItems();
  }, [reqType])

  return (
    <div className="App">
        <Form 
        reqType={reqType}
        setReqType={setReqType}/>
        
    </div>
  );
}

export default App;