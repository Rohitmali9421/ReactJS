import React, { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(5);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');
  const passref = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (charAllowed) {
      str += '!@#$%^&*()-_=+[]{}|;:\',.<>?/`';
    }
    if (numAllowed) {
      str += '0123456789';
    }
    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  let copypass = useCallback(() => {
    passref.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])


  return (
    <>
      <h1 className="text-4xl text-center font-bold mt-2">Password generator</h1>
      <div className="mt-3 flex flex-wrap   m-auto w-[500px] p-3 rounded-md bg-black">
        <input className="rounded-md p-2 w-3/4" type="text" value={password} readOnly ref={passref} />
        <button onClick={copypass} className="bg-blue-400 ml-4 px-3 rounded-md text-white font-bold">Copy</button>
        <div className='mt-3 '>
          <input className='mx-2 w-24 mt-1'
            onChange={(e) => {
              setLength(e.target.value);
            }}
            id="range"
            type="range"
            min={1}
            max={100}
          />
          <label className=" text-orange-600 mx-4  text-sm" htmlFor="range">
            Length : {length}
          </label>

          <input
            className='mx-1'
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
            type="checkbox"
            name="num"
            id="num"
          />
          <label className=" text-orange-600 text-sm mr-4" htmlFor="num">
            Numbers
          </label>
          <input
            className='mx-1'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            type="checkbox"
            name="char"
            id="char"
          />
          <label className="text-orange-600 text-sm mr-4" htmlFor="char">
            Special Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
