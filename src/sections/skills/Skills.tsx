import {SkillCard} from "../../components/cards/skill-card/SkillCard";
import {Container} from "../../layout/container/Container";
import {Section} from "../../layout/section/Section";
import {SkillsList} from "./Skills.styled";
import {SectionTitle} from "../../components/section-title/SectionTitle";
import {SectionContent} from "../../layout/section-content/SectionContent.tsx";

export const Skills = () => {
    return (
        <Section>
            <Container>
                <SectionContent>
                    <SectionTitle>
                        Мои <span>навыки</span>
                    </SectionTitle>
                    <SkillsList>
                        <li>
                            <SkillCard/>
                        </li>
                        <li>
                            <SkillCard/>
                        </li>
                        <li>
                            <SkillCard/>
                        </li>
                    </SkillsList>
                </SectionContent>
            </Container>
        </Section>
    )
}