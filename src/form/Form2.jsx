import { useEffect, useState } from "react";

export default function Form(){
  const [email , setEmail]= useState();
  const [password , setPassword]= useState();
  const [submited, setSubmited]= useState(false);
  
  const handlechange=()=>{
   setSubmited(true);
   
   
  }



  
  
  return(
    <div className="formInput">
      <h1>Login Form</h1>
      <input type="email" placeholder="please fill email" required className="input" value={email} onChange={(e)=> {setEmail(e.target.value);} }/>
      <input type="password" placeholder="please fill password" className="password" 
      onChange={(e)=> {setPassword(e.target.value),
        setBtn(true);
      } }value={password} />
     
      {submited ?  <h4 className="display">Email : {email} & password : {password}</h4>: null}

      <button onClick={()=>{
        handlechange();
  //       setEmail("");
  //  setPassword("");
        
       
      }}>Submit</button>

      
      
    </div>
    
  );
}