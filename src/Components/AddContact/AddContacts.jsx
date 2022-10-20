import React, { useState } from "react";

const AddContact = props => {
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [phone, setPhone] = useState("");

  function handleClick() {
    let newContact = {
      name,
      surname,
      phone,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setSurname("");
    setPhone("");
  }

  return (
    <div>
      <input
        onChange={e => setName(e.target.value)}
        type="text"
        placeholder="name"
        value={name}
      />
      <input
        onChange={e => setSurname(e.target.value)}
        type="text"
        placeholder="surname"
        value={surname}
      />
      <input
        onChange={e => setPhone(e.target.value)}
        type="text"
        placeholder="phone"
        value={phone}
      />
      <button onClick={handleClick}>Add contact</button>
    </div>
  );
};

export default AddContact;
