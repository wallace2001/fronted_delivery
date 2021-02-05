import styled from 'styled-components';

export const Box = styled.div`
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.colorHeader};

    padding: 0px 4% 0px 4%;
`;

Box.Header = styled.div`

    h2{
        color: ${({ theme }) => theme.colors.primary};
    }
`;