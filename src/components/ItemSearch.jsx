import React from 'react';
import {Image} from "./Image";
import {Input} from "./Input";
import {Button} from "./Button";

export function ItemSearch({currentRepo, setCurrentRepo, handleSearchRepo}) {


    return (
        <div className="border border-white rounded-lg shadow-2xl max-w-md mx-auto mt-10">
            <div className="flex flex-col w-full justify-start items-center gap-4 p-6">
                <Image/>
                <h3 className="mt-0.5">Digite o repositório desejado:</h3>
                <h4 className="text-xs -mt-3 text-zinc-400">( Formato: "usuário/repositório" )</h4>
                <Input value={currentRepo} onChange={e => setCurrentRepo(e.target.value)}/>
                <Button onClick={handleSearchRepo} title={"Adicionar Repositório"}/>
                <hr className="border-1 w-full border-gray-300 mt-3"/>
                <h4 className="text-xs -mt-1 -mb-3 text-zinc-400">( Developed by: <a
                    href="https://github.com/renatotextex" target="_blank" className="text-blue-500 hover:underline">@renatotex</a> )</h4>
            </div>
        </div>
    );
}