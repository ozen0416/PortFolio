'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="absolute top-0 left-0 p-4 z-[100]">
            <button
                onClick={toggleMenu}
                className="p-2 text-white focus:outline-none"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {isOpen && (
                <div
                    onClick={toggleMenu}
                    className="fixed inset-0 bg-transparent z-40"
                />
            )}

            <nav
                className={`fixed top-6 left-0 w-2/3 sm:w-1/3 bg-[#045856] text-white shadow-lg rounded-r-2xl transform transition-transform duration-300 ease-in-out z-50 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <ul className="flex flex-col p-6 space-y-6 text-xl font-semibold">
                    <li>
                        <a
                            href="/"
                            onClick={toggleMenu}
                            className="hover:underline font-[family-name:var(--font-geist-mono)] font-semibold"
                        >
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a
                            href="/inspiration"
                            onClick={toggleMenu}
                            className="hover:underline font-[family-name:var(--font-geist-mono)] font-semibold"
                        >
                            Inspiration
                        </a>
                    </li>
                    <li>
                        <a
                            href="/project1"
                            onClick={toggleMenu}
                            className="hover:underline font-[family-name:var(--font-geist-mono)] font-semibold"
                        >
                            Projet 1
                        </a>
                    </li>
                    <li>
                        <a
                            href="/project2"
                            onClick={toggleMenu}
                            className="hover:underline font-[family-name:var(--font-geist-mono)] font-semibold"
                        >
                            Projet 2
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
