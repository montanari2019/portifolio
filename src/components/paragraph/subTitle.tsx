

import { SubTitleModel } from "@/models/subTitle.model"
import styled from "../../styles/paragraph/titleBabes.module.css"
export function SubTitle({ value }: SubTitleModel){
    return (
        <p className={styled.subTitle}>{value}</p>
    )
}