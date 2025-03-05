import { TitleBebasModel } from "@/models/titleBebas.model";
import styled from "../../styles/paragraph/titleBabes.module.css";
import { AcuminLocalFont, bebas } from "@/assets/fonts";
export function TitleBebas({ title }: TitleBebasModel) {
  return (
    <div className={AcuminLocalFont.className}>
      <p className={styled.paragraph}>{title}</p>
    </div>
  );
}
