import Image from "next/image";
import Twitter from "../../assets/Twitter.gif";

export default function page() {
    return (
        <>
            <div className="container">
                <center className="">
                    <div className="img-container"></div>
                    <div className="form-container mt-4">
                        <form className="w-1/2 ">
                            <div className="form-group">
                                <input type="text" id="name" className="bg-black mt-0 block w-full px-0.5 border-0 border-b border-[#00FFFF] focus:border-b-2 focus:ring-0 focus:border-[#00FFFF]" placeholder="Enter Your Name" />
                            </div>
                            <div className="form-group mt-6">
                                <input type="email" id="email" className="bg-black mt-0 block w-full px-0.5 border-0 border-b border-[#00FFFF] focus:border-b-2 focus:ring-0 focus:border-[#00FFFF]" placeholder="Enter Your Email" />
                            </div>
                            <div className="form-group mt-6">
                                <textarea id="email" className="bg-black mt-0 block w-full px-0.5 border-0 border-b border-[#00FFFF] focus:border-b-2 focus:ring-0 focus:border-[#00FFFF]" placeholder="Enter Your Message" />
                            </div>
                            <button className={`mt-4 text-xl font-bold text-black border-[#00FFFF] bg-[#00FFFF] p-3`}>Let&apos;s get started 🚀</button>
                        </form>
                    </div>
                    <div className="socials border border-white mt-2 flex justify-center items-center">
                        <a className="m-2 p-2" target="_blank" href="https://twitter.com/Man___111">Twitter</a>
                        <a className="m-2 p-2" target="_blank" href="https://github.com/ManavJoshi111">GitHub</a>
                        <a className="m-2 p-2" target="_blank" href="https://linkedin.com/in/manavhjoshi">LinkedIn</a>
                        <a className="m-2 p-2" target="_blank" href="https://codechef.com/users/TechyGeek1707">CodeChef</a>
                        <a className="m-2 p-2 my-auto" target="_blank" href="https://leetcode.com/TechyGeek1707">LeetCode</a>
                    </div>
                </center >
            </div >
        </>
    )
}