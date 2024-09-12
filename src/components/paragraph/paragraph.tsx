import { ParagraphModelProps } from "@/models/paragraph.model";
import styled from "../../styles/paragraph/paragraph.module.css";
export function Paragraph({
  description,
  textAlignment,
  textWeight = "normal",
  fontSize = "--FONT-SIZE-SM",
}: ParagraphModelProps) {
  return (
    <div className={styled.container}>
      <p
        style={{
          textAlign: textAlignment,
          fontWeight: textWeight,
          fontSize: `var(${fontSize})`,
        }}
      >
        {description.split("\n").map((line) => {
          return (
            <>
              {line}
              <br />
            </>
          );
        })}
      </p>
    </div>
  );
}
