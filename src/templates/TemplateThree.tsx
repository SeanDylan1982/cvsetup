import React from "react";
import { CVData } from "../../types/CVData";

const TemplateThree: React.FC<{ data: CVData }> = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        fontFamily: "Arial, sans-serif",
        color: "#222",
        flexDirection: "row",
        width: "100%",
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Left and Right columns go here */}
        {/* LEFT COLUMN */}
        <div
          style={{
            width: "30%",
            backgroundColor: "#e0f0ff",
            padding: "24px",
            boxSizing: "border-box",
            overflowY: "auto",
            height: "100vh",
          }}
        >
          {/* Profile */}
          {data.summary && (
            <>
              <h2 style={styles.leftHeading}>PROFILE</h2>
              <p style={styles.paragraph}>{data.summary}</p>
            </>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <>
              <h2 style={styles.leftHeading}>SKILLS</h2>
              <ul style={styles.bulletList}>
                {data.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </>
          )}

          {/* Languages */}
          {data.languages?.length > 0 && (
            <>
              <h2 style={styles.leftHeading}>LANGUAGES</h2>
              {data.languages.map((lang, i) => (
                <div key={i} style={{ marginBottom: "12px" }}>
                  <strong>{lang.language}</strong>
                  <br />
                  <span>Written: {lang.written}</span>
                  <br />
                  <span>Verbal: {lang.verbal}</span>
                </div>
              ))}
            </>
          )}

          {/* Software */}
          {data.software?.length > 0 && (
            <>
              <h2 style={styles.leftHeading}>SOFTWARE</h2>
              {data.software.map((sw, i) => (
                <div key={i} style={{ marginBottom: "12px" }}>
                  <strong>{sw.software}</strong>
                  <br />
                  <span>
                    {sw.years} years — {sw.ability}
                  </span>
                </div>
              ))}
            </>
          )}

          {/* Salary */}
          {data.salaryExpectation && (
            <>
              <h2 style={styles.leftHeading}>SALARY</h2>
              <p>{data.salaryExpectation}</p>
            </>
          )}

          {/* Transport */}
          {data.transportation && (
            <>
              <h2 style={styles.leftHeading}>TRANSPORT</h2>
              <p>{data.transportation}</p>
            </>
          )}

          {/* Health */}
          {data.healthStatus && (
            <>
              <h2 style={styles.leftHeading}>HEALTH STATUS</h2>
              <p>{data.healthStatus}</p>
            </>
          )}

          {/* References */}
          {data.references.length > 0 && (
            <>
              <h2 style={styles.leftHeading}>REFERENCES</h2>
              {data.references.map((ref, i) => (
                <div key={i} style={{ marginBottom: "1rem" }}>
                  <strong>{ref.name}</strong>
                  <br />
                  {ref.relationship && <span>{ref.relationship}</span>}
                  <br />
                  <span>{ref.contact}</span>
                </div>
              ))}
            </>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div
          style={{
            width: "70%",
            padding: "32px",
            boxSizing: "border-box",
            overflowY: "auto",
            height: "100vh",
          }}
        >
          {/* Top row: name + image */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div style={{ flex: 1 }}>
              <h1 style={{ fontSize: "28px", marginBottom: "4px" }}>
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
              <div
                style={{
                  fontSize: "14px",
                  lineHeight: "1.5",
                  marginBottom: "24px",
                }}
              >
                {data.phone && <p>📞 {data.phone}</p>}
                {data.email && <p>✉️ {data.email}</p>}
                {data.address && <p>📍 {data.address}</p>}
                {data.website && <p>🔗 {data.website}</p>}
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
                  marginLeft: "24px",
                }}
              />
            )}
          </div>

          {/* Experience */}
          <h2 style={styles.rightHeading}>WORK EXPERIENCE</h2>
          {data.experience.map((exp, i) => (
            <div key={i} style={styles.entryBlock}>
              <div style={{ fontWeight: "bold" }}>
                {exp.title} — {exp.company}
              </div>
              <div style={{ fontStyle: "italic", fontSize: "13px" }}>
                {exp.dates}
              </div>
              <p>{exp.description}</p>
            </div>
          ))}

          {/* Education */}
          <h2 style={styles.rightHeading}>EDUCATION</h2>
          {data.education.map((edu, i) => (
            <div key={i} style={styles.entryBlock}>
              <div style={{ fontWeight: "bold" }}>
                {edu.degree} — {edu.school}
              </div>
              <div style={{ fontStyle: "italic", fontSize: "13px" }}>
                {edu.dates}
              </div>
              {edu.description && <p>{edu.description}</p>}
            </div>
          ))}

          {/* Projects */}
          {data.projects.length > 0 && (
            <>
              <h2 style={styles.rightHeading}>PROJECTS</h2>
              {data.projects.map((proj, i) => (
                <div key={i} style={styles.entryBlock}>
                  <div style={{ fontWeight: "bold" }}>{proj.name}</div>
                  <p>{proj.description}</p>
                  <p>
                    <em>Technologies:</em> {proj.technologies}
                  </p>
                </div>
              ))}
            </>
          )}

          {/* Certifications */}
          {data.certifications.length > 0 && (
            <>
              <h2 style={styles.rightHeading}>CERTIFICATIONS</h2>
              {data.certifications.map((cert, i) => (
                <div key={i} style={styles.entryBlock}>
                  <strong>{cert.name}</strong>
                  <br />
                  <span>{cert.issuer}</span>
                  <br />
                  <span>{cert.date}</span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>

    </div>
  );
};

const styles = {
  leftHeading: {
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "24px",
    marginBottom: "8px",
  },
  rightHeading: {
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "24px",
    marginBottom: "12px",
    borderBottom: "1px solid #ccc",
    paddingBottom: "4px",
  },
  bulletList: {
    paddingLeft: "20px",
    margin: 0,
  },
  paragraph: {
    fontSize: "14px",
    lineHeight: "1.5",
    marginBottom: "16px",
  },
  entryBlock: {
    marginBottom: "16px",
  },
};

export default TemplateThree;
