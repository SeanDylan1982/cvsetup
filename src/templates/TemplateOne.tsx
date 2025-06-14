import React from "react";
import type { CVData } from "../types/CVData";

const TemplateOne: React.FC<{ data: CVData }> = ({ data }) => {
  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        color: "#111",
        lineHeight: "1.6",
      }}
    >
      {/* Header */}
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
          {data.headline && (
            <p
              style={{
                fontStyle: "italic",
                fontWeight: "500",
                marginBottom: "8px",
              }}
            >
              {data.headline}
            </p>
          )}
          {data.address && <p>{data.address}</p>}
          <p>
            {data.phone} | {data.email}
          </p>
          {data.website && <p>{data.website}</p>}
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

      <h2>Experience</h2>
      {data.experience.map((exp, i) => (
        <div key={i} style={{ marginBottom: "16px" }}>
          <strong>
            {exp.company}, {exp.location} — {exp.title}
          </strong>
          <p style={{ fontStyle: "italic", fontSize: "13px" }}>{exp.dates}</p>
          <p>{exp.description}</p>
        </div>
      ))}

      <h2>Education</h2>
      {data.education.map((edu, i) => (
        <div key={i} style={{ marginBottom: "16px" }}>
          <strong>
            {edu.school}, {edu.location} — {edu.degree}
          </strong>
          <p style={{ fontStyle: "italic", fontSize: "13px" }}>{edu.dates}</p>
          <p>{edu.description}</p>
        </div>
      ))}

      {data.projects.length > 0 && (
        <>
          <h2>Projects</h2>
          {data.projects.map((proj, i) => (
            <div key={i} style={{ marginBottom: "16px" }}>
              <strong>{proj.name}</strong> — {proj.description}
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
            <div key={i} style={{ marginBottom: "16px" }}>
              <strong>{cert.name}</strong>
              <br />
              <span>{cert.issuer}</span>
              <br />
              <span>{cert.date}</span>
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
              <p>Contact: {ref.contact}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default TemplateOne;
