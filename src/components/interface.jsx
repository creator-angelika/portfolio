import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub,
    faSquareBehance,
    faInstagram,
    faGoogle,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";


const Section = (props) => {
    const { children, mobileTop } = props;

    return (
        <motion.section className={`
    h-screen w-screen p-20 max-w-screen-2xl mx-auto
    flex flex-col items-start
    ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
    `}
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    delay: 0.6,
                }
            }}

        >
            {children}
        </motion.section>)
}


export const Interface = (props) => {
    const { setSection } = props;
    return (
        <div className="flex flex-col items-center w-screen">
            <AboutSection setSection={setSection} />
            <SkillSection />
            <ProjectsSection setSection={setSection} />
        </div>
    );
};


const AboutSection = (props) => {
    const { setSection } = props;
    return (
        <Section mobileTop>
            <h1 className="text-white text-3xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-2 ">
                Hi, I'm
                <br />
                <p className="text-sky-400 px-1 italic">Insert Name</p>
            </h1>
            <motion.p
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                        delay: 1.5,
                    }
                }}
                className="text-sm md:text-lg text-gray-100 mt-8 font-bold"> ✨Professional Gamer || Vlogger
                <br />
                📍India
            </motion.p>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
                <motion.button
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1,
                            delay: 2,
                        },
                    }}
                    className={`bg-blue-400 text-white py-3 md:py-4 px-4 md:px-8 rounded-lg font-bold text-sm md:text-lg mt-4 md:mt-16`}
                >
                    Buy Merch
                </motion.button>
            </div>
        </Section>
    )
}

const skills = [
    {
        title: "BGMI",
        level: 95,
    },
    {
        title: "Valorant",
        level: 80,
    },
    {
        title: "GTA V",
        level: 75,
    },
    {
        title: "Minecraft",
        level: 50,
    },
    

]

const languages = [
    {
        title: "Hindi",
        level: 100,
    },
    {
        title: "English",
        level: 100,
    },
    {
        title: "French",
        level: 30,
    },
]

const SkillSection = () => {
    return (
        <Section>
            <motion.div className="w-full md:w-auto md:px-10 md:ml-auto" whileInView={"visible"}>
                <h2 className="text-3xl md:text-5xl font-bold text-black">Games I Play: </h2>
                <div className="mt-12 space-y-10">
                    {skills.map((skill, index) => (
                        <div className="w-full md:w-64" key={index}>
                            <motion.h3
                                className="text-lg md:text-xl font-bold text-gray-800"
                                initial={{
                                    opacity: 0,
                                }}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            duration: 1,
                                            delay: 1 + index * 0.2,
                                        },
                                    },
                                }}
                            >
                                {skill.title}
                            </motion.h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                <motion.div
                                    className="h-full bg-pink-400 rounded-full "
                                    style={{ width: `${skill.level}%` }}
                                    initial={{
                                        scaleX: 0,
                                        originX: 0,
                                    }}
                                    variants={{
                                        visible: {
                                            scaleX: 1,
                                            transition: {
                                                duration: 1,
                                                delay: 1 + index * 0.2,
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                
            </motion.div>
        </Section>
    );
};


const ProjectsSection = (props) => {
    const { setSection } = props;
    return (
        <section className="flex flex-col md:flex-row items-center justify-start h-screen md:mr-auto md:px-20">
            <div className="flex flex-col items-center md:items-start justify-center md:justify-start h-3/5 md:h-1/3 mb-auto md:mt-auto ">
                <div className="flex flex-row md:flex-col gap-12 md:gap-12">
                    <div className="flex items-center gap-4">
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <p className="hidden md:block text-lg md:text-xl font-bold text-gray-800">Instagram</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGoogle} size="2x" />
                        </a>
                        <p className="hidden md:block text-lg md:text-xl font-bold text-gray-800">Gmail</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <p className="hidden md:block text-lg md:text-xl font-bold text-gray-800">Youtube</p>
                    </div>
                    
                    
                </div>
            </div>
            <p className="absolute bottom-0 text-xs md:text-sm text-gray-200 mb-4 text-center w-full left-1/2 transform -translate-x-1/2">
                &copy; 2023 Angelika Thomas. All rights reserved.
            </p>
        </section>


    );
};

export default Interface;

