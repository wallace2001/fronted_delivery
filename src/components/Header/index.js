import styled from 'styled-components';

export const Box = styled.div`
    /* width: 100%; */
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    position: ${({ fixed }) => fixed ? 'fixed' : 'none'};

    background-color: ${({ theme, fixed }) => fixed ? theme.colors.backgroundBlack : theme.colors.colorHeader};

    padding: 0px 4% 0px 4%;
`;

Box.Header = styled.div`
    h2{
        color: ${({ theme }) => theme.colors.primary};
    }
`;