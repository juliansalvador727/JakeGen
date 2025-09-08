import ResumeDocument from "./ResumeDocument.jsx";

function ResumePreview({ data }) {
  return (
    <div className="resume-preview">
      <h2>Resume Preview</h2>
      <ResumeDocument data={data} />
    </div>
  );
}

export default ResumePreview;
