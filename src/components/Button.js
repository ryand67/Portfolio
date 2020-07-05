import React from 'react';

const Button = (props) => {
    return (
    <a href={props.href}><button>{props.text}</button></a>
    )
}

export default Button;