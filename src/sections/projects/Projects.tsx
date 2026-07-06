import {ProjectCard} from "../../components/cards/project-card/ProjectCard";
import {Container} from "../../layout/container/Container";
import {Section} from "../../layout/section/Section";
import {ProjectsList} from "./Projects.styled";
import {SectionTitle} from "../../components/section-title/SectionTitle";
import {SectionContent} from "../../layout/section-content/SectionContent";
import project1 from "@/assets/images/projects/sendpay.svg";
import project2 from "@/assets/images/projects/e-commerce.svg";
import project3 from "@/assets/images/projects/beats-learning.svg";

export const Projects = () => {
    return (
        <Section anchor="projects">
            <Container>
                <SectionContent>
                    <SectionTitle>
                        Реализованные <span>проекты</span>
                    </SectionTitle>
                    <ProjectsList>
                        <li>
                            <ProjectCard href="#" src={project1} alt="Проект Sendpay"/>
                        </li>
                        <li>
                            <ProjectCard href="#" src={project2} alt="Проект E-commerce"/>
                        </li>
                        <li>
                            <ProjectCard href="#" src={project3} alt="Проект BeatsLearning"/>
                        </li>
                    </ProjectsList>
                </SectionContent>
            </Container>
        </Section>
    )
}


