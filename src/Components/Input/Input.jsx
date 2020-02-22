import React from 'react';
import { FormGroup, Label, FormInput, ErrorContainer } from './InputStyledComponents';


const Input = ({ id, name, label, type, value, error, onChange, focus, placeholder }) => {
    return ( 
        <FormGroup>
            <Label htmlFor={name}>{label}</Label>
            <FormInput id={id} value={value} onChange={onChange}  name={name} type={type} placeholder={placeholder} autoFocus={focus}></FormInput>
            {error && <ErrorContainer>{error}</ErrorContainer>}
        </FormGroup>
     );
}
 
export default Input;