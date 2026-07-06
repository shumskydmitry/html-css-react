import {StyledSkillCard} from "./SkillCard.styled";

type SkillCardProps = {
    src: string;
    title: string;
    alt: string;
    text: string;
}

export const SkillCard = ({src, title, alt, text}: SkillCardProps) => {
   return (
       <StyledSkillCard>
           <img src={src} alt={alt}/>
           <h3>{title}</h3>
           <p>{text}</p>
       </StyledSkillCard>
   )
}

