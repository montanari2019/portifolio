"use client";

import styled from "../styles/button/button.module.css";
import { CSSProperties } from "react";
import { ButtonModelProps } from "./props/buttons.model";

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
