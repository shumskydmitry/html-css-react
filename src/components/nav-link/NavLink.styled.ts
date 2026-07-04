import styled, {css} from "styled-components";
import type {NavLinkProps} from "./NavLink";

export const StyledNavLink = styled.a<NavLinkProps>`
    display: inline-flex;
    color: #212121;
    padding: 10px 18px;
    
    font-size: 25px;

    ${({variant}) =>
    variant === "primary" &&
    css`
            border-radius: 10px;
            color: #FFFFFF;
            background-color: #608AF5;
        `
}
`