import React from 'react';
import { FaUser } from 'react-icons/fa';

export default function PasswordInput({ input, meta: { touched, error } }) {
  return (
    <div className="field">
      <p className="control has-icons-left">
        <input
          {...input}
          className="input"
          type="password"
          placeholder="Password"
        />
        <span className="icon is-small is-left">
          <FaUser size={18} color={'#616170'} />
        </span>
        <br />
        {touched && error && <span style={{ color: 'red' }}>{error}</span>}
      </p>
    </div>
  );
}
