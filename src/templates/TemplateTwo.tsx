import React from "react";
import type { CVData } from "../types/CVData";

const TemplateTwo: React.FC<{ data: CVData }> = ({ data }) => {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Georgia, serif",
        color: "#333",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "32px" }}>{data.name}</h1>
        {data.headline && (
          <p style={{ fontSize: "18px", fontStyle: "italic" }}>
            {data.headline}
          </p>
        )}
        {data.address && <p>{data.address}</p>}
        <p>
          {data.phone} | {data.email}
        </p>
        {data.website && <p>{data.website}</p>}
        {data.photo && (
          <img
            src={data.photo}
            alt="User"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              marginTop: "16px",
            }}
          />
        )}
      </div>

      <h2>Experience</h2>
      {data.experience.map((exp, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <h3>
            {exp.title} at {exp.company}
          </h3>
          <p style={{ fontStyle: "italic" }}>{exp.dates}</p>
          <p>{exp.description}</p>
        </div>
      ))}

      <h2>Education</h2>
      {data.education.map((edu, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <h3>
            {edu.degree} — {edu.school}
          </h3>
          <p style={{ fontStyle: "italic" }}>{edu.dates}</p>
          <p>{edu.description}</p>
        </div>
      ))}

      {data.projects.length > 0 && (
        <>
          <h2>Projects</h2>
          {data.projects.map((proj, i) => (
            <div key={i} style={{ marginBottom: "20px" }}>
              <h3>{proj.name}</h3>
              <p>{proj.description}</p>
              <p>
                <em>Technologies:</em> {proj.technologies}
              </p>
            </div>
          ))}
        </>
      )}

      {data.certifications.length > 0 && (
        <>
          <h2>Certifications</h2>
          {data.certifications.map((cert, i) => (
            <div key={i} style={{ marginBottom: "20px" }}>
              <h3>{cert.name}</h3>
              <p>
                {cert.issuer} — {cert.date}
              </p>
            </div>
          ))}
        </>
      )}

      {data.languages?.length > 0 && (
        <>
          <h2>Languages</h2>
          {data.languages.map((lang, i) => (
            <p key={i}>
              <strong>{lang.language}</strong> — Written: {lang.written},
              Verbal: {lang.verbal}
            </p>
          ))}
        </>
      )}

      {data.software?.length > 0 && (
        <>
          <h2>Software</h2>
          {data.software.map((sw, i) => (
            <p key={i}>
              <strong>{sw.software}</strong> — {sw.years} years, {sw.ability}
            </p>
          ))}
        </>
      )}

      {data.salaryExpectation && (
        <>
          <h2>Salary Expectation</h2>
          <p>{data.salaryExpectation}</p>
        </>
      )}
      {data.transportation && (
        <>
          <h2>Transportation</h2>
          <p>{data.transportation}</p>
        </>
      )}
      {data.healthStatus && (
        <>
          <h2>Health Status</h2>
          <p>{data.healthStatus}</p>
        </>
      )}

      {data.references.length > 0 && (
        <>
          <h2>References</h2>
          {data.references.map((ref, i) => (
            <div key={i} style={{ marginBottom: "16px" }}>
              <strong>{ref.name}</strong> — {ref.relationship}
              <br />
              <span>{ref.contact}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default TemplateTwo;
