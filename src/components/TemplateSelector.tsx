// src/components/TemplateSelector.tsx
import React from "react";

interface Props {
  selected: string;
  onChange: (templateId: string) => void;
}

const TemplateSelector: React.FC<Props> = ({ selected, onChange }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label
        style={{ fontWeight: "bold", display: "block", marginBottom: "0.5rem" }}
      >
        Select a Template
      </label>
      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        style={{ padding: "8px", width: "100%", fontSize: "1rem" }}
      >
        <option value="template1">Template 1 - Basic</option>
        <option value="template2">Template 2 - Professional</option>
        <option value="template3">Template 3 - Modern</option>
      </select>
    </div>
  );
};

export default TemplateSelector;
