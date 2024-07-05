
import { NavItem } from "./navItem";
import styled from "../../styles/header/header.module.css"
import { navItens } from "@/presentation/utils/header.nav";

export function Header() {
  return (
    <div className={styled.container}>
      {navItens.map((iten) => {
        return (
          <NavItem
            locality={iten.locality}
            title={iten.title}
            key={iten.title}
          />
        );
      })}
    </div>
  );
}
