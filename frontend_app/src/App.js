import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react' 
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';

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
      <div class="row">
        <div class="col-sm">
          <h1>Free Your Eyes!</h1>
          <h4>Harness the power of tool to improve reading efficiency. </h4>
        </div>
        <div class="col-sm">
          <p>Don’t want to read all Terms&Conditions before consent?</p>
          <p>Having dyslexia? Too lazy for reading long paragraph?</p>
          <p>No worries!</p>
          <p>This AI is here to free your eyes! Join the “Free Your Eyes” by SheHacks to generate, categorize and organize text, enjoy your experience.</p>
        </div>
      </div>
      <Form>
        <input type="text" placeholder="Input text you wish to summarize here" onChange={getData}/>
      </Form>
      
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
      
        
    </div>
  );
}

export default App;

