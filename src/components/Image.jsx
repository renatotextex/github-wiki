import React from 'react';
import gitLogo from "../assets/github.png";

export function Image({value, onChange}) {
    return (
        <img src={gitLogo} width={72} height={72} alt="GitHub Logo"/>
    );
}