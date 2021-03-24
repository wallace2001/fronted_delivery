import styled from 'styled-components';

export const Close = styled.div`
    width: 50px;
    height: 50px;
    z-index: 999;
    /* display: ${({ onclick }) => onclick ? 'block' : 'none'}; */
    opacity: ${({ onclick }) => onclick ? 1 : 0};
    border-radius: 16px;
    position: relative;
    left: 40%;
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

        /* @media screen and (max-width: 1000px){
            left: ${({ onclick }) => onclick ? '360%' : '15%'};
        }

        @media screen and (max-width: 600px){
            left: ${({ onclick }) => onclick ? '400%' : '15%'};
        } */
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

        /* @media screen and (max-width: 1000px){
            left: ${({ onclick }) => onclick ? '360%' : '15%'};
        }

        @media screen and (max-width: 600px){
            left: ${({ onclick }) => onclick ? '400%' : '15%'};
        } */
    }


`;