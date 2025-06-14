// src/components/TemplateViewer.tsx
import React from "react";
import type { CVData } from "../types/CVData";
import TemplateOne from "../templates/TemplateOne";
import TemplateTwo from "../templates/TemplateTwo";
import TemplateThree from "../templates/TemplateThree";

interface Props {
  data: CVData;
  template: string;
}

const TemplateViewer: React.FC<Props> = ({ data, template }) => {
  switch (template) {
    case "template1":
      return <TemplateOne data={data} />;
    case "template2":
      return <TemplateTwo data={data} />;
    case "template3":
      return <TemplateThree data={data} />;
    default:
      return <div>Template not found</div>;
  }
};

export default TemplateViewer;



