import React from 'react';

export function Container({children}) {
    return (
        <div className="flex flex-col w-full h-screen justify-start items-center gap-4 p-4">
            {children}
        </div>
    );
}