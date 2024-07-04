import { IconComponentModelProps } from "@/models/icons.model";
import styled from "../../styles/icons/icon.module.css"
export function IconComponent({ icon, url}:IconComponentModelProps){
    return(
        <div className={styled.contianer}>
            <a href={url} target="_blank">{icon}</a>
        </div>
    )
}