import { useEffect, useState } from "react";

function FormDashboard({ sectionKey, setDirtySections }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const hasTypedValue = formData.email.trim() || formData.password.trim();

    setDirtySections((currentSections) => ({
      ...currentSections,
      [sectionKey]: Boolean(hasTypedValue),
    }));
  }, [formData.email, formData.password, sectionKey, setDirtySections]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setFormData({
      email: "",
      password: "",
    });

    setDirtySections((currentSections) => ({
      ...currentSections,
      [sectionKey]: false,
    }));
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
            value={formData.email}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default FormDashboard;
