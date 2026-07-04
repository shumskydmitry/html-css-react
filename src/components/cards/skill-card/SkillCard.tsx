import skillFrontEndImg from '../../../assets/images/skills/skill-front-end.svg'
import {StyledSkillCard} from "./SkillCard.styled";

export const SkillCard = () => {
   return (
       <StyledSkillCard>
           <img src={skillFrontEndImg} alt=""/>
           <h3>Некий навык</h3>
           <p>Здесь находится подробное описание навыка, которое будет меняться от карточки к карточке.</p>
       </StyledSkillCard>
   )
}

