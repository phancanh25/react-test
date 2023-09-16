import React, { useState } from "react";
import { Todo } from "./Todo";

export const TodoWrapper = () => {
  const contactInit = [
    { id: 1, name: "contact 1", age: 20, designation: "Software Engineer" },
    { id: 2, name: "contact 2", age: 20, designation: "Software Engineer" },
    { id: 3, name: "contact 3", age: 20, designation: "Software Engineer" },
    { id: 4, name: "contact 4", age: 20, designation: "Software Engineer" },
  ];
  const [contacts, setContacts] = React.useState<
    { id: number; name: string; age: number; designation: string }[] | undefined
  >(contactInit);

  const [text, setText] = useState("");

  const handleOnClick = (e: any) => {
    e.preventDefault();
    const findUsers =
      contactInit && contactInit?.length > 0
        ? contactInit?.filter((c) => c?.name === text)
        : undefined;
    setContacts(findUsers);
  };

  return (
    <div className="ContactWrapper">
      <h1>Contact List</h1>
      <form onSubmit={handleOnClick} className="ContactForm">
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            setContacts(contacts);
          }}
          className="contact-input"
          placeholder="Search..."
        />
        <button type="submit" className="contact-btn">
          SEARCH
        </button>
      </form>
      {contacts &&
        contacts?.length > 0 &&
        contacts?.map((contact) => (
          <Todo
            key={contact.id}
            name={contact.name}
            age={contact.age}
            designation={contact.designation}
          />
        ))}
    </div>
  );
};
