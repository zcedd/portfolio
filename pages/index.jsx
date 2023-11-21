import Head from "next/head";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contacts from "../components/sections/Contacts";

export default function Home() {
    return (
        <>
            <Head>
                <title>Zced Rick Tabladillo</title>
                <meta
                    name="description"
                    content="Zced Rick Tabladillo is an aspiring full-stack Web Developer who loves to turn ideas into reality through web development."
                />
                <meta
                    name="keywords"
                    content="zcedd, zced, zced rick, zced rick tabladillo, zced buduan, zced rick buduan tabladillo"
                />
                <meta name="author" content="Zced Rick Tabladillo" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="cb-icon.svg" />
            </Head>
            <main className="relative max-w-6xl px-5 md:px-10 lg:px-12 xl:px-0 mx-auto z-20">
                <Hero />
                <About />
                <Skills />
                {/* <Projects /> */}
                <Contacts />
            </main>
        </>
    );
}
