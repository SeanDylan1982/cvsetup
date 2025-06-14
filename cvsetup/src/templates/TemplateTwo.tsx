import React from "react";
import type { CVData } from "../types/CVData";

const TemplateTwo: React.FC<{ data: CVData }> = ({ data }) => {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        color: "#111",
        lineHeight: "1.6",
      }}
    >
      {/* Header with Photo */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "24px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "4px",
            }}
          >
            {data.name}
          </h1>
          <div style={{ fontSize: "14px" }}>
            {/* {data.address && <p>{data.address}</p>} */}
            <p>
              {data.phone} | {data.email}
            </p>
            <p>
              {data.summary}
            </p>
          </div>
        </div>
        {data.photo && (
          <img
            src={data.photo}
            alt="User"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginLeft: "20px",
            }}
          />
        )}
      </div>

      {/* Experience */}
      <h2 style={styles.sectionTitle}>EXPERIENCE</h2>
      {data.experience.map((exp, i) => (
        <div key={i} style={styles.entry}>
          <strong>
            {exp.company} — {exp.title}
          </strong>
          <p style={styles.dates}>{exp.dates}</p>
          <p>{exp.description}</p>
        </div>
      ))}

      {/* Education */}
      <h2 style={styles.sectionTitle}>EDUCATION</h2>
      {data.education.map((edu, i) => (
        <div key={i} style={styles.entry}>
          <strong>
            {edu.school} — {edu.degree}
          </strong>
          <p style={styles.dates}>{edu.dates}</p>
        </div>
      ))}

      {/* Projects */}
      <h2 style={styles.sectionTitle}>PROJECTS</h2>
      {data.projects.map((proj, i) => (
        <div key={i} style={styles.entry}>
          <strong>{proj.name}</strong> — {proj.description}
          <p>
            <em>Technologies:</em> {proj.technologies}
          </p>
        </div>
      ))}

      {/* Personal Info
      {data.name && (
        <>
          <h2 style={styles.sectionTitle}>PERSONAL INFO</h2>
          <ul style={{ paddingLeft: "20px" }}>
            {data.name.split("\n").map((line, i) => (
              <li key={i}>{line.trim()}</li>
            ))}
          </ul>
        </>
      )} */}

      {/* Certifications */}
      <h2 style={styles.sectionTitle}>CERTIFICATIONS</h2>
      {data.certifications.map((cert, i) => (
        <div key={i} style={styles.entry}>
          <strong>{cert.name}</strong>
          <br />
          <span>{cert.issuer}</span>
          <br />
          <span>{cert.date}</span>
        </div>
      ))}

      {/* Skills */}
      <h2 style={styles.sectionTitle}>SKILLS</h2>
      <p>{data.skills.join(", ")}</p>

      {/* References */}
      <h2 style={styles.sectionTitle}>REFERENCES</h2>
      {data.references.map((ref, i) => (
        <div key={i} style={styles.entry}>
          <strong>{ref.name}</strong> — {ref.relationship}
          <p>Contact: {ref.contact}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: "30px",
    marginBottom: "10px",
    borderBottom: "1px solid #ccc",
    paddingBottom: "4px",
  },
  entry: {
    marginBottom: "16px",
  },
  dates: {
    fontStyle: "italic",
    fontSize: "13px",
    margin: "2px 0",
  },
};

export default TemplateTwo;
