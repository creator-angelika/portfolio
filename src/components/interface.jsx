import { motion } from "framer-motion";
import { currentProjectAtom, projects } from "./Projects";
import { useAtom } from "jotai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faSquareBehance } from "@fortawesome/free-brands-svg-icons";

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
            <ProjectsSection />
            <ContactSection />
        </div>
    );
};

const Line = () => {
    return (
        <hr className="w-full h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
    );
};

const AboutSection = (props) => {
    const { setSection } = props;
    return (
        <Section mobileTop>
            <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0">
                Hi, I'm
                <br />
                <p className="text-sky-400 px-1 italic">Angelika Thomas</p>
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
                className="text-sm md:text-lg text-gray-600 mt-4 font-extrabold"> ✨Creative Developer | 3d Artist
                <br />
                📍Bhopal, India
            </motion.p>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}>
                <motion.button
                    onClick={() => window.open("src/assets/Janta_Sahayak.pdf")}
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
                    Download Resume
                </motion.button>
            </div>
        </Section>
    )
}

const skills = [
    {
        title: "Threejs / React Three Fiber",
        level: 60,
    },
    {
        title: "Blender",
        level: 80,
    },
    {
        title: "Reactjs",
        level: 80,
    },
    {
        title: "Python",
        level: 70,
    },
    {
        title: "Python",
        level: 70,
    },

]

const languages = [
    {
        title: "English",
        level: 90,
    },
    {
        title: "Hindi",
        level: 100,
    },
    {
        title: "French",
        level: 20,
    },
]

const SkillSection = () => {
    return (
        <Section>
            <motion.div className="w-full md:w-auto md:px-10 md:ml-auto" whileInView={"visible"}>
                <h2 className="text-3xl md:text-5xl font-bold text-black">Skills</h2>
                <div className="mt-8 space-y-4">
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
                                    className="h-full bg-indigo-500 rounded-full "
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
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mt-10 text-black">
                        Languages
                    </h2>
                    <div className="mt-8 space-y-4">
                        {languages.map((lng, index) => (
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
                                                delay: 2 + index * 0.2,
                                            },
                                        },
                                    }}
                                >
                                    {lng.title}
                                </motion.h3>
                                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                    <motion.div
                                        className="h-full bg-indigo-500 rounded-full "
                                        style={{ width: `${lng.level}%` }}
                                        initial={{
                                            scaleX: 0,
                                            originX: 0,
                                        }}
                                        variants={{
                                            visible: {
                                                scaleX: 1,
                                                transition: {
                                                    duration: 1,
                                                    delay: 2 + index * 0.2,
                                                },
                                            },
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Section>
    );
};


const ProjectsSection = () => {
    const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

    const nextProject = () => {
        setCurrentProject((currentProject + 1) % projects.length);
    };

    const previousProject = () => {
        setCurrentProject((currentProject - 1 + projects.length) % projects.length);
    };



    return (
        <Section>
            <div className="mt-0 flex w-full h-full gap-6 md:gap-12 items-center justify-center ">
                <button
                    className="hover:text-indigo-600 transition-colors"
                    onClick={previousProject}
                >
                    ← Previous
                </button>
                <h2 className="text-3xl md:text-5xl font-bold">Projects</h2>
                <button
                    className="mt-1 hover:text-indigo-600 transition-colors"
                    onClick={nextProject}
                >
                    Next →
                </button>
            </div>
        </Section>
    );
};


const ContactSection = () => {
    return (
        <Section>
            <Line />
            <div className="text-white mt-0 container p-4 flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="left-side mb-5 md:mb-0">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-gray-800">
                            Start A Conversation
                        </h2>
                        <p className="w-full md:w-1/2 text-sm md:text-xl text-black mb-4 md:mb-8">
                            Ready to turn your creative vision into reality? Send me an email,
                            and let's bring your ideas to life.
                        </p>
                    </div>
                    <button className="w-full md:w-1/2 md:w-auto bg-blue-500 text-white px-4 py-2 rounded-md">
                        Shoot An Email
                    </button>
                </div>
                <div className="right-side flex flex-col items-center gap-8 text-center mt-10 md:mt-0">
                    <div className="flex gap-20 md:gap-8">
                        <a href="https://www.github.com" target="_blank" className="text-white hover:text-blue-400">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: "#223658" }} />
                        </a>
                        <a href="https://www.github.com" target="_blank" className="text-white hover:text-blue-400">
                            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: "#223658" }} />
                        </a>
                        <a href="https://www.behance.net" target="_blank" className="text-white hover:text-blue-400">
                            <FontAwesomeIcon icon={faSquareBehance} size="2x" style={{ color: "#223658" }} />
                        </a>
                    </div>
                    <p className="w-full text-xs md:text-sm text-black">
                        &copy; 2023 Angelika Thomas. All rights reserved.
                    </p>
                </div>
            </div>
        </Section>


    )
}

