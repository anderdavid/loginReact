const validate = (values) => {
  const { email, password } = values;
  const errors = {};

  if (!email) {
    errors.email = 'Este campos es requerido';
  }

  if (!password) {
    errors.password = 'Este campo es requerido';
  }

  return errors;
};

export default validate;
