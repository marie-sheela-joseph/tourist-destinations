import { useState } from "react";
interface touristDestination{            
        name: string,
        country: string
}
interface IAdd{
    addTouristDestination:(newTouristDestination:touristDestination)=>void
}

const Add:React.FC<IAdd>=({addTouristDestination})=>{
    const [state,setState]=useState({name:'',country:''});
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    setState((prevState)=>{return {...prevState,[e.target.name]:e.target.value}})
    }
return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            addTouristDestination(state)
            setState({name:'',country:''})}
            }>
            <input type={"text"}
            name={"name"}
            value={state.name}
            onChange={(e)=>handleChange(e)}/>
             <input type={"text"}
            name={"country"}
            value={state.country}
            onChange={(e)=>handleChange(e)}/>
            <button>submit</button>
        </form>
    </div>
);
}
export default Add;