import React from "react";
import { ContactPicker } from '../../components/contactPicker/ContactPicker'

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts?.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input 
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Appointment Title" 
          type="text" 
          name="title" 
          value={title}
        />
      </label>
      <br />
      <label>
        <input 
          onChange={(e) => setDate(e.target.value)}
          required
          type="date" 
          name="date" 
          value={date}
          min= {getTodayString()}
        />
      </label>
      <br />
      <label>
        <input 
          onChange={(e) => setTime(e.target.value)} 
          type="time" 
          name="time"
          value={time}
        />
      </label>
      <br />
      <label>
      <ContactPicker 
        onChange={(e) => setContact(e.target.value)} 
        contacts={getContactNames()}
        name="contact"
        value={contact}
        placeholder="Appointment With" 
      />
      </label>
      <br />
        <input 
          type="submit" 
          value="Add Appointment"
          />
    </form>
  );
};
