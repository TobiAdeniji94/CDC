import React, { useEffect, useState } from 'react'

const Button = ({ colorCode, setSubmittedAnswer }) => {
    const [disabled, setDisabled] = useState(false);
    const firstOption = generateColorCode();
    const secondOption = generateColorCode();
    const colors = [firstOption, secondOption, colorCode];
    const shuffledColors = colors.sort((a,b) => 0.5 - Math.random());

    useEffect(() => {
        setDisabled(false);
    }, [colorCode]);


    return (
        <div className='button-group'>
            {shuffledColors.map((k, i) => {
                return (
                    <button
                        key = {i}
                        value = {k}
                        disabled = {disabled ? true : false}
                        onClick = {() => {
                            setSubmittedAnswer(k);
                            setDisabled(true);
                        }}
                    >
                        {k}
                    </button>
                );
            })}
        </div>
    );
};

const randomValue = () => Math.floor(Math.random() * 256);

const generateColorCode = () => {
    const r = randomValue();
    const g = randomValue();
    const b = randomValue();

    return `rgb(${r}, ${g}, ${b})`;
};

export default React.memo(Button);

