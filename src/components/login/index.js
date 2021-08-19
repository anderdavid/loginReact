import React from 'react';
import { FaEnvelope, FaUser } from 'react-icons/fa';

export default function Login() {
  return (
    <div>
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
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="password" placeholder="Password" />
          <span className="icon is-small is-left">
            <FaUser size={18} color={'#616170'} />
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control">
          <button className="button is-success">Login</button>
        </p>
      </div>
    </div>
  );
}
