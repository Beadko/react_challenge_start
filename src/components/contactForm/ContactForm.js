import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type='text'
          value={name}
          name='name'
          placeholder='Contact Name'
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        <input
          type='tel'
          value={phone}
          name='name'
          placeholder='Phone Number'
          onChange={(e) => setPhone(e.target.value)}
          pattern='0[2|3|7|8]{1}[0-9]{8}$'
        />
      </label>
      <br />
      <label>
        <input
          type='email'
          value={email}
          name='email'
          placeholder='Email Address'
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <input 
        type="submit" 
        value="Add Contact"
        />
    </form>
  );
};
