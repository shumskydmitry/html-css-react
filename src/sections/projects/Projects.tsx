import {ProjectCard} from "../../components/cards/project-card/ProjectCard";
import {Container} from "../../layout/container/Container";
import {Section} from "../../layout/section/Section";
import {ProjectsList} from "./Projects.styled";
import {SectionTitle} from "../../components/section-title/SectionTitle";
import {SectionContent} from "../../layout/section-content/SectionContent.tsx";

export const Projects = () => {
    return (
        <Section>
            <Container>
                <SectionContent>
                    <SectionTitle>
                        Реализованные <span>проекты</span>
                    </SectionTitle>
                    <ProjectsList>
                        <li>
                            <ProjectCard/>
                        </li>
                        <li>
                            <ProjectCard/>
                        </li>
                        <li>
                            <ProjectCard/>
                        </li>
                    </ProjectsList>
                </SectionContent>
            </Container>
        </Section>
    )
}


