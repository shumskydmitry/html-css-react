import {ReactNode} from "react";
import {StyledNavLink} from "./NavLink.styled";

export type NavLinkProps = {
    href: string;
    children: ReactNode;
    variant?: "default" | "primary";
}

export const NavLink = ({href, children, variant="default"}: NavLinkProps) => {
    return (
        <StyledNavLink href={href} variant={variant}>
            {children}
        </StyledNavLink>
    )
}

