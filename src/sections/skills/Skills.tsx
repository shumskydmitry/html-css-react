import {SkillCard} from "../../components/cards/skill-card/SkillCard";
import {Container} from "../../layout/container/Container";
import {Section} from "../../layout/section/Section";
import {SkillsList} from "./Skills.styled";
import {SectionTitle} from "../../components/section-title/SectionTitle";
import {SectionContent} from "../../layout/section-content/SectionContent";
import frontEndSkill from "@/assets/images/skills/front-end-skill.svg"
import backEndSkill from "@/assets/images/skills/back-end-skill.svg"
import designSkill from "@/assets/images/skills/design-skill.svg"

export const Skills = () => {
    return (
        <Section anchor="skills">
            <Container>
                <SectionContent>
                    <SectionTitle>
                        Мои <span>навыки</span>
                    </SectionTitle>
                    <SkillsList>
                        <li>
                            <SkillCard src={frontEndSkill} alt="Навык Front-End" title="Front-End Developer" text="(Sass, Bootstrap, Tailwind)"/>
                        </li>
                        <li>
                            <SkillCard src={backEndSkill} alt="Навык Back-End" title="Back-End Developer" text="(NodeJS, Laravel, Codeigniter)"/>
                        </li>
                        <li>
                            <SkillCard src={designSkill} alt="Навык Дизайн" title="UI/UX Designer" text="(Figma, Zeplin, Adobe XD)"/>
                        </li>
                    </SkillsList>
                </SectionContent>
            </Container>
        </Section>
    )
}