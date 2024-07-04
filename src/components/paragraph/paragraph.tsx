import { ParagraphModelProps } from "@/models/paragraph.model";
import styled from "../../styles/paragraph/paragraph.module.css";
export function Paragraph({
  description,
  textAlignment,
  textWeight = "normal",
}: ParagraphModelProps) {
  return (
    <div className={styled.container}>
      <p style={{ textAlign: textAlignment, fontWeight: textWeight }}>
      {
      
        description.split('\n').map((line, index) => {
            return(
                <>
                    {line}
                    <br/>
                </>
            )
        })
      
      
      }
      </p>
    </div>
  );
}
