import { TitleBebasModel } from "@/models/titleBebas.model";
import styled from "../../styles/paragraph/titleBabes.module.css"
import { bebas } from "@/assets/fonts";
export function TitleBebas({ title }: TitleBebasModel){
    return (
        <div className={bebas.className}>
            <p className={styled.paragraph}>{title}</p>
        </div>
    )
}