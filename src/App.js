import React,{useState} from 'react'
import './App.css'

function App() {
  const numbers = '0123456789'
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const specialCharacters = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é"
  const [pass,setpass] = useState('');
  const [passlen,setpasslen] = useState(8);
  const [upper,setupper] = useState(true);
  const [lower,setlower] = useState(false);
  const [number,setnumber] = useState(false);
  const [symbol,setsymbol] = useState(false);

  const passgen=()=>{
    let password = '';
    let finalpass = '';
    if(upper){
      password = password + upperCaseLetters;
    }
    if(lower){
      password = password + lowerCaseLetters;
    }
    if(number){
      password = password + numbers;
    }
    if(symbol){
      password = password + specialCharacters;
    }
    for(let i=0;i<passlen;i++){
      const index = Math.round(Math.random() * password.length);
      finalpass = finalpass + password.charAt(index);
    }
    setpass(finalpass);
    if(!upper && !lower && !number && !symbol){
      alert("Select An Option");
    }
  }

  const handlecopy=()=>{
    const text = document.createElement('textarea');
    text.innerText = pass;
    document.body.appendChild(text);
    text.select();
    document.execCommand('copy');
    text.remove();
    if(pass){
    alert("Copied To Clipboard");
    }
  }
  return (
    <div className='App'>
      <div className="container">
        <div className="head">
          <h2>Password Generator</h2>
          <div className='body'>
            <h3>{pass}</h3>
            <button className='copybtn' onClick={handlecopy}>
              <i className="far fa-clipboard"></i>
            </button>
          </div>
          <div className="form1">
            <label htmlFor="passlen">Password Length</label>
            <input type="number" name="passlen" id="passlen" max="20" min="8" defaultValue={passlen} onChange={(e)=>setpasslen(e.target.value)}/>
          </div>
          <div className="form1">
            <label htmlFor="uppercase">Include Uppercase Letters</label>
            <input type="checkbox" name="uppcase" id="uppcase" checked={upper} onChange={(e)=>setupper(e.target.checked)}/>
          </div>
          <div className="form1">
            <label htmlFor="lowercase">Include Lowercase Letters</label>
            <input type="checkbox" name="lowercase" id="lowercase" checked={lower} onChange={(e)=>setlower(e.target.checked)} />
          </div>
          <div className="form1">
            <label htmlFor="numbers">Include Numbers</label>
            <input type="checkbox" name="numbers" id="numbers" checked={number} onChange={(e)=>setnumber(e.target.checked)} />
          </div>
          <div className="form1">
            <label htmlFor="symbols">Include Symbols</label>
            <input type="checkbox" name="symbols" id="symbols" checked={symbol} onChange={(e)=>setsymbol(e.target.checked)}/>
          </div>
          <button className="generate" onClick={passgen}>Generate Password</button>
        </div>
      </div>
    </div>
  )
}

export default App
