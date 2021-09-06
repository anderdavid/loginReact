import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

export default function EmailInput() {
  return (
    <div className="field">
      <p className="control has-icons-left has-icons-right">
        <input className="input" type="email" placeholder="Email" />
        <span className="icon is-small is-left">
          <FaEnvelope size={18} color={'#616170'} />
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-check"></i>
        </span>
      </p>
    </div>
  );
}
