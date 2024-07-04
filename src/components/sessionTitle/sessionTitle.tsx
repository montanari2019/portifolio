import { SessionTitleModelProps } from "@/models/sessionTitle.model";


import styled from "../../styles/sessionTitle/sessionTitle.module.css"
import { bebas } from "@/assets/fonts";



export function SessionTitle({ title }:SessionTitleModelProps){
    return (
        <div className={`${styled.container} ${bebas.className}` } >
            <h1 className={styled.title}>{title}</h1>
            <div className={styled.separator}></div>
        </div>
    )
}