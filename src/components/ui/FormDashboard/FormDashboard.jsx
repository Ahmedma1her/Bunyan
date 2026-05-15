import { useEffect, useState } from "react";

function FormDashboard({ sectionKey, setDirtySections }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    checked: false,
  });

  useEffect(() => {
    const hasTypedValue = formData.email.trim() || formData.password.trim();

    setDirtySections((currentSections) => ({
      ...currentSections,
      [sectionKey]: Boolean(hasTypedValue),
    }));
  }, [formData.email, formData.password, sectionKey, setDirtySections]);

  function handleChange(event) {
    const { name, type, checked, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    setFormData({
      email: "",
      password: "",
      checked: false,
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
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
            name="checked"
            checked={formData.checked}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default FormDashboard;
