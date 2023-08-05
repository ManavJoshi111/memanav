"use client"
import React, { useContext } from "react";
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

export default function Page() {
    return (
        <>
            <section className="container h-screen w-full flex items-center flex-col justify-center">
                <div className="text-4xl">Hey👋, I am Manav!</div>
                <Typewriter
                    options={{
                        strings: ['An Engineering Student', 'A Competitive Programmer', 'A Developer'],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 50,
                        wrapperClassName: 'm-0 p-0 inline text-3xl font-bold'
                    }}
                />
                <Link href="/about" className={`mt-4 text-2xl bg-[#FF0066] p-3 neon-button transform -skew-x-12 text-white`}>Let's get started</Link>
            </section>
        </>
    )
}