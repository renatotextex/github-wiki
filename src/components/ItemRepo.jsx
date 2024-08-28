import React from 'react';

export function ItemRepo({repo, handleRemoveRepo}) {

    const handleRemove = () => {
        handleRemoveRepo(repo.id);
    }

    return (
        <div className="flex flex-col w-10/12 mt-6">
            <div className="flex flex-row items-center w-full mt-6 mb-3">
            <img src={repo.owner.avatar_url} className="rounded-full w-28 h-28 border-2" alt="perfil"/>
                <div className="flex flex-col items-start justify-center ml-5">
                    <h3 className="text-3xl text-white">{repo.name}</h3>
                    <p className="text-base text-zinc-500">{repo.full_name}</p><br/>
                    <p className="text-xs -mt-5">{repo.description}</p><br/>
                </div>
            </div>
            <a href={repo.html_url} target="_blank" className="hover:underline hover:text-blue-500">Ver repositório</a>
            <a href="#" onClick={handleRemove} className="text-red-600">Remover</a>
            <hr className="border-1 w-full border-gray-300 mt-5"/>
        </div>
    );
}