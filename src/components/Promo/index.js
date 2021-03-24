import styled from 'styled-components';

export const Promo = styled.div`
    width: 100%;
    height: 100%;

`;

Promo.Img = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url(${({ backgroundImg }) => backgroundImg ? backgroundImg : ''});
`;

Promo.black = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.backgroundBlack};

`;

Promo.Content = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

Promo.Box = styled.div`
    width: 70%;
    background-color: ${({ theme }) => theme.colors.boxPromo};
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    padding: 5%;

    h1{
        text-align: center;
        border-bottom: 1px solid black;
        margin-bottom: 50px;
    }
`;

Promo.Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    padding: 2%;
    margin-bottom: 5%;

`;

Promo.Column = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    img{
        width: 200px;
        height: 150px;
        border-radius: 10px;

        object-fit: contain;
    }

    h2{
        text-align: center;
    }

    p{
        padding: 0px 15% 0px 15%;
        text-align: center;
    }

    button{
        width: 200px;
        height: 50px;

        background-color: ${({ theme }) => theme.colors.buttonPrice};
        outline: none;
        border: none;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;

        &:hover{
            transform: scale(1.04);
        }
        &:focus{
            border: 1px solid white;
        }

        color: white;
        font-size: 20px;
    }
`;

Promo.Align = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;

    @media screen and (max-width: 968px){
        flex-direction: column;
    }

`;