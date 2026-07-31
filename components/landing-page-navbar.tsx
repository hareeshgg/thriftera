"use client"

import { MoveDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
    { title: "HOME", href: "#home" },
    { title: "ABOUT", href: "#about" },
    { title: "FEATURES", href: "#projects" },
    { title: "BLOG", href: "#blog" },
    { title: "CONTACT", href: "#contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className={`flex absolute top-0 right-0 w-full z-60 pointer-events-none justify-between border-b-3`}>
                <div className="px-5 py-5 sm:px-8 sm:py-6 lg:px-12 lg:py-8">
                    <h1 className="font-black tracking-tighter text-2xl sm:text-3xl lg:text-4xl">
                        thriftera
                    </h1>
                </div>
                <div className="flex justify-center items-center ">
                    <div className="hidden md:flex px-12 py-8 gap-2">
                        <Link href={"/login"} className="pointer-events-auto cursor-pointer text-lg tracking-widest underline underline-offset-4 active:underline hover:underline-offset-6 duration-200 ease-in-out transition-all ">Start selling now</Link>
                        <MoveDown />
                    </div>
                    <div className="border-l-3 px-5 py-5 sm:px-8 sm:py-6 lg:px-12 lg:py-8">
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex flex-col gap-1.5 focus:outline-none pointer-events-auto cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            <span className={`h-1.5 w-8 ${open ? 'bg-black' : 'bg-foreground'} transition-transform duration-300 ${open ? 'rotate-45 translate-y-3' : ''}`}></span>
                            <span className={`h-1.5 w-8 ${open ? 'bg-black' : 'bg-foreground'} transition-opacity duration-300 ${open ? 'opacity-0' : ''}`}></span>
                            <span className={`h-1.5 w-8 ${open ? 'bg-black' : 'bg-foreground'} transition-transform duration-300 ${open ? '-rotate-45 -translate-y-3' : ''}`}></span>
                        </button>
                    </div>
                </div>
            </div>

            <nav className={`fixed top-0 left-0 w-full h-screen z-50 transform transition-transform duration-300 ease-in-out ${open ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="flex flex-col pt-20 sm:pt-24 lg:pt-28">
                    <ul className="flex flex-col">
                        {menuItems.map(({ title, href }, index) => (
                            <div className=" border-b-3 flex items-center justify-start" key={title}>
                                <a
                                    className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-black hover:text-foreground py-4 transition-all duration-700 ease-out ${open ? "translate-x-10" : "-translate-x-200"}`}
                                    style={{
                                        transitionDelay: open ? `${index * 150}ms` : "500ms",
                                    }}
                                    href={href}
                                    onClick={() => setOpen(false)}
                                >
                                    {title}
                                </a>

                            </div>
                        ))}
                        {/* <li className="md:hidden px-5 py-8">
                            <Link
                                href="/login"
                                className="w-full bg-black px-6 py-3 text-white text-xl"
                            >
                                Start Selling
                            </Link>
                        </li> */}
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar;