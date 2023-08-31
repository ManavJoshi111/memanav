import Image from 'next/image';
import GitHubIcon from "../../assets/GitHub.svg";
import LinkedInIcon from "../../assets/Linkedin.svg";
import TwitterIcon from "../../assets/Twitter.svg";
import CodeChefIcon from "../../assets/CodeChef.svg";
import LeetCodeIcon from "../../assets/LeetCode.svg";

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
                            <button className={`mt-4 text-xl font-bold text-black border-[#00FFFF] bg-[#00FFFF] p-3`}>Send 🚀</button>
                        </form>
                    </div>
                    <div className="socials mt-2 flex justify-center items-center">
                        <a className="m-2 p-2" target="_blank" href="https://twitter.com/Man___111"><Image src={TwitterIcon} alt="Twitter" height={45} /></a>
                        <a className="m-2 p-2" target="_blank" href="https://github.com/ManavJoshi111">
                            <svg height="35" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" className="">
                                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" fill="white"></path>
                            </svg>
                        </a>
                        <a className="m-2 p-2" target="_blank" href="https://linkedin.com/in/manavhjoshi"><Image src={LinkedInIcon} alt="LinkedIn" height={45} /></a>
                        <a className="m-2 p-2" target="_blank" href="https://codechef.com/users/TechyGeek1707"><Image src={CodeChefIcon} alt="CodeChef" height={45} /></a>
                        <a className="m-2 p-2 my-auto" target="_blank" href="https://leetcode.com/TechyGeek1707"><Image src={LeetCodeIcon} alt="LeetCode" className='m-0 p-0 my-0' height={35} width={35} /></a>
                    </div>
                </center >
            </div >
        </>
    )
}