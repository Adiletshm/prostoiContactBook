import React, { useState } from "react";

const Editcontact = props => {
  let [name, setName] = useState(props.editContact.name);
  let [surname, setSurname] = useState(props.editContact.surname);
  let [phone, setPhone] = useState(props.editContact.phone);
  let [imgUrl, setImgUrl] = useState(props.editContact.imgUrl);

  function handleSaveClick() {
    let contact = { ...props.editContact };
    contact.name = name;
    contact.surname = surname;
    contact.phone = phone;
    contact.imgUrl = imgUrl;

    props.handleSaveEditedContact(contact);
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
        type="text"
        placeholder="img Url"
        value={imgUrl}
      />
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
};

export default Editcontact;
