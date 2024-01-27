// import { useState } from "react";

// export default function Form(){
//   const [email , setEmail]= useState();
//   const [password , setPassword]= useState();
//   const [submited, setSubmited]= useState(false)
  
  


  
//   const handlechange=()=>{
     
// setEmail("");
// setPassword("");
//   }
//   return(
//     <div className="formInput">
//       <h1>Login Form</h1>
//       <input type="email" placeholder="please fill email" required className="input" value={email} onChange={(e)=> {setEmail(e.target.value);} }/>
//       <input type="password" placeholder="please fill password" required className="password" onChange={(e)=> {setPassword(e.target.value);} }value={password} />
     
//       {submited ?  <h4 className="display">Email : {email} & password : {password} </h4> : null}
//       <button onClick={()=>{
//         setSubmited(true);
//         handlechange();
//       }} required>Submit</button>
//     </div>
//   );
// }

import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submited, setSubmited] = useState(false);

  const [entry,setEntry]=useState([]);


const handlechange=()=>{
  const newEntry={email:email,password:password};
  setEntry([...entry,newEntry]);
  console.log(entry);
  setEmail("");
  setPassword("");
}


 

  return (
    <div className="formInput">
      <h1>Login Form</h1>
      <input
        type="email"
        placeholder="please fill email"
        required
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="please fill password"
        required
        className="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      {submited ? (
        <h4 className="display">Email: {email} & Password: {password}</h4>
      ) : null}

      <button
        onClick={() => {
          setSubmited(true);
    //       setEmail("");
    // setPassword("");
    onclick={handlechange};
        
        }}
      
      >
        Submit
      </button>
    </div>
  );
}
