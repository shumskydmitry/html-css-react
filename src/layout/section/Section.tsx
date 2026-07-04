import type {ReactNode} from "react";
import {StyledSection} from "./Section.styled.ts";

type SectionProps = {
    children: ReactNode;
}

export const Section = ({children}: SectionProps) => {
    return (
        <StyledSection>
            {children}
        </StyledSection>
    )
}