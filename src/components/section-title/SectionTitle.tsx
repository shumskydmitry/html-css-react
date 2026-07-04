import type {ReactNode} from "react";
import {StyledSectionTitle} from "./SectionTitle.styled.ts";

type SectionTitleProps = {
    children: ReactNode;
}

export const SectionTitle = ({children}: SectionTitleProps) => {
    return (
        <StyledSectionTitle>
            {children}
        </StyledSectionTitle>
    )
}