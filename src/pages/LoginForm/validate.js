import { REGEX } from '../../utils/rejex';

const validate = (values) => {
  const { email, password } = values;
  const errors = {};

  if (!email) {
    errors.email = 'Este campo es requerido';
  }

  if (!password) {
    errors.password = 'Este campo es requerido';
  }

  if (!REGEX.EMAIL.test(email)) {
    errors.email = 'Email invalido';
  }

  return errors;
};

export default validate;
