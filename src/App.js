// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  useEffect(()=>{
    alert("BMI Stand for Body Mass Index");
  },[])
  
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('BMI Chnage');
  }, [message, bmi])


  let calBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    }
    else {
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      let bmiResult = bmiValue.toFixed(2);
      setBmi(bmiResult);


      console.log(bmi);

      if (bmi < 18.5) {
        setMessage('Underweight');
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('Normal weight');
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage('Overweight');
      } else {
        setMessage('Obese');
      }
    }
  };

  let reload = () => {
    window.location.reload();
  }


  return (
  
  <>
  
  <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form>
          <div className='weight'>
            <label>Weight</label>
            <input type="text" placeholder="Enter Weight Value (kg)" value={weight} onChange={(e) => setWeight(e.target.value)}></input>
          </div>
          <div className='height'>
            <label>Height</label>
            <input type="text" placeholder="Enter Height Value (cm)" value={height} onChange={(e) => setHeight(e.target.value)} ></input>
          </div>
          <div className='button'>
            <div className='btn1'></div>
            <div className='btn2'>
              <button  onClick={calBmi}>Submit</button>
              <button  onClick={reload} >Reload</button>
            </div>
          </div>
          <div className='center'>
            <h4>Your BMI is: {bmi} </h4>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  </>
    
  );
}

export default App;


/*
bellow 18.5   under 
18.5- 24.9    healthy
25-29.9       overweight
30 above      obese


*/