import styled from "styled-components";
import contactCardBg from "@/assets/images/contacts/contact-card-bg.svg"

export const StyledContactCard = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 240px;
    min-height: 236px;
`

export const ContactCardImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 166px;
    height: 160px;
    background-image: url("${contactCardBg}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    svg {
        width: 84px;
        height: 84px;
        color: #fff;
    }
`

export const ContactCardDescription = styled.p`
    font-size: 35px;
`