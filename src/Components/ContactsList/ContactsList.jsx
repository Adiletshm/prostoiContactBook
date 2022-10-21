import React from "react";

const ContactsList = props => {
  return (
    <div>
      {props.contacts.map((item, index) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.surname}</li>
          <li>{item.phone}</li>
          <li>
            <img src={item.imgUrl} alt="" />
          </li>
          <li>
            <button onClick={() => props.handleDeleteContact(item.id)}>
              Delete
            </button>
            <button onClick={() => props.handleEditIndex(index)}>Edit</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ContactsList;
