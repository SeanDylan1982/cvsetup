import React from "react";
import type { CVData } from "../types/CVData";

const TemplateOne: React.FC<{ data: CVData }> = ({ data }) => {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", color: "#333" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        {data.photo && (
          <img
            src={data.photo}
            alt="User Photo"
            style={{
              width: "80px",
              height: "auto",
              aspectRatio: "1 / 1.2", // modern CSS (optional)
              borderRadius: "8px",
              border: "1px solid #ccc",
              objectFit: "cover",
              display: "block",
            }}
          />
        )}
        <h1 style={{ fontSize: "2rem", marginBottom: "0.25rem" }}>
          {data.name}
        </h1>
      </div>
      <p>
        {data.email} | {data.phone}
      </p>
      <p style={{ fontStyle: "italic", margin: "1rem 0" }}>{data.summary}</p>

      <h2>Experience</h2>
      {data.experience.map((exp, index) => (
        <div key={index}>
          <strong>{exp.title}</strong> at {exp.company}
          <p>{exp.dates}</p>
          <p>{exp.description}</p>
        </div>
      ))}

      <h2>Education</h2>
      {data.education.map((edu, index) => (
        <div key={index}>
          <strong>{edu.degree}</strong> from {edu.school}
          <p>{edu.dates}</p>
        </div>
      ))}

      <h2>Projects</h2>
      {data.projects.map((proj, index) => (
        <div key={index}>
          <strong>{proj.name}</strong>
          <p>{proj.description}</p>
          <p>
            <em>Technologies: {proj.technologies}</em>
          </p>
        </div>
      ))}

      <h2>Certifications</h2>
      {data.certifications.map((cert, index) => (
        <div key={index}>
          <strong>{cert.name}</strong> — {cert.issuer}
          <p>{cert.date}</p>
        </div>
      ))}

      <h2>Skills</h2>
      <ul>
        {data.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <h2>References</h2>
      {data.references.map((ref, index) => (
        <div key={index}>
          <strong>{ref.name}</strong> — {ref.relationship}
          <p>Contact: {ref.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default TemplateOne;
