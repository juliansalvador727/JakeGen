import ResumeDocument from "./ResumeDocument.jsx";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

function ResumePreview({ data }) {
  const handleDownload = async () => {
    const element = document.querySelector("#resume-document");
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "pt", "letter");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgProps = canvas.width / canvas.height;
    const pdfProps = pdfWidth / pdfHeight;

    let renderWidth, renderHeight, x, y;
    if (imgProps > pdfProps) {
      renderWidth = pdfWidth;
      renderHeight = (canvas.height * pdfWidth) / canvas.width;
      x = 0;
      y = (pdfHeight - renderHeight) / 2;
    } else {
      renderHeight = pdfHeight;
      renderWidth = (canvas.width * pdfHeight) / canvas.height;
      x = (pdfWidth - renderWidth) / 2;
      y = 0;
    }
    pdf.addImage(imgData, "PNG", x, y, renderWidth, renderHeight);
    pdf.save("resume.pdf");
  };

  return (
    <div className="resume-preview">
      <h2>Resume Preview</h2>
      <ResumeDocument data={data} />
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
}

export default ResumePreview;
