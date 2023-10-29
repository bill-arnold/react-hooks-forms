// // src/components/Form.js
import React from "react";

function Form({ firstName, lastName, handleFirstNameChange, handleLastNameChange }) {
  return (
    <form>
      <input
        type="text"
        onChange={handleFirstNameChange}
        value={firstName}
        placeholder="First Name"
      />
      <input
        type="text"
        onChange={handleLastNameChange}
        value={lastName}
        placeholder="Last Name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
