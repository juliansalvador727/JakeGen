function Experience({ data, setData }) {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...data];
    updated[index][name] = value;
    setData(updated);
  };

  const addExperience = () => {
    setData([
      ...data,
      {
        role: "",
        company: "",
        location: "",
        dates: "",
        bullets: [""],
      },
    ]);
  };

  const deleteExperience = (index) => {
    const update = [...data];
    update.splice(index, 1);
    setData(update);
  };

  return (
    <>
      <h2>Experience</h2>
      {data.map((exp, index) => (
        <div className="form" key={index}>
          <label>Role:</label>
          <input
            type="text"
            name="role"
            value={exp.role}
            onChange={(e) => handleChange(index, e)}
          />

          <label>Company:</label>
          <input
            type="text"
            name="company"
            value={exp.company}
            onChange={(e) => handleChange(index, e)}
          />

          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={exp.location}
            onChange={(e) => handleChange(index, e)}
          />

          <label>Dates:</label>
          <input
            type="text"
            name="dates"
            value={exp.dates}
            onChange={(e) => handleChange(index, e)}
          />

          <button onClick={() => deleteExperience(index)}>Delete</button>
        </div>
      ))}
      <button onClick={addExperience}>+ Add Experience</button>
    </>
  );
}

export default Experience;
