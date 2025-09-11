import ResumeDocument from "./ResumeDocument.jsx";
import jsPDF from "jspdf";
import { useRef } from "react";
import "../assets/cmunrm-normal.js";
import "../assets/cmunbx-bold.js";

function ResumePreview({ data }) {
  const resumeRef = useRef();

  const handleDownload = async () => {
    const element = resumeRef.current;
    if (!element) return;

    const pdf = new jsPDF("p", "pt", "letter");
    pdf.addFont("cmunrm-normal.ttf", "CMU", "normal");

    pdf.setFont("CMU", "normal");
    // Render HTML directly into PDF
    await pdf.html(element, {
      // margin: [20, 20, 20, 20],
      autoPaging: "text", // handle multipage
      x: 0,
      y: 0,
      html2canvas: {
        scale: 1.5, // still uses canvas internally but via jsPDF (no direct import of html2canvas)
      },
      callback: function (doc) {
        doc.save("resume.pdf");
      },
    });
  };

  return (
    <div className="resume-preview">
      <h2>Resume Preview</h2>
      <div id="resume-border">
        <div id="resume-document" ref={resumeRef}>
          <ResumeDocument data={data} />
        </div>
      </div>

      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
}

export default ResumePreview;
