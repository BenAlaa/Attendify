import styled from 'styled-components';

export const LoginContainer = styled.div.attrs({

})`
    margin-top: 100px;
    padding: 50px;
    border-radius: 20px;
    transition: all 250ms ease-in-out;
    -webkit-box-shadow: 0px 5px 20px 1px #b7b5bb4d;
    -moz-box-shadow: 0px 5px 20px 1px #b7b5bb4d;
    box-shadow: 0px 5px 20px 1px #b7b5bb4d;
`;

export const LoginTitle = styled.h1.attrs({

})`
    color: #6c757d;
`;

export const LoginSlogan = styled.div.attrs({

})`
    font-size: 15px;
    font-weight:500;
    color:#32F7E2;
    max-width:300px;
    margin-bottom: 50px;
`;

export const LoginForm = styled.form.attrs({
    className: "col-12"
})``;

export const Button = styled.button.attrs({
    type:"submit"
})`
    font-size: 18px;
    height: 40px;
    width: 200px;
    display: flex;
    margin:auto;
    justify-content: center;
    padding: 5px 20px;
    border: none;
    background-color: #2F8DA9;
    color: #fff;
    border-radius: 20px;
    margin-top: 50px;
    transition: all 250ms ease-in-out;
    -webkit-box-shadow: 0px 5px 20px 1px #2F8DA9;
    -moz-box-shadow: 0px 5px 20px 1px rgb(47, 141, 169,.8);
    box-shadow: 0px 5px 20px 1px rgb(47, 141, 169,0.6);
    cursor: pointer;
    &:hover {
        background-color: #5AA7BF;
        -webkit-box-shadow: 0px 5px 25px 5px #a1b7f5;
        -moz-box-shadow: 0px 5px 25px 5px #a1b7f5;
        box-shadow: 0px 5px 25px 5px rgb(47, 141, 169,0.6);
    }
    &:focus {
        outline: none;
    }
`;

export const ForgetPassword = styled.div.attrs({})`
    color: #A6A9A9;
    font-size: 12px;
    font-weight: 600;

`

export const SigInHint = styled.div.attrs({})`
    color: #A6A9A9;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    p: {
        color:#32F7E2;

    }
`

export const Span = styled.span.attrs({})`
    color:#32F7E2;
    margin-left: 10px;

`

