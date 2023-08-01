import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <div class='mx-auto'>
            <div class="relative flex items-left mx-auto mb-9 w-80 h-12 rounded-lg focus-within:shadow-lg bg-slate-200 dark:bg-gray-700 overflow-hidden">
                <div class="grid place-items-center h-full w-12 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                <input
                class="peer h-full w-full outline-none text-sm text-gray-400 pr-2 bg-slate-200 dark:bg-gray-700"
                type="text"
                id="search"
                placeholder="Esemény keresés..."
                onChange={searchChange}
                /> 
            </div>
        </div>
    );
}

export default SearchBox;