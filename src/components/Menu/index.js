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
        left: ${({ onclick }) => onclick ? '330%' : '15%'};


        width:${({ onclick }) => onclick ? '50%' : '70%'};
        height: 2px;

        border-radius: 10px;
        transition: 1s ease;

        transform: ${({ onclick }) => onclick ? 'rotate(225deg)' : ''};

        background-color: ${({ theme }) => theme.colors.primary};

        /* @media screen and (max-width: 1000px){
            left: ${({ onclick }) => onclick ? '360%' : '15%'};
        } */
    }

    &::before{
        content: '';
        position: absolute;
        top: ${({ onclick }) => onclick ? '45%' : '60%'};
        left: ${({ onclick }) => onclick ? '330%' : '30%'};

        width:${({ onclick }) => onclick ? '50%' : '40%'};
        height: 2px;

        border-radius: 10px;
        transition: 1s ease;

        transform: ${({ onclick }) => onclick ? 'rotate(310deg)' : ''};

        background-color: ${({ theme }) => theme.colors.primary};
        /* @media screen and (max-width: 1000px){
            left: ${({ onclick }) => onclick ? '360%' : '15%'};
        } */
    }


`;
