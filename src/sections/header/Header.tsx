import mainLogo from '../../assets/icons/main-logo.svg';
import {List, Nav} from "./Header.styled";
import {Container} from "../../layout/container/Container";
import {NavLink} from "../../components/nav-link/NavLink.tsx";

export const Header = () => {
    return (
        <header>
            <Container>
                <Nav>
                    <img src={mainLogo} alt="Главный логотип сайта"/>
                    <List>
                        <li>
                            <NavLink href="#">Обо мне</NavLink>
                        </li>
                        <li>
                            <NavLink href="#">Навыки</NavLink>
                        </li>
                        <li>
                            <NavLink href="#">Проекты</NavLink>
                        </li>
                        <li>
                            <NavLink href="#" variant="primary">Контакты</NavLink>
                        </li>
                    </List>
                </Nav>
            </Container>
        </header>
    )
}

