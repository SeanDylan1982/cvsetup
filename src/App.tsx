import { useState } from "react";
import FormSection from "./components/FormSection";
import TemplateViewer from "./components/TemplateViewer";
import TemplateSelector from "./components/TemplateSelector";
import defaultCVData from "./data/defaultCVData";
import type { CVData } from "./types/CVData";
import "./App.css";
import html2pdf from 'html2pdf.js';
import { useRef } from 'react';


function App() {
  const [cvData, setCVData] = useState<CVData>(defaultCVData);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("template1");
  const resumeRef = useRef<HTMLDivElement>(null);
  console.log(resumeRef); 
  

  const handleDownloadPDF = () => {
    if (!resumeRef.current) return;

    const fullName = cvData.name?.trim() || "My";
    const safeName = fullName
      .replace(/\s+/g, " ")
      .replace(/[^a-zA-Z0-9\s\-]/g, "");
    const fileName = `${safeName} - Resume.pdf`;

    const options = {
      margin: 0.5,
      filename: fileName,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        scrollY: 0
      },
      // optional: prevent scroll offset issues
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(options).from(resumeRef.current).save();

  };

  const styles = {
    navbar: {
      position: "sticky",
      top: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 24px",
      backgroundColor: "#f7f7f7",
      borderBottom: "1px solid #ccc",
      fontFamily: "sans-serif",
      zIndex: 10,
      opacity: 1,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
    },
    navTitle: {
      fontWeight: "bold",
      fontSize: "22px",
      color: "#333",
      textTransform: "uppercase",
    },
    navButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "8px 14px",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
    },
  };

  return (
    <>
      <div
        style={{
          position: "sticky",
          top: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 24px",
          backgroundColor: "#f7f7f7",
          borderBottom: "1px solid #ccc",
          fontFamily: "sans-serif",
          zIndex: 10,
          opacity: 1,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
            fontSize: "22px",
            color: "#333",
            textTransform: "uppercase",
          }}
        >
          CV Setup
        </div>
        <button onClick={handleDownloadPDF} style={styles.navButton}>
          📄 Download PDF
        </button>
      </div>

      <div className="app">
        <div className="left-panel">
          <TemplateSelector
            selected={selectedTemplate}
            onChange={setSelectedTemplate}
          />
          <FormSection data={cvData} onChange={setCVData} />
        </div>

        <div className="right-panel">
          <div ref={resumeRef} style={{ background: "#fff", padding: "24px" }}>
            <TemplateViewer data={cvData} template={selectedTemplate} />
          </div>
        </div>
      </div>
    </>
  );
  
}

export default App;
