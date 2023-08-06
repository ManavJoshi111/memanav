import Image from 'next/image';
import Manav_Illustration from "../../assets/Manav_Illustration.jpg";

export default function page() {
    return (
        <>
            <div className="container flex justify-between p-10 items-center flex-col h-screen">
                <div className="imgContainer">
                    <Image src={Manav_Illustration} height={300} alt="Manav Illustration" />
                </div>
                <div className="aboutContainer mt-4">
                    <h1 className="text-4xl font-bold mb-2 text-center text-[#00FF00]">About Me</h1>
                    <p id="intro">
                        🙋 My name is <span className="text-[#00FF00] font-semibold"> Manav H Joshi</span>. Currently, I am pursuing my B.Tech in <span className="text-[#00FF00] font-semibold">Computer Engineering</span> at Birla Vishvakarma Mahavidyalaya Engineering College, Vvnagar, Anand.
                        <br />
                        🏫 I was born and raised in Idar, Sabarkantha, Gujarat. I completed my schooling at Shri K.M. Patel Vidyamandir, Idar.
                        <br />
                        💻 I am an enthusiastic tech geek with a deep interest in web development and problem solving. I have worked on numerous web development projects and possess good knowledge of <span className="text-[#00FF00] font-semibold" >HTML, CSS, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, C, C++, Java</span>, and more.
                        <br />
                        📚 Besides technology, I have various other interests such as playing chess ♟️, listening to music 🎵, and reading novels 📖. I have read books ranging from Durjoy Dutta and Chetan Bhagat to Mahabharata and Bhagvadgeeta. I also enjoy traveling ✈️ and exploring new places.
                        <br />
                        🧘‍♂️ I am an introspective individual who cherishes solitude.
                    </p>
                </div>
            </div>
        </>
    )
}