interface IDisplay {
    touristDestinations:{  id: number;
      name: string;
      country: string;}[],
      deleteTouristDestination:(id:number)=>void,
      setShowEdit:(s:boolean)=>void,
      setEditId:(id:number)=>void
    };

const Display:React.FC<IDisplay>=({touristDestinations,deleteTouristDestination,setShowEdit,setEditId}):JSX.Element=>{       
    return (
        <div>
            <ol>
                {touristDestinations.map((t)=><li key={t.id}>
                    {t.name} in {t.country}
                    <button onClick={()=>deleteTouristDestination(t.id)}>Delete</button>
                    <button onClick={()=>{
                        setEditId(t.id)
                        setShowEdit(true)                        
                        }}>Edit</button>
                    </li>)}
            </ol>
        </div>
    )
}
export default Display;