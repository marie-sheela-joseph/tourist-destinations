import { useState } from "react";

interface ITouristDestination{
    id:number,
    name:string,
    country:string
}
interface IEdit{
    touristDestination:ITouristDestination,
    editTouristDestination:(newTouristDestination:ITouristDestination)=>void
}

const Edit:React.FC<IEdit>=({touristDestination,editTouristDestination})=>{
    const [state,setState]=useState(touristDestination)
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        setState({...state,[e.target.name]:e.target.value})
    }
return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            editTouristDestination(state)
        }}>
            <input type={"text"}
            name="name"
            value={state.name}
            onChange={(e)=>handleChange(e)}/>
            <input type={"text"}
            name="country"
            value={state.country}
            onChange={(e)=>handleChange(e)}/>
            <button>Submit</button>
        </form>
    </div>
);
}
export default Edit;