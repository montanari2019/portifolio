
import styled from '../../styles/header/navItem.module.css'
import { HeaderModelProps } from '../props/header.models';
export function NavItem({ locality, title }: HeaderModelProps ) {
  return     (
    <div>
      <a className={styled.link} href={locality}>{title}</a>
    </div>
  );
}
