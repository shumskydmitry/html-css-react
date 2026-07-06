import styled from "styled-components";
import footerBg from "@/assets/images/footer/wave-bg.svg"

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    
    min-height: 307px;
    padding: 20px;
    
    background-image: url("${footerBg}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`