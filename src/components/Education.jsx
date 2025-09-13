function Education({ data, setData }) {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...data];
    updated[index][name] = value;
    setData(updated);
  };

  const addEducation = () => {
    setData([...data, { univeresity: "", degree: "", dates: "" }]);
  };

  const deleteEducation = (index) => {
    const updated = [...data];
    updated.splice(index, 1);
    setData(updated);
  };

  return (
    <>
      <h2>Education</h2>
      {data.map((edu, index) => (
        <div className="form" key={index}>
          <label>University:</label>
          <input
            type="text"
            name="university"
            value={edu.university}
            onChange={(e) => handleChange(index, e)}
          />

          <label>Degree:</label>
          <input
            type="text"
            name="degree"
            value={edu.degree}
            onChange={(e) => handleChange(index, e)}
          />

          <label>Dates:</label>
          <input
            type="text"
            name="dates"
            value={edu.dates}
            onChange={(e) => handleChange(index, e)}
          />

          <button onClick={() => deleteEducation(index)}>Delete</button>
        </div>
      ))}
      <button onClick={addEducation}>+ Add Education</button>
    </>
  );
}

export default Education;
