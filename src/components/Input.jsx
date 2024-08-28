import React from 'react';

export function Input({value, onChange}) {
    return (
            <input value={value} onChange={onChange} id="input-field" title="input1" placeholder="" className="border rounded-[20px] h-[52px] w-full bg-transparent p-5 text-base" type="text"/>
    );
}