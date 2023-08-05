"use client";
import './globals.css';
import { useState } from 'react';
import colorContext from './colorContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, UserCircleIcon, BriefcaseIcon, PhoneArrowDownLeftIcon } from '@heroicons/react/24/outline';


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [color, setColor] = useState<string>("bg-[#FF0066]");
    const PathName = usePathname();
    const SideBarLinks = [
        {
            label: <HomeIcon className="h-8 w-8 text-white stroke-2" />,
            href: "/",
            bgColor: "bg-[#FF0066]"
        },
        {
            label: <UserCircleIcon className="h-8 w-8 text-white stroke-2" />,
            href: "/about",
            bgColor: "bg-[#00FF00]"
        },
        {
            label: <BriefcaseIcon className="h-8 w-8 text-white stroke-2" />,
            href: "/projects",
            bgColor: "bg-[#FF0000] "
        },
        {
            label: <PhoneArrowDownLeftIcon className="h-8 w-8 text-white stroke-2" />,
            href: "/contact",
            bgColor: "bg-[#00FFFF]"
        }
    ];

    const handleLinkClick = (path: string, bgColor: string) => {
        if (path === PathName) {
            setColor(bgColor);
        }
    }
    return (
        <html lang="en">
            <body className="bg-black text-white m-0 p-0 flex h-screen">
                <nav className={`border-r border-white h-full w-40 p-0`}>
                    <ul className="list-none m-0 p-0 flex flex-col h-full w-full justify-around align-center">
                        <colorContext.Provider value={{ color, setColor }}>
                            {
                                SideBarLinks.map((link, index) => {
                                    return (
                                        <li key={index} className="m-0 p-0 flex align-center justify-center">
                                            <Link href={link.href} className={`text-white flex items-center justify-center w-full p-2 font-bold ${(PathName === link.href ? link.bgColor : "")}`} onClick={() => { handleLinkClick(link.href, link.bgColor) }} >{link.label}</Link>
                                        </li>
                                    );
                                })
                            }
                        </colorContext.Provider>
                    </ul>
                </nav>
                {children}
            </body>
        </html >
    );
}