import styled from 'styled-components';

export const FormGroup = styled.div.attrs({
    className:"form-group"
})``; 

export const Label = styled.label`
    color: #6c757d;
    font-size: 12px;
    font-weight: 600
`;

export const FormInput = styled.input.attrs({
    className: "form-control col-12",
})`
    border-radius:20px;
    border-width: 2px;
    border-color: #ACC4CB;
    margin-bottom:5px
    
`;

export const ErrorContainer = styled.div.attrs({
    className:"alert alert-danger"
})`
    width: 100%;
    height:20px !important;
    padding:2px !important;
    font-size: 10px;
    display:flex;
    justify-content:center;
`;
