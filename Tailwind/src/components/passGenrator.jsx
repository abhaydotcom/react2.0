import { useCallback,useState,useEffect,useRef} from "react"

function PasswordGenrator() {


    const[password,setpassword]=useState("");
    const[numAllowed,setNumAllowed]=useState(false);
    const[charAllowed,setCharAllowed]=useState(false);
    const[length,setLength]=useState(4);

    const passGenrator=useCallback( ()=>{

        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        
        if(numAllowed)str+="0123456789"
        if(charAllowed) str+="!@#$%^&*()_+{}:";'><,.?/|\~`'

        for (let i = 1; i <= length; i++) {
          let char = Math.floor(Math.random() * str.length + 1);
          pass += str.charAt(char);
        }

        setpassword(pass);
        
    } ,[length,numAllowed,charAllowed,setpassword])

    const passwordRef=useRef(null);

    const copyToClip=useCallback(()=>{
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password)
    },[password])

    useEffect( ()=>{
        passGenrator()
    },[length,numAllowed,charAllowed,passGenrator] )

 


  return (
    <div className='h-screen w-full flex-col flex justify-center items-center bg-gray-800  '>   
<h1 className=' -mt-60 mb-12  text-center font-semibold text-xl font-serif p-3 text-orange-500   '>Password Generator</h1>

    <div
    className='bg-blue-300     rounded-lg   '>

        <div className='m-2 p-2 '>
            <input className='mt-2 w-72 rounded-md p-0.5' type="text" readOnly  value={password} ref={passwordRef} placeholder="password"/>
            <button className=' border  rounded-md text-sm p-1 ml-4 font-serif bg-green-300 hover:bg-green-600 border-black'
            
               onClick={copyToClip}    >Copy</button>
        </div>

        <div className='text-sm font-mono p-1 ml-3  '>
            <input type="range" min={4} max={30} value={length}      onChange={(e)=>{setLength(e.target.value)}}  />
            <span className='mx-2 font-sans  '>length:{length}</span>
            <label htmlFor="check"  className='mx-2'    >Number
            <input type="checkbox" id='check' defaultChecked={numAllowed} onChange={()=>{setNumAllowed((w)=>!w)}} />
            </label>


            <label htmlFor="char">
                Character
            <input type="checkbox" id="char" defaultChecked={charAllowed} onChange={()=>{setCharAllowed((w)=>!w)}} />
            </label>
        </div>

    </div>

    </div>

  )
}

export default PasswordGenrator