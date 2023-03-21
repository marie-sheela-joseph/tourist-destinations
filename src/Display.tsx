interface ITouristDestinations {
    touristDestinations:{  id: number;
      name: string;
      country: string;}[]    
    };

const Display:React.FC<ITouristDestinations>=({touristDestinations}):JSX.Element=>{
       
    return (
        <div>
            <ol>
                {touristDestinations.map((t)=><li>
                    {t.name} in {t.country}</li>)}
            </ol>
        </div>
    )
}
export default Display;