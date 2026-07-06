import {Container} from "../../layout/container/Container.tsx";
import {SectionContent} from "../../layout/section-content/SectionContent.tsx";
import {StyledFooter} from "@/sections/footer/Footer.styled.ts";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <SectionContent>
                    <p>
                        Created by Dmitry Shumsky
                    </p>
                </SectionContent>
            </Container>
        </StyledFooter>
    )
}