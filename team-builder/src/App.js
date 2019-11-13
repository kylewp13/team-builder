import React, { useState } from 'react';
import MemberForm from "./ components/MemberForm"
import Members from "./ components/Members"
import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Kyle Porter",
      email: "kylewp13@yahoo.com",
      role: "WEB25"
    }
  ]);
  

  const addNewMember = person => {
    const newMember = {
      id: Date.now(),
      name: person.name,
      email: person.email,
      role: person.role
    };
    setMembers([...members, newMember]);
  };
  return (
    <div className="App">
      <h1>My Team</h1>
      <MemberForm addNewMember={addNewMember} />
      <Members member={members} />
    </div>
  );
}

export default App;
