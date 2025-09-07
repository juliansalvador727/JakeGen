// Skills.jsx

function Skills({ data, setData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <>
      <h2>Technical Skills</h2>
      <div className="form">
        <label htmlFor="language">Languages: </label>
        <input
          type="text"
          id="language"
          name="language"
          value={data.name}
          onChange={handleChange}
        />

        <label htmlFor="frameworks">Frameworks: </label>
        <input
          type="text"
          id="frameworks"
          name="frameworks"
          value={data.name}
          onChange={handleChange}
        />

        <label htmlFor="tools">Developer Tools: </label>
        <input
          type="text"
          id="tools"
          name="tools"
          value={data.name}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Skills;

// Language/Frameworks/Developer Tools/Libraries
