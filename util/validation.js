function isEmpty(value) {
  return !value || value.trim() === '';
}

function userCredentialsAreValid(email, password) {
  return (
    email && email.includes('@') && password && password.trim().length >= 6
  );
}

function userDetailsAreValid(email, password, name, area, pin, city) {
  return (
    userCredentialsAreValid(email, password) &&
    !isEmpty(name) &&
    isNaN(name) &&
    !isEmpty(area) &&
    isNaN(area) &&
    !isEmpty(pin) &&
    !isEmpty(city)
  );
}

function emailIsConfirmed(email, confirmEmail) {
  return email === confirmEmail;
}

module.exports = {
  userDetailsAreValid: userDetailsAreValid,
  emailIsConfirmed: emailIsConfirmed,
};
