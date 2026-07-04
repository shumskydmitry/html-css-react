import {ReactNode} from "react";
import styled from "styled-components";

type ContentBoxProps = {
    children?: ReactNode;
}

export const SectionContent = ({children}: ContentBoxProps) => {
    return(
        <StyledSectionContent>
            {children}
        </StyledSectionContent>
    )
}

const StyledSectionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
`