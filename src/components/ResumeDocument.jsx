import "../Resume.css";

function ResumeDocument({ data }) {
  if (!data) return null;
  return (
    <div id="resume-document" className="resume-container">
      {/* General */}
      <div className="resume-general">
        <h1>{data.general.name || "Your Name"}</h1>
        {/* phone number, email, linkedin, github */}
        <p>{data.general.phone || "7781231"}</p>
        <p>{data.general.email || "bruh@gmail.com"}</p>
        <p>{data.general.linkedin || "linkedin.com"}</p>
        <p>{data.general.github || "github.com"}</p>
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
    </div>
  );
}

export default ResumeDocument;
