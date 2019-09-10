import validator from "validator";
import isEmpty from "lodash/isEmpty";
import Validations from "../../validationLanguage";
import { validationLanguageType } from "../../constants/constants";
export default function ValidateTextInput(data) {
  let errors = {};

  if (validator.isEmpty(data.full_name)) {
    errors.full_name = Validations[validationLanguageType]["validate:fullname"];
  }

  return { errors, isValid: isEmpty(errors) };
}
