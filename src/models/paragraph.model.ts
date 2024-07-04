import { Property } from 'csstype';

export interface ParagraphModelProps{
    description:string;
    textAlignment: Property.TextAlign,
    textWeight?: Property.FontWeight
}