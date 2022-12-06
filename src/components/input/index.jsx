import React from "react";
import * as Styled from './styles';

export default function Input({ label, name, onChange, ...rest }) {
    return (
        <Styled.Container>
            <Styled.Label htmlFor={name}>{label}</Styled.Label>
            <Styled.Input id={name} onChange={(e) => onChange(e)} {...rest} />
        </Styled.Container>
    )   

}