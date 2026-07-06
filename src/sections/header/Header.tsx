import mainLogo from '../../assets/icons/main-logo.svg';
import {List, Nav, StyledHeader} from "./Header.styled";
import {Container} from "../../layout/container/Container";
import {NavLink} from "../../components/nav-link/NavLink.tsx";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <a href="#">
                        <img src={mainLogo} alt="Главный логотип сайта"/>
                    </a>
                    <List>
                        <li>
                            <NavLink href="#hero">Обо мне</NavLink>
                        </li>
                        <li>
                            <NavLink href="#skills">Навыки</NavLink>
                        </li>
                        <li>
                            <NavLink href="#projects">Проекты</NavLink>
                        </li>
                        <li>
                            <NavLink href="#contacts" variant="primary">Контакты</NavLink>
                        </li>
                    </List>
                </Nav>
            </Container>
        </StyledHeader>
    )
}

