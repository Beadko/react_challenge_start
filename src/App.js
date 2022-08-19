import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useState } from 'react';

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  let [contacts, setContacts] = useState([]);
  let [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  useEffect = () => {
    setContacts(contacts => [...contacts, newContacts]);
    setAAppointments(appointments=> [...appointments, newAppointments]);
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {this.props.CONTACTS}
            <ContactsPage />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {this.props.APPOINTMENTS}
            <AppointmentsPage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
