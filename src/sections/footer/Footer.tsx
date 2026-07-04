import {Container} from "../../layout/container/Container.tsx";
import {SectionContent} from "../../layout/section-content/SectionContent.tsx";

export const Footer = () => {
    return (
        <footer>
            <Container>
                <SectionContent>
                    <p>
                        Created by Dmitry Shumsky
                    </p>
                </SectionContent>
            </Container>
        </footer>
    )
}