import styled from 'styled-components';

export const Menu = styled.div`
    width: 50px;
    height: 50px;
    z-index: 999;
    /* display: ${({ onclick }) => onclick ? 'none' : 'block'}; */
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
    background-color: rgba(31, 17, 0, 1);

    h1{
        color: ${({ theme }) => theme.colors.primary};
        padding-top: 20px;
        text-align: center;
    }

`;

Menu.Content = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    padding: 0px 4% 0px 4%;
`;

Menu.Slick = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 6%;
    padding-bottom: 5%;

    h4{
        color: ${({ theme }) => theme.colors.primary};
        padding: 0px 20% 0px 20%;
        text-align: center;
    }

    h1{
        color: ${({ theme }) => theme.colors.primary};
    }

    img{
        width: 200px;
        height: 150px;
        border-radius: 10px;
        -webkit-box-shadow: 14px 18px 0px -1px rgba (230,157,0,1);
        -moz-box-shadow: 14px 18px 0px -1px rgba (230,157,0,1);
        box-shadow: 14px 18px 0px -1px rgba (230,157,0,1);
    }

    button{
        width: 150px;
        height: 50px;

        background-color: #bf9300;
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


