import {StyledContainer} from "./Container.styled.ts";
import type {ReactNode} from "react";

type ContainerProps = {
    children: ReactNode;
}

export const Container = ({children}: ContainerProps) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

