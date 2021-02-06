import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

Nav.Icon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
`;

Nav.Content = styled.div`
    background-color: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ onclick }) => onclick ? '0' : '-100%'};
    transition: 350ms;
    z-index: 10;
`;

Nav.Wrap = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    margin: 100px 0px 100px 0px;

    @media screen and (max-width: 600px){
        margin: 150px 0px 150px 0px;
    }

`;

Nav.Link = styled.a`
    width: 90px;
    font-size: 20px;
    text-align: center;
    
    text-decoration: none;
    cursor: pointer;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e3c012;
    text-decoration: none;
`;