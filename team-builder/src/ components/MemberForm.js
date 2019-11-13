import React, { useState } from "react";

const MemberForm = props => {
  const [newMember, setNewMember] = useState({ name: "", email: "", role: ""});
  
  const handleChanges = e => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
    console.log(e.target.name);
  };
  
  const submitForm = event => {
    event.preventDefault();
    props.addNewMember(newMember);
    setNewMember({ name: "", email: "", role: ""});
  };
  return (
    <form onSubmit={submitForm}>
    <label htmlFor="name">Name</label>
    <input
    required
    id="title"
    type="text"
    name="name"
    onChange={handleChanges}
    value={newMember.name}
    />
    <label htmlFor="email">Email</label>
    <input
    id="note"
    type="email"
    name="email"
    value={newMember.email}
    onChange={handleChanges}
    />
    <label htmlFor="role">Role</label>
    <input
    required
    id="role"
    type="text"
    name="role"
    value={newMember.role}
    onChange={handleChanges}
    />
    <button type="submit">Add Member</button>
    </form>
    );
  };
  
  export default MemberForm;
  