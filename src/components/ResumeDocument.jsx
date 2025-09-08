import "../Resume.css";

function ResumeDocument({ data }) {
  if (!data) return null;
  return (
    <div id="resume-document" className="resume-container">
      {/* General */}
      <div className="resume-general">
        <h1>{data.general.name || "Your Name"}</h1>
      </div>
      {/* Education */}
      {/* Experience */}
      {/* Projects */}
      {/* Skills */}
    </div>
  );
}

export default ResumeDocument;
