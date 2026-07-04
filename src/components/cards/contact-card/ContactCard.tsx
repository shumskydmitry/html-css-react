import styled from "styled-components";

type ContactCardProps = {
    href: string,
    icon: string,
    title: string
}

export const ContactCard = ({href, icon, title}: ContactCardProps) => {
    return (
        <StyledContactCard href={href}>
            <div>
                <img src={icon} alt={title}/>
                <p>
                    {title}
                </p>
            </div>
        </StyledContactCard>
    )
}

const StyledContactCard = styled.a`
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 30px;
        //width: 240px;
        min-height: 236px;
    }
`