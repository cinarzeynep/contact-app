import { useState, useEffect } from 'react';

import "./styles.css";

import List from './List';
import Form from './Form';

const Contacts = () => {
    const [contacts, setContacts] = useState([
        {
            fullname: "Mehmet",
            phone_number: "123123",
        },
        {
            fullname: "Ayse",
            phone_number: "456457",
        },
        {
            fullname: "Nazli",
            phone_number: "987659",
        },
    ]);

    useEffect(() => {}, [contacts]);

    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts