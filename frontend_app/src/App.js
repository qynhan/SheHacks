import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react' 
import axios from 'axios'

function App() {
  const [data,setData]=useState(null);
  const [print,setPrint]=useState(false);
  function getData(val)
  {
    setData(val.target.value)
    setPrint(false)
    // console.warn(val.target.value)
  }

  async function summarize(){
    let response = await axios.post("/summarize", {
      text: data
    })
    console.log(response.data)
  }
  
  return (
    <div className="App"> 
      <h1>SheHacks Project (edit name later) </h1>
      <h3>Input text you want to summarize below:</h3>
      <input type="text" onChange={getData}/>
      {
        print?
        <p>{data}</p>
        :null
      }
      <button onClick={()=>{
        setPrint(true)
        summarize()
      }}>Print Value</button>
    </div>
  );
}

export default App;
