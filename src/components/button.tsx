"use client";

import { ButtonModelProps } from "@/models/buttons.model";
import styled from "../styles/button/button.module.css";
import { CSSProperties } from "react";

export function Button({
  field,
  title,
  width = 200,
  iconButton,
  ...resto
}: ButtonModelProps) {
  return (
    <button
      {...resto}
      style={{ width: width }}
      className={field ? styled.buttonField : styled.buttonNotField}
    >
      {iconButton ? <span>{iconButton}</span> : null}
      <p> {title}</p>
    </button>
  );
}
