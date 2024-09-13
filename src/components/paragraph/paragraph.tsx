

import { ParagraphModelProps } from "@/models/paragraph.model";
import styled from "../../styles/paragraph/paragraph.module.css";
import { randomUUID } from "crypto";
export function Paragraph({
  description,
  textAlignment,
  textWeight = "normal",
  fontSize = "--FONT-SIZE-SM",
}: ParagraphModelProps) {
  const lines = description.split("\n").map((line) => {
    return {
      line: line,
      id: Math.random().toString(36),
    };
  });
  return (
    <div className={styled.container}>
      {lines.map((index) => {
        return (
          <p
            key={index.id}
            style={{
              textAlign: textAlignment,
              fontWeight: textWeight,
              fontSize: `var(${fontSize})`,
            }}
          >
            {index.line}
            <br />
          </p>
        );
      })}
    </div>
  );
}
