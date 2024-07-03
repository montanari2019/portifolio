import { ButtonHTMLAttributes, ReactElement  } from "react";

export interface ButtonModelProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string
    field: boolean,
    width?: number
    iconButton?: ReactElement
}