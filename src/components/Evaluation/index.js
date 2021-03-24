import styled from 'styled-components';

export const Evaluation = styled.div`
    width: 100%;
    height: 100%;
`;

Evaluation.Bg = styled.div`
    width: 100%;
    height: 100%;

    background-image: url(${({ backgroundImg }) => backgroundImg ? backgroundImg : ''});
`;

Evaluation.Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`;

Evaluation.Box = styled.div`
    width: 600px;
    border-radius: 10px;
    
    padding: 3%;
    background-color: ${({ theme }) => theme.colors.backgroundProducts};

    @media screen and (max-width: 768px){
        width: 80%;
    }

    h2{
        text-align: center;
    }


    button{
        width: 180px;
        height: 50px;

        border: none;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.colors.boxEvaluation};
        outline: none;
        cursor: pointer;

        &:hover{
            transform: scale(1.02);
        }

        &:focus{
            border: 0.5px solid black;
        }
    }
`;

Evaluation.Name = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 20px;

    input{
        width: 90%;
        height: 30px;
        margin: 0 auto;
        border-radius: 10px;
        text-align: center;

        outline: black;
        border: none;

        &:focus{
            border: 1px solid black;
        }
    }

    label{
        margin-left: 30px;
        margin-bottom: 10px;
    }
`;

Evaluation.email = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-bottom: 20px;

    input{
        width: 90%;
        height: 30px;
        margin: 0 auto;
        border-radius: 10px;
        text-align: center;

        outline: black;
        border: none;

        &:focus{
            border: 1px solid black;
        }

    }

    label{
        margin-left: 30px;
        margin-bottom: 10px;
    }
`;

Evaluation.text = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    textarea{
        width: 90%;
        height: 130px;
        resize: none;
        margin: 0 auto;
        border-radius: 10px;
        padding: 2%;

        outline: black;
        border: none;

        &:focus{
            border: 1px solid black;
        }
    }

    label{
        margin-bottom: 10px;
        margin-left: 30px;

        strong{
            font-size: 16px;
            color: ${({ theme }) => theme.colors.strongEvaluation};
        }
    }
`;

Evaluation.Star = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    label{
        margin-right: 10px;
        cursor: pointer;
    }

    input{
        display: none;
    }
`;

Evaluation.Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 20px;

    button{
        width: 180px;
        height: 50px;

        border: none;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.colors.boxEvaluation};
        outline: none;
        cursor: pointer;

        &:hover{
            transform: scale(1.02);
        }

        &:focus{
            border: 0.5px solid black;
        }
    }
`;

Evaluation.Info = styled.div`
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    padding: 3%;
    background-color: ${({ theme }) => theme.colors.backgroundProducts};

    @media screen and (max-width: 768px){
        width: 80%;
    }

    h2{
        text-align: center;
    }

    h3{
        text-align: center;
    }

    button{
        width: 180px;
        height: 50px;

        border: none;
        border-radius: 10px;
        background-color: ${({ theme }) => theme.colors.boxEvaluation};
        outline: none;
        cursor: pointer;

        &:hover{
            transform: scale(1.02);
        }

        &:focus{
            border: 0.5px solid black;
        }
    }
`;