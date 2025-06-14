// src/templates/TemplateTwo.tsx
import React from "react";
import type { CVData } from "../types/CVData";

const TemplateThree: React.FC<{ data: CVData }> = ({ data }) => (
  <div style={{ padding: "24px", color: "#333" }}>
    {/* Left Column */}
    <aside>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <p>{data.phone}</p>

      <h2>Skills</h2>
      <ul>
        {data.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </aside>

    {/* Right Column */}
    <main>
      <section>
        <h2>Summary</h2>
        <p>{data.summary}</p>
      </section>

      <section>
        <h2>Experience</h2>
        {data.experience.map((exp, i) => (
          <div key={i}>
            <h3>
              {exp.title} @ {exp.company}
            </h3>
            <p>{exp.dates}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>

      <section>
        <h2>Education</h2>
        {data.education.map((edu, i) => (
          <div key={i}>
            <h3>
              {edu.degree} - {edu.school}
            </h3>
            <p>{edu.dates}</p>
          </div>
        ))}
      </section>
    </main>
  </div>
);

export default TemplateThree;
