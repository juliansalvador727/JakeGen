// .General.jsx

function General({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <>
      <h2>General Info</h2>
      <div className="form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={data.phone}
          onChange={handleChange}
        />

        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />

        <label htmlFor="linkedin">LinkedIn: </label>
        <input
          type="text"
          id="linkedin"
          name="linkedin"
          value={data.linkedin}
          onChange={handleChange}
        />

        <label htmlFor="github">Github:</label>
        <input
          type="text"
          id="github"
          name="github"
          value={data.github}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default General;
