import skillFrontEndImg from '../../../assets/images/skills/skill-front-end.svg'
import {StyledProjectCard} from "../../../sections/projects/Projects.styled.ts";

export const ProjectCard = () => {
    return (
        <StyledProjectCard>
            <a href="#">
                <img src={skillFrontEndImg} alt=""/>
            </a>
        </StyledProjectCard>
    )
}

