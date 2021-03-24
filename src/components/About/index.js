import styled from 'styled-components';

export const About = styled.div`
    width: 100%;
    height: 100%;
`;

About.Wrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

About.Img = styled.div`
    width: 40%;
    height: 100%;

    background-image: url(${({ backgroundImg }) => backgroundImg ? backgroundImg : ''});
    background-size: cover;
`;

About.Content = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div{
        p{
        text-align: center;
        padding: 0px 35% 0px 35%;
        line-height: 25px;

        @media screen and (max-width: 1580px){
            padding: 0px 15% 0px 15%;
        }

        @media screen and (max-width: 1280px){
            padding: 0px 10% 0px 10%;
        }
    }
    }


    button{
        width: 200px;
        height: 50px;

        border: none;
        outline: none;
        background-color: ${({ theme }) => theme.colors.buttonAbout};
        border-radius: 10px;
        color: white;
    }

`;