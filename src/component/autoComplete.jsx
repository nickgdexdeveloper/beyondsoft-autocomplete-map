import React from 'react';
import { AutoComplete } from 'antd';


const CustomAutoComplete = ({ 
    options,
    value,
    placeholder,


    onChange,
    onSearch,
    onSelect
}) => {


    return (
        <AutoComplete
            options={options}


            style={{
                width: "100%",
            }}
            size="large"
            onSelect={(value, option) => onSelect(option)}
            onSearch={onSearch}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );


};





export default CustomAutoComplete;














