import React, { useState } from "react";
import "./AddContact.css";
const AddContact = props => {
  let [name, setName] = useState("");
  let [surname, setSurname] = useState("");
  let [phone, setPhone] = useState("");
  let [imgUrl, setImgUrl] = useState("");

  function handleClick() {
    if (!name.trim() || !surname.trim() || !phone.trim()) {
      alert("заполните поле!");
      return;
    }
    let newContact = {
      name: name,
      surname: surname,
      phone: phone,
      imgUrl: imgUrl,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setSurname("");
    setPhone("");
    setImgUrl("");
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
      <input
        onChange={e => setImgUrl(e.target.value)}
        type="url"
        placeholder="img url"
        value={imgUrl}
      />
      <button onClick={handleClick}>Add contact</button>
    </div>
  );
};

export default AddContact;
