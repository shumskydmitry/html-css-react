import {ProjectCardImg, StyledProjectCard} from "@/components/cards/project-card/ProjectCard.styled.ts";

type ProjectCardProps = {
    href: string;
    src: string;
    alt: string;
}

export const ProjectCard = ({href, src, alt}: ProjectCardProps) => {
    return (
        <StyledProjectCard href={href}>
            <ProjectCardImg src={src} alt={alt}/>
        </StyledProjectCard>
    )
}



