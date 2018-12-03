const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

/**
 * 
 * @param {Object} formErrors include email, password, username etc
 * @param {string} name attribute
 * @param {string} value value correcspond to name field
 * @see  https://github.com/MyNameIsURL/react-form-validation-tutorial
 * 
 */
export const formValidation = (formErrors, name, value) => {
  switch (name) {
    case "username":
      formErrors.username =
        value.length < 5 ? "minumum 5 charactoers required" : "";
    case "email":
      formErrors.email =
        emailRegex.test(value) ? "" : "invalid email address";
      break;
    case "password":
      formErrors.password =
        value.length < 7 ? "minimum 7 characters required" : "";
      break;
    case "newpassword":
      formErrors.newpassword = value.length < 7 ? "new password minimum 7 characters required" : "";
    case "confirmpassword":
      formErrors.confirmpassword = value.length < 7 ? "confirm password minimum 7 character" : "";
    default:
      break;
  };
    return formErrors;
}
export const valueValidation = ({ formErrors, ...rest }) => {
  let valid = true;
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;
}
export const passMatch = (first, second) => {
  if (first === second) return true;
  return false;
};