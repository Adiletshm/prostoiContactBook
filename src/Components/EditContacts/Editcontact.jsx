import React, { useState } from "react";

const Editcontact = props => {
  let [name, setName] = useState(props.editContact.name);
  let [surname, setSurname] = useState(props.editContact.surname);
  let [phone, setPhone] = useState(props.editContact.phone);

  function handleSaveClick() {
    let contact = { ...props.editContact };
    contact.name = name;
    contact.surname = surname;
    contact.phone = phone;

    props.handleSaveEditedContact(contact);
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
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
};

export default Editcontact;