"use client";

import React, { useMemo } from "react";
import styled from "../../styles/iframe/iframe.module.css";

interface IframeProps {
  title: string;
  src: string;
}

function IframeComponent({ src, title }: IframeProps) {
  return (
    <div className={styled.container}>
      <p>{title}</p>
      <iframe
        className={styled.iframeStyle}
        src={src}
        title={title}
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default React.memo(IframeComponent);
