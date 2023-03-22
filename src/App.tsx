import React, { useState } from 'react';
import Add from './Add';
import './App.css';
import Display from './Display';
import Edit from './Edit';

const initialState=[{id:1,name:'Paris',country:'France'},
  {id:2,name:'London',country:'United Kingdom'},
  {id:3,name:'Rome',country:'Italy'},
  ]

interface ITouristDestinations {
  touristDestinations:{  id: number,
    name: string,
    country: string}[]    
  };
  export interface ITouristDestination{
    id: number,
    name: string,
    country: string
  }

function App() {
  const [touristDestinations,setTouristDestinations]=useState<ITouristDestinations["touristDestinations"]>(initialState);
  const [showEdit,setShowEdit]=useState(false);
  const [editId,setEditId]=useState(0);
  function deleteTouristDestination(id:number){
    setTouristDestinations((prevState)=>prevState.filter((t)=>t.id!==id));
  }
  function addTouristDestination(newTouristDestination:{name:string,country:string}):void{    
    setTouristDestinations((prevState)=>{return [...prevState,{...newTouristDestination, id:prevState.length+1}]});
  } 
  function editTouristDestination(newTouristDestination:ITouristDestination){
    setTouristDestinations(touristDestinations.map((t)=>t.id===editId?newTouristDestination:t))
    setShowEdit(false)
  }
  function findTouristDestination():ITouristDestination{
    return touristDestinations.find((t)=>t.id===editId)!
  }
  return (
    <div>      
      <Add addTouristDestination={addTouristDestination}/>
      {showEdit && <Edit touristDestination={findTouristDestination()} editTouristDestination={editTouristDestination}/>}
      <Display touristDestinations={touristDestinations} deleteTouristDestination={deleteTouristDestination} setShowEdit={setShowEdit} setEditId={setEditId}/>
    </div>
  );
}
export default App;
