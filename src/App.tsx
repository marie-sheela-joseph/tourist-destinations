import React, { useState } from 'react';
import './App.css';
import Display from './Display';

const initialState=[{id:1,name:'Paris',country:'France'},
  {id:2,name:'London',country:'United Kingdom'},
  {id:3,name:'Rome',country:'Italy'},
  ]

interface ITouristDestinations {
  touristDestinations:{  id: number;
    name: string;
    country: string;}[]    
  };

function App() {
  const [touristDestinations,setTouristDestinations]=useState<ITouristDestinations["touristDestinations"]>(initialState);
  function deleteTouristDestination(id:number){
    setTouristDestinations((prevState)=>prevState.filter((t)=>t.id!==id))
  }
  return (
    <div>      
      <Display touristDestinations={touristDestinations} deleteTouristDestination={deleteTouristDestination}/>
    </div>
  );
}
export default App;
