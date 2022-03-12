import React from "react";
import AboutWr from "./wrapper";
const About = () => {
    const skills = [
        "Html",
        "Css",
        "bootstrap",
        "Javascript (es6+)",
        "React",
        "Typescript",
        "Node.js",
        "Express",
        "MongoDB",
        "Deno",
        "Tailwindcss",
        "Nextjs",
    ];
    return (
        <AboutWr>
            <h1>About me</h1>
            <p className="text py-2">
                <h2>
                    My name is <span> Doston. </span> <br /> I am <span> 18</span> years
                    old and I am a <span>Full Stack developer</span>
                </h2>
            </p>

            <p className="text">
                {" "}
                <h1>My Skills</h1>{" "}
            </p>
            <div className="skills">
                {skills.map((v) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className="skill">{v}</div>
                ))}
            </div>
        </AboutWr>
    );
};

export default About;