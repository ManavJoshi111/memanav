import './globals.css';
import Link from 'next/link';
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="bg-black text-white m-0 p-0 flex h-screen">
                <nav className="border border-red-500 h-full p-2 w-36">
                    <ul className="list-none m-0 p-0 flex flex-col h-full justify-around align-center">
                        <li className="m-0 p-0 flex align-center justify-center">
                            <Link href="/" className="text-white">
                                Home
                            </Link>
                        </li>
                        <li className="m-0 p-0 flex align-center justify-center">
                            <Link href="/about" className="text-white">
                                About
                            </Link>
                        </li>
                        <li className="m-0 p-0 flex align-center justify-center">
                            <Link href="/projects" className="text-white">
                                Projects
                            </Link>
                        </li>
                        <li className="m-0 p-0 flex align-center justify-center">
                            <Link href="/contact" className="text-white">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                {children}
            </body>
        </html>
    )
}