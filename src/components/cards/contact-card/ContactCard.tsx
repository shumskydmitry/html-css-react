import {
    ContactCardDescription,
    ContactCardImgWrapper,
    StyledContactCard
} from "@/components/cards/contact-card/ContactCard.styled.ts";
import {Icon} from "@/components/icon/Icon.tsx";

type ContactCardProps = {
    href: string,
    iconId: string,
    text: string
}

export const ContactCard = ({href, iconId, text}: ContactCardProps) => {
    return (
        <StyledContactCard href={href}>
            <ContactCardImgWrapper>
                <Icon iconId={iconId}/>
            </ContactCardImgWrapper>
            <ContactCardDescription>
                {text}
            </ContactCardDescription>
        </StyledContactCard>
    )
}

