import React from 'react';
import { Field } from 'redux-form';
import EmailInput from '../../components/Inputs/EmailInput';
import PasswordInput from '../../components/Inputs/PasswordInput';
import SubmitButton from '../../components/Inputs/SubmitButton';

export default function LoginForm(props) {
  const { handleSubmit, invalid } = props;

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <Field name="email" component={EmailInput} />
        <Field name="password" component={PasswordInput} />
        <SubmitButton label={'Sign In'} disabled={invalid} />
      </form>
    </div>
  );
}
