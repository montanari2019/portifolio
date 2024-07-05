

import { bebas } from "@/presentation/assets/fonts";
import styled from "../../styles/sessionTitle/sessionTitle.module.css"
import { SessionTitleModelProps } from "../props/sessionTitle.model";

export function SessionTitle({ title }:SessionTitleModelProps){
    return (
        <div className={`${styled.container} ${bebas.className}` } >
            <h1 className={styled.title}>{title}</h1>
            <div className={styled.separator}></div>
        </div>
    )
}