import React from 'react';


const PrioritySelector = ({value, onChange, options}) => (
    <select name="priority" value={value} onChange={onChange}>
       {options.map(option => (
           <option key={option} value={option}>{option}</option>
       ))}
    </select>

);


export default PrioritySelector;