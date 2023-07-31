import React from "react";

const Navbar = () => {
    return ([
<nav class="bg-white border-gray-200 dark:bg-gray-900">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <a href="" class="flex items-center">
                    <img src="favicon.svg" class="h-8 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Pus<span class="text-transparent bg-clip-text bg-gradient-to-r to-cyan-500 from-orange-400">King</span></span>
                </a>
                <div class="flex items-center">
                    <a href="#" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Bejelentkezés</a>
                </div>
            </div>
            </nav>
        /* ,
        <nav class="bg-gray-50 dark:bg-gray-700">
            <div class="max-w-screen-xl px-4 py-3 mx-auto">
                <div class="flex items-center">
                    <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                        <li>
                            <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Kezdőlap</a>
                        </li>
                        <li>
                            <a href="/asd" class="text-gray-900 dark:text-white hover:underline">Események</a>
                        </li>
                        <li>
                            <a href="#" class="text-gray-900 dark:text-white hover:underline">Kapcsolat</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> */
    ]);
}

export default Navbar;