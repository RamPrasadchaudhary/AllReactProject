import { useState, useCallback, useEffect ,useRef } from "react";



function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  //useref hook
const passwordRef=useRef(null)
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*-+/()[]{}`";
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
      setPassword(pass);
    }
  }, [length, numAllow, charAllow, setPassword]);

  const  copyClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passGenerator();
  }, [length, numAllow, charAllow, passGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-4 text-orange-500 bg-gray-700 ">
        Password Generator
        <div className=" className flex shadow rounded-lg overflow-hidden mb-1">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 m-5 "
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyClipboard} className="outline-none bg-blue-600 text-white px-3 m-5 shrink-0 cursor-pointer">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 py-4">
          <div className="flex items-center gap-x-1 ">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer  "
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label> Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
