import styled from "styled-components";

export const HeroWrapper = styled.div`
    display: flex;
    gap: 65px;
`
export const HeroTitle = styled.h1`
    color: #002265;
    font-weight: bold;
    
    span {
        font-weight: normal;
    }
`
export const HeroImage = styled.img`
    max-width: 100%;
    height: auto;
`

export const HeroTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    //justify-content: center;
    //align-items: center;
    gap: 30px;
`