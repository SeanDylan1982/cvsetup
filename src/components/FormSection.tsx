import React from "react";
import type { CVData, ExperienceEntry, EducationEntry } from "../types/CVData";

interface Props {
  data: CVData;
  onChange: (data: CVData) => void;
}

const FormSection: React.FC<Props> = ({ data, onChange }) => {
  const handleChange = (field: keyof CVData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  // EXPERIENCE HANDLERS
  const updateExperience = (index: number, field: string, value: string) => {
    const updated = [...data.experience];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ ...data, experience: updated });
  };

  const addExperience = () => {
    const newEntry: ExperienceEntry = {
      title: "",
      company: "",
      dates: "",
      description: "",
    };
    onChange({ ...data, experience: [...data.experience, newEntry] });
  };

  const removeExperience = (index: number) => {
    const updated = data.experience.filter((_, i) => i !== index);
    onChange({ ...data, experience: updated });
  };

  // EDUCATION HANDLERS
  const updateEducation = (index: number, field: string, value: string) => {
    const updated = [...data.education];
    updated[index] = { ...updated[index], [field]: value };
    onChange({ ...data, education: updated });
  };

  const addEducation = () => {
    const newEntry: EducationEntry = { school: "", degree: "", dates: "" };
    onChange({ ...data, education: [...data.education, newEntry] });
  };

  const removeEducation = (index: number) => {
    const updated = data.education.filter((_, i) => i !== index);
    onChange({ ...data, education: updated });
  };

  const styles = {
    addButton: {
      backgroundColor: "#555",
      border: "1px solid #ccc",
      borderRadius: "4px",
      padding: "6px 10px",
      marginTop: "8px",
      cursor: "pointer",
      fontSize: "14px",
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
    },
  };
  

  return (
    <div>
      <h2>Personal Info</h2>
      <h2>Photo</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) return;

          const reader = new FileReader();
          reader.onloadend = () => {
            onChange({ ...data, photo: reader.result as string });
          };
          reader.readAsDataURL(file);
        }}
      />

      {data.photo && (
        <div style={{ marginTop: "1rem" }}>
          <img
            src={data.photo}
            alt="User"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
        </div>
      )}

      <label>Name</label>
      <input
        type="text"
        value={data.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <label>Email</label>
      <input
        type="email"
        value={data.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <label>Phone</label>
      <input
        type="text"
        value={data.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
      />
      <h2>Additional Details</h2>
      <label>Headline (position sought)</label>
      <input
        type="text"
        value={data.headline}
        onChange={(e) => handleChange("headline", e.target.value)}
      />

      <label>Address</label>
      <input
        type="text"
        value={data.address}
        onChange={(e) => handleChange("address", e.target.value)}
      />

      <label>Salary Expectation</label>
      <input
        type="text"
        value={data.salaryExpectation}
        onChange={(e) => handleChange("salaryExpectation", e.target.value)}
      />

      <label>Transportation</label>
      <input
        type="text"
        value={data.transportation}
        onChange={(e) => handleChange("transportation", e.target.value)}
      />

      <label>Health Status</label>
      <textarea
        value={data.healthStatus}
        onChange={(e) => handleChange("healthStatus", e.target.value)}
      />

      <h2>Languages</h2>
      {data.languages.map((lang, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "6px",
          }}
        >
          <label>Language</label>
          <input
            type="text"
            value={lang.language}
            onChange={(e) => {
              const updated = [...data.languages];
              updated[index].language = e.target.value;
              onChange({ ...data, languages: updated });
            }}
          />
          <label>Written Proficiency</label>
          <input
            type="text"
            value={lang.written}
            onChange={(e) => {
              const updated = [...data.languages];
              updated[index].written = e.target.value;
              onChange({ ...data, languages: updated });
            }}
          />
          <label>Verbal Proficiency</label>
          <input
            type="text"
            value={lang.verbal}
            onChange={(e) => {
              const updated = [...data.languages];
              updated[index].verbal = e.target.value;
              onChange({ ...data, languages: updated });
            }}
          />
          <button
            onClick={() => {
              const updated = data.languages.filter((_, i) => i !== index);
              onChange({ ...data, languages: updated });
            }}
            style={styles.addButton}
          >
            ➖ Remove Language
          </button>
        </div>
      ))}
      <button
        onClick={() => {
          const newLang = { language: "", written: "", verbal: "" };
          onChange({ ...data, languages: [...data.languages, newLang] });
        }}
        style={styles.addButton}
      >
        ➕ Add Language
      </button>

      <label>Summary</label>
      <textarea
        value={data.summary}
        onChange={(e) => handleChange("summary", e.target.value)}
      />

      <h2>Software Skills</h2>
      {data.software.map((sw, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "6px",
          }}
        >
          <label>Software</label>
          <input
            type="text"
            value={sw.software}
            onChange={(e) => {
              const updated = [...data.software];
              updated[index].software = e.target.value;
              onChange({ ...data, software: updated });
            }}
          />
          <label>Years Experience</label>
          <input
            type="text"
            value={sw.years}
            onChange={(e) => {
              const updated = [...data.software];
              updated[index].years = e.target.value;
              onChange({ ...data, software: updated });
            }}
          />
          <label>Professional Ability</label>
          <input
            type="text"
            value={sw.ability}
            onChange={(e) => {
              const updated = [...data.software];
              updated[index].ability = e.target.value;
              onChange({ ...data, software: updated });
            }}
          />
          <button
            onClick={() => {
              const updated = data.software.filter((_, i) => i !== index);
              onChange({ ...data, software: updated });
            }}
            style={styles.addButton}
          >
            ➖ Remove Software
          </button>
        </div>
      ))}
      <button
        onClick={() => {
          const newSW = { software: "", years: "", ability: "" };
          onChange({ ...data, software: [...data.software, newSW] });
        }}
        style={styles.addButton}
      >
        ➕ Add Software
      </button>

      <h2>Experience</h2>
      {data.experience.map((exp, index) => (
        <div
          key={index}
          style={{
            marginBottom: "1rem",
            borderBottom: "1px solid #ccc",
            paddingBottom: "0.5rem",
          }}
        >
          <label>Title</label>
          <input
            type="text"
            value={exp.title}
            onChange={(e) => updateExperience(index, "title", e.target.value)}
          />
          <label>Company</label>
          <input
            type="text"
            value={exp.company}
            onChange={(e) => updateExperience(index, "company", e.target.value)}
          />
          <label>Dates</label>
          <input
            type="text"
            value={exp.dates}
            onChange={(e) => updateExperience(index, "dates", e.target.value)}
          />
          <label>Description</label>
          <textarea
            value={exp.description}
            onChange={(e) =>
              updateExperience(index, "description", e.target.value)
            }
          />
          <button
            onClick={() => removeExperience(index)}
            style={styles.addButton}
          >
            ➖ Remove Experience
          </button>
        </div>
      ))}
      <button onClick={addExperience} style={styles.addButton}>
        ➕ Add Experience
      </button>

      <h2>Education</h2>
      {data.education.map((edu, index) => (
        <div
          key={index}
          style={{
            marginBottom: "1rem",
            borderBottom: "1px solid #ccc",
            paddingBottom: "0.5rem",
          }}
        >
          <label>School</label>
          <input
            type="text"
            value={edu.school}
            onChange={(e) => updateEducation(index, "school", e.target.value)}
          />
          <label>Degree</label>
          <input
            type="text"
            value={edu.degree}
            onChange={(e) => updateEducation(index, "degree", e.target.value)}
          />
          <label>Dates</label>
          <input
            type="text"
            value={edu.dates}
            onChange={(e) => updateEducation(index, "dates", e.target.value)}
          />
          <button
            onClick={() => removeEducation(index)}
            style={styles.addButton}
          >
            ➖ Remove Education
          </button>
        </div>
      ))}
      <button onClick={addEducation} style={styles.addButton}>
        ➕ Add Education
      </button>

      <h2>Projects</h2>
      {data.projects.map((proj, index) => (
        <div
          key={index}
          style={{
            marginBottom: "1rem",
            borderBottom: "1px solid #ccc",
            paddingBottom: "0.5rem",
          }}
        >
          <label>Project Name</label>
          <input
            type="text"
            value={proj.name}
            onChange={(e) => {
              const updated = [...data.projects];
              updated[index] = { ...updated[index], name: e.target.value };
              onChange({ ...data, projects: updated });
            }}
          />
          <label>Description</label>
          <textarea
            value={proj.description}
            onChange={(e) => {
              const updated = [...data.projects];
              updated[index] = {
                ...updated[index],
                description: e.target.value,
              };
              onChange({ ...data, projects: updated });
            }}
          />
          <label>Technologies</label>
          <input
            type="text"
            value={proj.technologies}
            onChange={(e) => {
              const updated = [...data.projects];
              updated[index] = {
                ...updated[index],
                technologies: e.target.value,
              };
              onChange({ ...data, projects: updated });
            }}
          />
          <button
            onClick={() => {
              const updated = data.projects.filter((_, i) => i !== index);
              onChange({ ...data, projects: updated });
            }}
            style={styles.addButton}
          >
            ➖ Remove Project
          </button>
        </div>
      ))}
      <button
        onClick={() => {
          const newProj = { name: "", description: "", technologies: "" };
          onChange({ ...data, projects: [...data.projects, newProj] });
        }}
        style={styles.addButton}
      >
        ➕ Add Project
      </button>

      <h2>Certifications</h2>
      {data.certifications.map((cert, index) => (
        <div
          key={index}
          style={{
            marginBottom: "1rem",
            borderBottom: "1px solid #ccc",
            paddingBottom: "0.5rem",
          }}
        >
          <label>Name</label>
          <input
            type="text"
            value={cert.name}
            onChange={(e) => {
              const updated = [...data.certifications];
              updated[index] = { ...updated[index], name: e.target.value };
              onChange({ ...data, certifications: updated });
            }}
          />
          <label>Issuer</label>
          <input
            type="text"
            value={cert.issuer}
            onChange={(e) => {
              const updated = [...data.certifications];
              updated[index] = { ...updated[index], issuer: e.target.value };
              onChange({ ...data, certifications: updated });
            }}
          />
          <label>Date</label>
          <input
            type="text"
            value={cert.date}
            onChange={(e) => {
              const updated = [...data.certifications];
              updated[index] = { ...updated[index], date: e.target.value };
              onChange({ ...data, certifications: updated });
            }}
          />
          <button
            onClick={() => {
              const updated = data.certifications.filter((_, i) => i !== index);
              onChange({ ...data, certifications: updated });
            }}
            style={styles.addButton}
          >
            ➖ Remove Certification
          </button>
        </div>
      ))}
      <button
        onClick={() => {
          const newCert = { name: "", issuer: "", date: "" };
          onChange({
            ...data,
            certifications: [...data.certifications, newCert],
          });
        }}
        style={styles.addButton}
      >
        ➕ Add Certification
      </button>

      <h2>Skills</h2>
      <input
        type="text"
        value={data.skills.join(", ")}
        onChange={(e) =>
          handleChange(
            "skills",
            e.target.value.split(",").map((s) => s.trim())
          )
        }
      />
      <h2>References</h2>
      {data.references.map((ref, index) => (
        <div
          key={index}
          style={{
            marginBottom: "1rem",
            borderBottom: "1px solid #ccc",
            paddingBottom: "0.5rem",
          }}
        >
          <label>Name</label>
          <input
            type="text"
            value={ref.name}
            onChange={(e) => {
              const updated = [...data.references];
              updated[index] = { ...updated[index], name: e.target.value };
              onChange({ ...data, references: updated });
            }}
          />
          <label>Contact Info</label>
          <input
            type="text"
            value={ref.contact}
            onChange={(e) => {
              const updated = [...data.references];
              updated[index] = { ...updated[index], contact: e.target.value };
              onChange({ ...data, references: updated });
            }}
          />
          <label>Relationship</label>
          <input
            type="text"
            value={ref.relationship}
            onChange={(e) => {
              const updated = [...data.references];
              updated[index] = {
                ...updated[index],
                relationship: e.target.value,
              };
              onChange({ ...data, references: updated });
            }}
          />
          <button
            onClick={() => {
              const updated = data.references.filter((_, i) => i !== index);
              onChange({ ...data, references: updated });
            }}
            style={styles.addButton}
          >
            ➖ Remove Reference
          </button>
        </div>
      ))}
      <button
        onClick={() => {
          const newRef = { name: "", contact: "", relationship: "" };
          onChange({ ...data, references: [...data.references, newRef] });
        }}
        style={styles.addButton}
      >
        ➕ Add Reference
      </button>
    </div>
  );
};

export default FormSection;
