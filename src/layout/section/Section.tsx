import type {ReactNode} from "react";
import styled from "styled-components";

type SectionProps = {
    children: ReactNode;
    anchor?: string;
}

export const Section = ({children, anchor}: SectionProps) => {
    return (
        <StyledSection id={anchor}>
            {children}
        </StyledSection>
    )
}

const StyledSection = styled.section`
    padding: 60px 0;

    scroll-margin-top: 84px;
`