import { useState } from "react";

const useForm = (json) => {
  const [form, setForm] = useState(json);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e, fn) => {
    e.preventDefault();
    fn();
  };

  return {
    form,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
