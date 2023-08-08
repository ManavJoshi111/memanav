import { StaticImageData } from "next/image";
import Mycv_1 from "../assets/Mycv_1.png";
import Mycv_2 from "../assets/Mycv_2.png";

interface Project {
    title: string,
    tagline: string | null,
    description: string,
    images: StaticImageData[] | null,
    githubLink: string,
    liveLink: string | null,
    tags: string[]
}
const Projects: Project[] = [
    {
        title: "CryptoX",
        tagline: "A Cryptocurrency Tracker",
        description: "CryptoX is a real-time tracker for multiple cryptocurrencies. It enables users to monitor prices, view ticker charts, simulate transactions with dummy funds, and review transaction history for evaluating profit/loss.",
        images: null,
        githubLink: "https://github.com/ManavJoshi111/stock_project_frontend",
        liveLink: "https://tinyurl.com/cryptoxTrading",
        tags: [
            "MERN Stack",
            "TailwindCSS",
            "IgniteUI"
        ]
    },
    {
        title: "myCV",
        tagline: "Professional Resume Builder",
        description: "myCV is a professional resume builder web app which helps the user making their resume. User need to create an account and fill the form to make their resume. The resume can be downloaded as a pdf file.",
        images: [Mycv_1, Mycv_2],
        githubLink: "https://github.com/ManavJoshi111/resume_builder_frontend",
        liveLink: "http://13.127.217.25:3000/",
        tags: [
            "MERN Stack",
            "BootStrap"
        ]
    },
    {
        title: "VendorVortex",
        tagline: "A community for local vendors",
        description: "The project is designed to help local vendors grow their small businesses by providing them a platform to showcase their shops and communities and plans. Customers can easily discover these shops, connect with their local community, explore current discount plans, and even share their experiences on that platform with rating of service of that shop.",
        images: null,
        githubLink: "https://github.com/ManavJoshi111/VendorVortex",
        liveLink: "https://vendorvortex.us/",
        tags: [
            "MERN Stack",
            "BootStrap",
            "BootsWatch"
        ]
    },
    {
        title: "Cronux",
        tagline: "A Streaming Platform",
        description: "Cronux is a full- stack OTT(Over - the - Top) platform that offers a wide range of movies and TV shows for users to enjoy.This project was collaboratively developed by a team of two talented individuals.With Cronux, users can create their personal accounts and indulge in their preferred shows, ensuring a tailored and immersive entertainment experience.",
        images: null,
        githubLink: "https://github.com/ManavJoshi111/Cronux",
        liveLink: null,
        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "PHP",
            "MySQL"
        ]
    },
    {
        title: "WeCheck",
        tagline: "A Weather App",
        description: "WeCheck is a User friendly weather app which shows the weather of the specified location. It shows the min/max temperature observed at the location specifed by the user.",
        images: null,
        githubLink: "https://github.com/ManavJoshi111/WeatherAppWithReact",
        liveLink: null,
        tags: [
            "ReactJS"
        ]
    }
];

export default Projects;