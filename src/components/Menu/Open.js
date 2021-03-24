import styled from 'styled-components';

export const Menu = styled.div`
    width: 50px;
    height: 50px;
    z-index: 999;
    /* display: ${({ onclick }) => onclick ? 'none' : 'block'}; */
    opacity: ${({ onclick }) => onclick ? 0 : 1};
    border-radius: 16px;
    position: relative;

    cursor: pointer;

    &::after{
        content: '';
        position: absolute;
        top: ${({ onclick }) => onclick ? '45%' : '35%'};
        left: ${({ onclick }) => onclick ? '290%' : '15%'};


        width:${({ onclick }) => onclick ? '50%' : '70%'};
        height: 2px;

        border-radius: 10px;
        transition: 1s ease;

        transform: ${({ onclick }) => onclick ? 'rotate(225deg)' : ''};

        background-color: ${({ theme }) => theme.colors.primary};

        @media screen and (max-width: 1000px){
            left: ${({ onclick }) => onclick ? '360%' : '15%'};
        }

        @media screen and (max-width: 600px){
            left: ${({ onclick }) => onclick ? '400%' : '15%'};
        }
    }

    &::before{
        content: '';
        position: absolute;
        top: ${({ onclick }) => onclick ? '45%' : '60%'};
        left: ${({ onclick }) => onclick ? '290%' : '40%'};

        width:${({ onclick }) => onclick ? '50%' : '40%'};
        height: 2px;

        border-radius: 10px;
        transition: 1s ease;

        transform: ${({ onclick }) => onclick ? 'rotate(310deg)' : ''};

        background-color: ${({ theme }) => theme.colors.primary};

        @media screen and (max-width: 1000px){
            left: ${({ onclick }) => onclick ? '360%' : '15%'};
        }

        @media screen and (max-width: 600px){
            left: ${({ onclick }) => onclick ? '400%' : '15%'};
        }
    }


`;


Menu.Container = styled.div`
    width: 100%;
    height: 100%;

    background-color: ${({ theme}) => theme.colors.backgroundContainerMenu};
    background-image: url(${({ backgroundImg }) => backgroundImg ? backgroundImg : ''});
    background-size: cover;

    h1{
        color: ${({ theme }) => theme.colors.primary};
        padding-top: 20px;
        text-align: center;
    }

`;

Menu.Black = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.backgroundBlack};
`;

Menu.Content = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: ${({ theme }) => theme.colors.backgroundProducts};

    padding: 0px 5% 5% 5%;

    h2{
        font-size: 30px;
        border-bottom: 1px solid black;
    }
`;

Menu.Wrap = styled.div`
    width: 60%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    padding-top: 5%;

    h4{
        color: ${({ theme }) => theme.colors.primary};
    }

    h1{
        color: ${({ theme }) => theme.colors.primary};
    }

    img{
        width: 200px;
        height: 150px;
        border-radius: 10px;

        object-fit: contain;
    }

    @media screen and (max-width: 1624px){
        flex-direction: column;
    }

`;

Menu.column1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h4{
        color: black;
        font-size: 20px;
    }

    @media screen and (max-width: 400px){
        
    }
`;

Menu.column2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-top: 50px;

    p{
        padding: 0px 5% 0px 5%;
        text-align: center;
    }

    @media screen and (max-width: 760px){
        padding-top: 10px;
        flex-direction: column;
    }
`;

Menu.column3 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-top: 50px;

    button{
        width: 150px;
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

    @media screen and (max-width: 760px){
        padding-top: 10px;
        flex-direction: column;
    }
`;


