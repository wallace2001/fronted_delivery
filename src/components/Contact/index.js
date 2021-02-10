import styled from 'styled-components';

export const Contact = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;


Contact.bg = styled.div`
    width: 50%;
    height: 100%;
    background-image: url(${({ backgroundImg }) => backgroundImg ? backgroundImg : ''});
    background-size: cover;
`;

Contact.Content = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 10% 0px 10%;
`;

Contact.Box = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;

    padding: 2% 2% 0px 2%;


    @media screen and (max-width: 660px){
        align-items: center;
        flex-direction: column;
    }
`;

Contact.Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    h1{
        text-align: center;
    }

    h4{
        text-align: center;
        padding: 3%;
        border: 1px dashed black;
    }
`;