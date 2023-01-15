import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react' 
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data,setData]=useState(null);
  const [print,setPrint]=useState(false);
  const [output,setOutput]=useState(null);

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
    setOutput(response.data)
    // console.log(response.data)
  }
  
  return (
    <div className="App" style={{backgroundColor: '#917ef3', fontFamily: 'PlayfairWght'}}> 
      <h1>Free Your Eyes!</h1>
      <h3>Input text you want to summarize below:</h3>
      <input type="text" onChange={getData}/>
      {
        print?
        <p>{data}</p>
        :null
      }

      <p>{output}</p>

      <Button variant="primary" onClick={()=>{
        setPrint(true)
        summarize()
      }}>Print Value</Button>{' '}

      <p>Harness the power of tool to improve reading efficiency. Don’t want to read all Terms&Conditions before consent? Having dyslexia? Too lazy for reading long paragraph? No worries! This AI is here to free your eyes! Join the “Free Your Eyes” by SheHacks to generate, categorize and organize text, enjoy your experience.</p>

    </div>
  );
}

export default App;

