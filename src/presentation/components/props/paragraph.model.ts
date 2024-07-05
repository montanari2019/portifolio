import { Property } from 'csstype';
import { CssVariable } from 'next/dist/compiled/@next/font';

export interface ParagraphModelProps{
    description:string;
    textAlignment: Property.TextAlign,
    textWeight?: Property.FontWeight,
    fontSize?: "--FONT-SIZE-SM" | "--FONT-SIZE-MD" | "--FONT-SIZE-LG"
}