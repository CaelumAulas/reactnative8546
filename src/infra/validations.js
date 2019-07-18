function required(value) {
  return Boolean(value) === false;
}

function minlength(value, { min }) {
  return value.length < min;
}

export const validations = {
  required,
  minlength
};
