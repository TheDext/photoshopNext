'use client';
import React, { FC, useState } from 'react';
import { TextFieldProps } from '@/src/components/common/textField/textField.props';

const InputField: FC<TextFieldProps> = ({
    type = 'text',
    placeholder = 'Введите текст',
    label = null,
    name,
    onChange,
    value,
    ...props
}) => {
    const [inputValue, setInputValue] = useState(value || '');

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(target.value);
        if (onChange) {
            onChange(target.value);
        }
    };

    return (
        <div className="input-field">
            {label && <label htmlFor="input">{label}</label>}
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                id="input"
                value={inputValue}
                onChange={handleChange}
                {...props}
            />
        </div>
    );
};

export default InputField;
