interface IDisplay {
    touristDestinations:{  id: number;
      name: string;
      country: string;}[],
      deleteTouristDestination:(id:number)=>void
    };

const Display:React.FC<IDisplay>=({touristDestinations,deleteTouristDestination}):JSX.Element=>{
       
    return (
        <div>
            <ol>
                {touristDestinations.map((t)=><li>
                    {t.name} in {t.country}
                    <button onClick={()=>deleteTouristDestination(t.id)}>Delete</button>
                    </li>)}
            </ol>
        </div>
    )
}
export default Display;