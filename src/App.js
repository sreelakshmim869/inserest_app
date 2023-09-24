import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';


function App() {
  const [Interest,setinterest] =useState(0)
  const [Principle,setprinciple] =useState(0)
  const [rate,setRate] =useState(0)
  const [year,setyear] =useState(0)
  const[isprincipleValid,setIsprincipleValid]=useState(true)
  const[isRateValid,setIsRateValid]=useState(true)
  const[isYearValid,setIsYearValid]=useState(true)

const validateInput =(e)=>{
  //{key}=object
  const{name,value}=e.target
  //logic to check number validation - regular expression: /^[0-9]+/
  if (!!value.match(/^[0-9]*.?[0-9]+$/)){
    if(name==="principle"){
      setprinciple(value)
      setIsprincipleValid(true)
    }else if(name==="rate"){
      setRate(value)
      setIsRateValid(true)
    }else{
      setyear(value)
      setIsYearValid(true)
    }
 }else{
  if(name==="principle"){
    setprinciple(value)
    setIsprincipleValid(false)
  }else if(name==="rate"){
  setRate(value)
  setIsRateValid(false)
}else{
  setyear(value)
  setIsYearValid(false)
}
 }
}
const handleCalculate=(e)=>{
  e.preventDefault()
  if(!Principle || !rate || !year){
    alert("please fill the form completely!!!")
  }else{
    setinterest(Principle*rate*year/100)
  }
}
console.log(handleCalculate);
const handleReset=(e)=>{
  setinterest(0)
  setprinciple(0)
  setRate(0)
  setyear(0)
  setIsprincipleValid(true)
  setIsRateValid(true)
  setIsYearValid(true)
}

  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
    <div style={{width:'500px'}} className='bg-light p-5 rounded'>
      <h3>Simple Interest Calculator</h3>
      <p>Calculate your simple interest Easily</p>
      <div style={{height:'150px'}} className="interest-card w-100 bg-warning mt-5 d-flex justify-content-center align-items-center flex-column text-light rounded shadow">
        <h1>₹ {''}{Interest}</h1>
        <p className='fw-bolder'>Total Simple Interest</p>
      </div>
      <form className='mt-3'onSubmit={handleCalculate} > 
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic1" label="₹ Principle Amount" variant="outlined" value={Principle || ""} name='principle' onChange={(e)=>validateInput(e)}/>
        </div>
        { !isprincipleValid&&
          <div className="mb-3 text-danger fw-bolder">
            *Invalid User Input
          </div>
        }
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic2" label="Rate of Interest(p.a) %" variant="outlined" value={rate || ""} name='rate' onChange={(e)=>validateInput(e)}/>
        </div>
        { !isRateValid&&
          <div className="mb-3 text-danger fw-bolder">
            *Invalid User Input
          </div>
        }
        <div className='mb-3'>
        <TextField className='w-100' id="outlined-basic3" label="Time period ( Yr )" variant="outlined" value={year || ""} name='Year' onChange={(e)=>validateInput(e)}/>
        </div>
        { !isYearValid&&
          <div className="mb-3 text-danger fw-bolder">
            *Invalid User Input
          </div>
        }
        <Stack className='mt-2' direction={"row"} spacing={2}>
        <Button type='submit' style={{height:'70px',width:'200px'}} variant="contained" disabled={isprincipleValid&&isRateValid&&isYearValid?false:true}>
          Calculate</Button>
        <Button style={{height:'70px',width:'200px'}} onClick={handleReset} variant="outlined">RESET</Button>
        </Stack>
      </form>
      </div>
    </div>
    );
  }

export default App;
