import "../Resume.css";

function ResumeDocument({ data }) {
  if (!data) return null;
  return (
    <>
      {/* General */}
      <div className="resume-general">
        <h1 className="resume-name">{data.general.name || "Jake Ryan"}</h1>
        {/* phone number, email, linkedin, github */}
        <p className="resume-general-details">
          {data.general.phone || "123-456-7890"} |{" "}
          {data.general.email || "jake@su.edu"} |{" "}
          {data.general.linkedin || "linkedin.com/in/jake"} |{" "}
          {data.general.github || "github.com/jake"}
        </p>
      </div>
      {/* Education */}
      {/* Experience */}
      {/* Projects */}
      {/* Skills */}
      <div className="resume-skills">
        <p>{data.skills.languages || "JavaScript"}</p>
        <p>{data.skills.frameworks || "React"}</p>
        <p>{data.skills.tools || "VS Code"}</p>
        <p>{data.skills.libraries || "Pandas"}</p>
      </div>
    </>
  );
}

export default ResumeDocument;
