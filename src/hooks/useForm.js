import { useState } from "react";

export const useForm = (initialValues, validationSchema = {}) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [generalError, setGeneralError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCustomChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (validationSchema[field]) {
      const error = validationSchema[field](formData[field], formData);
      setErrors((prev) => ({ ...prev, [field]: error || "" }));
    }
  };

  const validateField = (field) => {
    if (validationSchema[field]) {
      const error = validationSchema[field](formData[field], formData);
      setErrors((prev) => ({ ...prev, [field]: error || "" }));
      return error;
    }
    return null;
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationSchema).forEach((field) => {
      const error = validationSchema[field](formData[field], formData);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const setFieldError = (field, error) => {
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const setAllTouched = () => {
    const allTouched = {};
    Object.keys(validationSchema).forEach((field) => {
      allTouched[field] = true;
    });
    setTouched(allTouched);
  };

  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
    setTouched({});
    setGeneralError("");
  };

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    touched,
    setTouched,
    generalError,
    setGeneralError,
    handleChange,
    handleCustomChange,
    handleBlur,
    validateField,
    validateForm,
    setFieldError,
    setAllTouched,
    resetForm,
  };
};
