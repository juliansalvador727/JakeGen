function Projects({ data, setData }) {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...data];
    updated[index][name] = value;
    setData(updated);
  };
  const addProject = () => {
    setData([
      ...data,
      { name: "", technologies: "", dates: "", bullets: [""] },
    ]);
  };
  const deleteProject = (index) => {
    const updated = [...data];
    updated.splice(index, 1);
    setData(updated);
  };
  return (
    <>
      <h2>Projects</h2>
      {data.map((proj, index) => (
        <div className="form" key={index}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={proj.name}
            onChange={(e) => handleChange(index, e)}
          />

          <label>Technologies:</label>
          <input
            type="text"
            name="technologies"
            value={proj.technologies}
            onChange={(e) => handleChange(index, e)}
          />

          <label>Dates:</label>
          <input
            type="text"
            name="dates"
            value={proj.dates}
            onChange={(e) => handleChange(index, e)}
          />

          <button onClick={() => deleteProject(index)}>Delete</button>
        </div>
      ))}
      <button onClick={addProject}>+ Add Project</button>
    </>
  );
}

export default Projects;
