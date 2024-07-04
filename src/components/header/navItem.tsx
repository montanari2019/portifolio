import { HeaderModelProps } from "@/models/header.models";
import styled from '../../styles/header/navItem.module.css'
export function NavItem({ locality, title }: HeaderModelProps) {
  return (
    <div>
      <a className={styled.link} href={locality}>{title}</a>
    </div>
  );
}
