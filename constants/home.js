import { FiFacebook, FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi";
import { FaTiktok, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export const navLinks = [
    {
        title: "About",
        cName: "nav_item",
        url: "/about",
    },
    {
        title: "Skills",
        cName: "nav_item",
        url: "/skills",
    },
    // {
    //     title: "Projects",
    //     cName: "nav_item",
    //     url: "/projects",
    // },
    {
        title: "Contact",
        cName: "cta_resume",
        url: "/contact",
    },
    // {
    //     title: "Resume",
    //     url: "https://drive.google.com/file/d/1W47GqOQlSZxF2xqSP6FTLE3GbnEtmj8E/view?usp=sharing",
    //     cName: "cta_resume",
    // },
];

export const emailLink =
    "https://mail.google.com/mail/u/0/?to=zcedbuduan@gmail.com&su=&body=&fs=1&tf=cm";

export const footerSocials = [
    {
        name: "facebook",
        logo: <FaFacebookF size={22} />,
        url: "https://www.facebook.com/zcedd",
    },
    {
        name: "instagram",
        logo: <AiFillInstagram size={22} />,
        url: "https://www.instagram.com/zcedd1",
    },
    {
        name: "tiktok",
        logo: <FaTiktok size={22} />,
        url: "https://www.tiktok.com/@zcedd",
    },
    {
        name: "linkedin",
        logo: <FaLinkedinIn size={22} />,
        url: "https://www.linkedin.com/in/zcedd",
    },
    {
        name: "github",
        logo: <FaGithub size={22} />,
        url: "https://github.com/zcedd",
    },
];

export const heroData = {
    name: "Zcedd",
    subheading: "Let me build web stuff for you.",
    description:
        "A Full-stack Web Developer who loves to turn ideas into reality through web development.",
};

export const aboutData = {
    heading: [
        "Hi. I’m Zcedd, looking for an opportunity to start a career and enhance my skills in full-stack web development.",
        'My dream is to build things similar to what an inventor does. It turns out that building websites are similar to our so-called "inventions" because it will solve the problems encountered and automate things.',
        "I believe that the web is a powerful platform for communication, information sharing, and innovation, and I'm committed to learning and mastering the technologies and skills required to make a positive impact in this field. As a web developer, I'm dedicated to delivering web solutions that are not only visually appealing but also function smoothly and efficiently.",
    ],
    education: {
        course: "Bachelor of Science in Computer Engineering",
        school: "Mariano Marcos State University",
    },
    certification: {
        title: "Visual Graphics Design NCIII",
        school: "Access Villasis Computer and Technical College",
    },
};

export const skills = [
    {
        name: "HTML",
        logo: "html5.svg",
    },
    {
        name: "CSS",
        logo: "css.svg",
    },
    {
        name: "Javascript",
        logo: "js.svg",
    },
    {
        name: "Php",
        logo: "php.svg",
    },
    {
        name: "Laravel",
        logo: "laravel.svg",
    },
    {
        name: "Livewire",
        logo: "livewire.svg",
    },
    {
        name: "Bootstrap 5",
        logo: "bootstrap-5.svg",
    },
    {
        name: "Tailwind",
        logo: "tailwind.svg",
    },
    {
        name: "Vite",
        logo: "vite.svg",
    },
    {
        name: "React",
        logo: "react.svg",
    },
    {
        name: "Next",
        logo: "nextjs.svg",
    },
    {
        name: "Git",
        logo: "git.svg",
    },
    {
        name: "VSCode",
        logo: "vscode.svg",
    },
    {
        name: "Adobe XD",
        logo: "adobexd.svg",
    },
    {
        name: "Photoshop",
        logo: "photoshop.svg",
    },
];

export const projects = [
    {
        title: "My Portfolio Website",
        description: "My first Front-end web developer portfolio website.",
        techsUsed: ["Next", "Tailwind", "Framer Motion"],
        image: "portfolio.png",
        liveUrl: "https://sezaru.vercel.app/",
        githubUrl: "https://github.com/sezaru-dev/portfolio-website",
    },
    {
        title: "JLPT Tango単語",
        description:
            "A simple website with Japanese Language Proficiency Test(JLPT) vocabularies from N5 level to N1 level.",
        techsUsed: ["Next", "Tailwind", "JLPT Vocabulary API"],
        image: "jlpt-tango.png",
        liveUrl: "https://jlpt-tango.vercel.app/",
        githubUrl: "https://github.com/sezaru-dev/jlpt-tango",
    },
    {
        title: "Where in the World",
        description:
            "A REST Countries API with dark/light mode theme switcher challenge from the Frontend Mentor website.",
        techsUsed: ["Next", "Tailwind", "REST Countries API"],
        image: "rest-countries.png",
        liveUrl: "https://rest-countries-api-cb.vercel.app/",
        githubUrl: "https://github.com/sezaru-dev/rest-countries-api",
    },
    {
        title: "Todo App",
        description:
            "A Todo App with a dark/light mode theme switcher and local storage. A challenge from the Frontend Mentor website.",
        techsUsed: ["Next", "Tailwind"],
        image: "todo-app.png",
        liveUrl: "https://todo-app-cb.vercel.app/",
        githubUrl: "https://github.com/sezaru-dev/todo-app-localstorage",
    },
    {
        title: "Loopstudios Landing Page",
        description:
            "A Loopsudios Landing Page challenge from the Frontend Mentor website.",
        techsUsed: ["Vite", "Tailwind"],
        image: "loopstudios.png",
        liveUrl: "https://loopstudios-cb.netlify.app/",
        githubUrl: "https://github.com/sezaru-dev/loopstudios-landing-page",
    },
    {
        title: "Bookmark Landing Page",
        description:
            "A Bookmark Landing Page challenge from the Frontend Mentor website.",
        techsUsed: ["Vite", "Tailwind"],
        image: "bookmark-landingpage.png",
        liveUrl: "https://bookmark-landing-page-cb.netlify.app/",
        githubUrl: "https://github.com/sezaru-dev/bookmark-landing-page",
    },
    {
        title: "Fylo Landing Page",
        description:
            "A Fylo Landing Page challenge from the Frontend Mentor website.",
        techsUsed: ["Next", "Tailwind"],
        image: "fylo-landing-page.png",
        liveUrl: "https://fylo-landing-page-cb.vercel.app/",
        githubUrl: "https://github.com/sezaru-dev/fylo-landing-page",
    },
    {
        title: "Advice Generator App",
        description:
            "An Advice Generator App challenge from the Frontend Mentor website using Advice Slip API.",
        techsUsed: ["Vite", "Tailwind", "Advice Slip API"],
        image: "advice-generator-app.png",
        liveUrl: "https://sezaru-dev-advice-generator-app.netlify.app/",
        githubUrl: "https://github.com/sezaru-dev/advice-generator-app",
    },
];

export const otherProjects = [
    {
        title: "Faculty Evaluation System",
        description:
            "A simple UI for Faculty Evaluation System that I created to apply what I've learned in Tailwindcss.",
        techsUsed: ["HTML", "CSS", "Javascript", "Tailwind"],
        image: "faculty-evaluation.png",
        liveUrl: "https://facultyevaluationsytem-cb.netlify.app/",
        githubUrl: "https://github.com/sezaru-dev/faculty-evaluation-system",
    },
    {
        title: "Hiragana Multiple Choice",
        description:
            "A simple Hiragana Multiple Choice App that I created when I started learning Javascript. Aims to make memorizing Japanese Hiragana fun.",
        techsUsed: ["HTML", "CSS", "Javascript"],
        image: "hiragana-multiple-choice.png",
        liveUrl: "https://hiraganamultiplechoice.netlify.app/",
        githubUrl: "https://github.com/sezaru-dev/hiragana-multiple-choice",
    },
    {
        title: "Hiragana Memorization Game",
        description:
            "A simple Hiragana Memorization Game that I created when I started learning Javascript. Aims to make memorizing Japanese Hiragana fun when I'm studying Japanese Language.",
        techsUsed: ["HTML", "CSS", "Javascript"],
        image: "hiragana-memorization-game.png",
        liveUrl: "https://hiraganamemorizationgame.netlify.app/",
        githubUrl: "https://github.com/sezaru-dev/hiragana-memorization-game",
    },
];

export const schoolProjects = [
    {
        title: "CCS FES",
        description:
            "Automates the manual evaluation of College of Computer Studies Faculty Members.",
        techsUsed: ["HTML", "CSS", "Javascript", "ASP.net", "MS Access"],
        image: "ccsfes.png",
    },
    {
        title: "Dr. Smart: An android application to diagnose patient's illness",
        description:
            "A simple app that diagnose patient's illness based on the symptoms provided.",
        techsUsed: ["C#", "Unity"],
        image: "drsmart.jpg",
    },
];
