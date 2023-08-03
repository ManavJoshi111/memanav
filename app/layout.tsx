"use client";
import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const PathName = usePathname();
    const SideBarLinks = [
        {
            label: "Home",
            href: "/",
            bgColor: "#FF0FE9"
        },
        {
            label: "About",
            href: "/about",
            bgColor: "black"
        },
        {
            label: "Projects",
            href: "/projects",
            bgColor: "#2C32ED"
        },
        {
            label: "Contact",
            href: "/contact",
            bgColor: "#FEF745"
        }
    ];

    return (
        <html lang="en">
            <body className="bg-black text-white m-0 p-0 flex h-screen">
                <nav className="border-r border-gray-700 h-full p-2 w-40">
                    <ul className="list-none m-0 p-0 flex flex-col h-full justify-around align-center">
                        {
                            SideBarLinks.map((link, index) => {
                                console.log("Pathname: ", PathName);
                                return (
                                    <li key={index} className="m-0 p-0 flex align-center justify-center">
                                        <Link href={link.href} className={"text-white bg-[" + link.bgColor + "]" + (PathName === link.href ? " active" : "")} >{link.label}</Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
                {children}
            </body>
        </html>
    );
}