import { useState } from "react";


const StatefulForm = () => {
    const [email, setEmail] = useState(null);
    const handleSubmit = e =>{
        e.preventDefault();
    }
    const handleEmailChange = e =>{
        e.preventDefault();
        console.log(e.target.value);
        
      setEmail(e.target.value)
        
    }
    
    
    return (
        <div>
              <form  onSubmit={handleSubmit} >
                <input  type="text" name="name" />
                <br />
                <input  type="text" name="password" />
                <br />
                <input 
                onChange={handleEmailChange} type="email" name="email" id="" />
                <br />
                <input type="submit" value="submit" /> 
            </form>
        </div>
    );
};

export default StatefulForm;