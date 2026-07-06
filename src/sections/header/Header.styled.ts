import styled from "styled-components";

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    z-index: 100;

    background: linear-gradient(
            to bottom,
            #fff 0%,
            #fff 75%,
            rgba(255, 255, 255, 0) 100%
    );
`

export const Nav = styled.nav`
    padding: 13px 10px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const List = styled.ul`
    list-style-type: none;
    padding-left: 0;
    
    display: flex;
    align-items: center;
    gap: 3rem;
`