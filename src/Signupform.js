import React, { useState } from 'react'
import validation from './Validation'
export default function Signupform() {
    const [value,setValues] =useState({
        email: "",
        name: "",
        password: "",
        confirm_Password: "",
    })
    const [errors,setErrors] = useState({})
    const handleInput =(e)=>{
        e.preventDefault();
        // console.log(e.target.value)
        setValues({...value,[e.target.name]:[e.target.value]})
    }
    function handleValidation(e){
        e.preventDefault();
        setErrors(validation(value))
    }
  return (
    <div className="signup-container">
     <div className="signup-form">
        <h3>Sign-Up Form Validation</h3>
        <div className="form">
            <form onSubmit={handleValidation}>
                <label>Email :</label>
                <input type="email" placeholder="Enter  Your Email" name="email" onChange={handleInput}/>
                {errors.email && <p style={{color:"red"}}>{errors.email}</p>}

                <label>Name :</label>
                <input type="text" placeholder="Enter Your Name" name="name" onChange={handleInput}/>
                {errors.name && <p style={{color:"red"}}>{errors.name}</p>}

                <label>Password :</label>
                <input type="password" placeholder="Enter Password" name="password" onChange={handleInput} />
                {errors.password && <p style={{color:"red"}}>{errors.password}</p>}

                <label>Confirm Password :</label>
                <input type="text" placeholder="Enter Confirm Password" name="confirm_Password"onChange={handleInput}/>
                {errors.confirm_Password && <p style={{color:"red"}}>{errors.confirm_Password}</p>}
                <div><button>SignUp</button></div>
            </form>
        </div>
     </div>
    </div>
  )
}
