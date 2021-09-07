import React from 'react';

export default function SubmitButton(props) {
  const { label, disabled } = props;
  return (
    <div>
      <div className="field">
        <p className="control">
          <button disabled={disabled} className="button is-success">
            {label}
          </button>
        </p>
      </div>
    </div>
  );
}
