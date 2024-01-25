import React from 'react';

const MySelect = ({props, options, defaultValue, value, onChange}) => {
    return (
        <select className={"select"}
                {...props}
                defaultValue={defaultValue}
                value={value}
                onChange={event => onChange(event.target.value)}>
            {options.map(option =>
                <option className={"option"} key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>

    );
};

export default MySelect;