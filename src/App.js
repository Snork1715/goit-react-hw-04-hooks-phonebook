import { useState, useEffect } from "react";
import shortid from "shortid";
import Form from "./components/Form";
import ContactsList from "./components/ContactsList";
import Filter from "./components/Filter";
import "./App.css";

export default function Phonebook() {
  const [contacts, setContacts] = useState([
    {
      id: "id-1",
      name: "Rosie Simpson",
      number: "459-12-56",
    },
    {
      id: "id-2",
      name: "Hermione Kline",
      number: "443-89-12",
    },
    {
      id: "id-3",
      name: "Eden Clements",
      number: "645-17-79",
    },
    {
      id: "id-4",
      name: "Annie Copeland",
      number: "227-91-26",
    },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const localContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(localContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    const dublicateContact = contacts.find(
      (contact) => contact.name === newContact.name
    );

    if (dublicateContact) {
      alert(`Контакт ${dublicateContact.name} уже существует`);
    } else {
      setContacts((prev) => [newContact, ...prev]);
    }
  };

  const filterContacts = (event) => {
    const { value } = event.currentTarget;
    setFilter(value);
  };

  const deleteContact = (contactId) => {
    setContacts((prev) => {
      console.log("prev", prev);
      prev.filter((cont) => cont.id !== contactId);
    });
    // const deletedContacts = contacts.filter(
    //   (contact) => contact.id !== contactId
    // );
    // setContacts(deletedContacts);
  };

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div className="phonebook-warper">
      <div className="phonebook-form">
        <h1>Phonebook</h1>
        <Form onAdd={addContact} />
      </div>
      <div className="phonebook-contacts">
        <h2>Contacts</h2>
        <Filter value={filter} onChange={filterContacts} />
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </div>
  );
}
