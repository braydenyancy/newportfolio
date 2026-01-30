import { colors } from "../assets/colors";

const resumePageStyle = {
    height: '70vh',
    width: '50vw',
    maxWidth: '800px',
    backgroundColor: colors.darkcyan,
    opacity: 0.75,
    color: 'white',
    margin: '2rem auto',
    padding: '3rem',
    display: 'flex',
    flexDirection: 'column',
};

const Resume = () => {

    return (
        <div className="resumeDiv" style={{
            pointerEvents: 'auto'
        }}>
            <div style={resumePageStyle}>
                <h1>Brayden Yancy - Full Stack Developer</h1>
                <p>Email: yancy.brayden@gmail.com</p>
                <p>Having navigated both development and entrepreneurship,
                    I bring a practical approach to aligning technical solutions with strategic goals,
                    bridging technical and non-technical teams to deliver measurable impact and scalable growth.
                </p>
                <h2>Professional Experience:</h2>
                <p>UI Developer | PACCAR (March 2024 - November 2025)</p>
                <p>Full Stack Engineer | Bipolar Entinertainment (February 2022 - November 2024)</p>
                <p>Viewer Experience Advocate | Hulu (April 2020 - March 2021)</p>
            </div>
            <div style={resumePageStyle}>
                <h1>Education:</h1>
                <p>UTD Computer Science and Engineering Bootcamp</p>
                <text>Programming Certification in Full Stack Web Development</text>
                <h1>Skills:</h1>
                <p>Familiar Programming Lanuages:</p>
                <ul>
                    <li>JavaScript, TypeScript, Python, C#</li>
                </ul>
                <p>Familiar Web Frameworks</p>
                <ul>
                    <li>React, Redux, Django ORM, Node.js, Express, DotNet WebAPI, FastAPI, HTML, CSS, SCSS, MUI, Docker, Flutter, Next.js</li>
                </ul>
                <p>Familiar AI Frameworks</p>
                <ul>
                    <li>LangGraph, CopilotKit, AG-UI, ComfyUI</li>
                </ul>
            </div>
            <div style={resumePageStyle}>
            </div>
        </div>
    )
}

export default Resume;