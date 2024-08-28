import React from 'react';

export function Button({onClick, title}) {
    return (
            <button onClick={onClick} className="hover:bg-white hover:text-black hover:opacity-80 hover:cursor-pointer bg-zinc-800 border rounded-[20px] h-[52px] w-full text-base text-white">{title}</button>
    );
}