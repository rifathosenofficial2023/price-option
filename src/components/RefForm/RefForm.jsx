import { useEffect } from "react";
import { useRef } from "react";


const RefForm = () => {
    const nameRef = useRef(null);
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);   
    }
    useEffect(()=>{
        nameRef.current.focus();

    },[])
    return (
        <div>
               <form  onSubmit={handleSubmit} >
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input  type="text" name="password" />
                <br />
                <input 
                 type="email" name="email" id="" />
                <br />
                <input type="submit" value="submit" /> 
            </form>
        </div>
    );
};

export default RefForm;