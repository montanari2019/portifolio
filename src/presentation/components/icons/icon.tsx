import styled from "../../styles/icons/icon.module.css"
import { IconComponentModelProps } from "../props/icons.model"
export function IconComponent({ icon, url}:IconComponentModelProps){
    return(
        <div className={styled.contianer}>
            <a href={url} target="_blank">{icon}</a>
        </div>
    )
}