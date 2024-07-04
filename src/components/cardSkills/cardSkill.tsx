"use client";
import { SkillModelProps } from "@/models/skill.model";
import styled from "../../styles/cardSkill/cardSkill.module.css";
import imgLoog from "../../assets/nestjs.svg";

export function CardSkill({
  bgColor,
  color,
  description,
  iconUrl,
  title,
  url,
}: SkillModelProps) {
  const style = {
    border: `solid 1px ${color}`,
    backgroundColor: bgColor,
    "--pulse-color": color,
  } as React.CSSProperties;
  return (

      <a href={url} target="_blank" className={styled.container} style={style}>
        <img src={iconUrl} alt={title} className={styled.imgItem} />
      </a>
   
  );
}
