import React from 'react';
import './App.css';
import Data from "./Profile/Profile component";

function App() {
  
  const handleName=e=>{alert (e)}

  return (
    <div className="App">
      <Data
       handleName = {handleName}
       fullName="Lazghab Rayen"
       bio="23 old boy from Tunisia"
       profession="student"
       >
        <div> <img src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-homme-photo-de-profil-avatar-avatar-de-l-utilisateur-par-d%C3%A9faut-invit%C3%A9-avatar-simplement-la-t%C3%AAte-humain.jpg" alt="" /></div>
       </Data>
   </div>
  );
};

export default App;
