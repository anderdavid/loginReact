import React from 'react';

export default function SubmitButton(props) {
  const { label } = props;
  return (
    <div>
      <div className="field">
        <p className="control">
          <button className="button is-success">{label}</button>
        </p>
      </div>
    </div>
  );
}
