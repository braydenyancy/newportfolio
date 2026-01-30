import ReactMarkdown from 'react-markdown';

const resumePageStyle = {
    width: '90vw',
    maxWidth: '900px',
    backgroundColor: 'rgba(0, 20, 40, 0.9)',
    color: 'white',
    margin: '2rem auto',
    padding: '3rem',
    borderRadius: '12px',
    lineHeight: 1.7,
};

const resumeContent = `
# Brayden Yancy

**yancy.brayden@gmail.com** | [GitHub](https://github.com) | **Cell: 210-393-2033**

---

*Having navigated both development and entrepreneurship, I bring a practical approach to aligning technical solutions with strategic goals, bridging technical and non-technical teams to deliver measurable impact and scalable growth.*

---

## Professional Experience

### UI Developer | PACCAR
**March 2024 - November 2025**

- Architected and implemented robust, modular micro-frontends and POC's that aligned with long-term maintainability goals using React, TypeScript, and supporting libraries like Redux for global state management, MUI and Bootstrap for styling.
- Integrated AWS services extensively, including Cognito for OIDC authentication, S3 to CloudFront distribution for global content delivery, API Gateway and Lambda for secure serverless data flows, custom AWS pipelines leveraging GitHub repositories, and CloudWatch for comprehensive monitoring and log analysis.
- Collaborated closely with the Data Science team to integrate their AWS Lex chatbot backend, connecting it through the AWS SDK to the front end, enabling dynamic AI-driven responses and enhancing user support and operational efficiency.
- Prioritized security by implementing AWS Secrets Manager and OAuth2 for robust authorization, ensuring secure API interactions, promoting adherence to secure coding standards, and strengthening security management across the team.
- Authored comprehensive documentation and transition materials, enabling smoother onboarding and reducing dependency on single developers.
- Bridged technical and non-technical stakeholders by translating complex architectural decisions and system constraints into actionable, business-friendly language.
- Proactively identified and addressed technical debt and system gaps, reducing long-term maintenance costs and improving application resilience.

### Full Stack Engineer | Bipolar Entertainment
**February 2022 - November 2024**

- Developed various UI components within the BipolarSphere web application, integrating AWS S3 for cost effective media management, using TypeScript, React with Redux, and Django with DRF.
- Enhanced user experience by integrating intuitive navigation, streamlined form submissions and accessible button designs, driving increased user engagement and positive feedback.
- Collaborated with a development team on code management, testing, and merging, leveraging Azure DevOps Git Repos to ensure efficient workflow and high-quality code integration.
- Developed RESTful API endpoints and optimized PostgreSQL schemas by refining Django Models, utilizing Django ORM to improve database management and application performance.
- Designed and maintained lightweight microservices using Node.js with Express.js to build RESTful APIs, integrating Morgan.js for enhanced HTTP request logging and monitoring, ensuring scalable and efficient service communication.

### Viewer Experience Advocate | Hulu
**April 2020 - March 2021**

- Documented app issues and functionalities on various Linux-based systems (webOS, Tizen OS, Roku Os, Fire OS, Android TV) utilizing Salesforce as a customer support platform to efficiently manage and track subscriber feedback.
- Conducted troubleshooting for the Hulu website and various GUI applications, efficiently documenting and managing customer support tickets in Salesforce, and strategically assigning the cases to relevant teams as required.
- Collaborated effectively with team members to devise and communicate technical solutions, ensuring high-quality support and guidance to viewers.

---

## Education

**UTD Computer Science and Engineering Bootcamp**  
Programming Certification in FullStack Web Development, 2022

---

## Skills

**Programming Languages:** JavaScript, TypeScript, C#, Python, Dart

**Web Development:** React, Redux, Django ORM, Node.js, Express, DotNet WebAPI, FastAPI, HTML, CSS, SCSS, MUI, Docker, Flutter, Next.js

**AI & Automation:** LangGraph, CopilotKit, AG-UI, ComfyUI

**Architecture & Infrastructure:** AWS (Cognito, S3, CloudFront, Lambda, API Gateway, Secrets Manager), Pulumi (IaC), GitHub Actions, Firebase App Distribution, Docker

**Database Management:** PostgreSQL, DynamoDB

**Cloud Services:** AWS, Azure DevOps

**Technical Tools:** Git, Postman, VS Code, Docker, GitHub Actions, Azure DevOps, AWS CLI, AI-assisted tools

**Soft Skills:** Customer Service, Attention to Detail, Integrity, Teamwork, Critical Thinking, Problem-Solving, Adaptability, Collaborative Skills, Analytical Thinking, Creativity

---

## Personal Projects

### Dvoid Ecosystem – Modular AI-Driven Platform
Architected and developed a modular ecosystem of applications under Dvoid, centered around Dvoid Shell, a cross-platform Flutter wrapper that dynamically embeds internal web apps. Integrated React, AG-UI, CopilotKit with Next.js, and LangGraph to build intelligent agent workflows and interactive front-end automation. Implemented Python and FastAPI services as the middleware layer for orchestrating LangGraph tasks for event-driven data flows.

### Dvoid Shell - Flutter App
Developed a cross-platform Flutter "shell" app that embeds webviews for utilizing multiple web apps while leveraging Riverpod for global state management and AppAuth for secure authentication with Zitadel using PKCE, OAuth2, OIDC, and JWT standards. Integrated Firebase App Distribution continuous deployment and tester analytics, ensuring robust CI/CD readiness for production deployment.

### Workout Progress & Builder App
Designed and developed a full-stack progressive web app (PWA) for creating, managing, and tracking custom workouts over time. Built using React and PWA features for offline support and mobile optimization. Leveraged AWS serverless architecture with Lambda, API Gateway, and DynamoDB for scalable NoSQL data storage. Provisioned infrastructure using Pulumi (IaC), implementing fine-grained permissions and robust CI/CD pipelines to ensure secure, efficient deployments.

### ComfyUI Local Instance & Advanced Image Generation
Deployed a local ComfyUI instance integrating various image generation models, control nets, upscalers, and LoRA-based fine-tuning, exploring advanced prompt chaining and workflow optimization.

### Gamified Music Experience Platform
Created a platform introducing game levels to songs and albums, allowing musicians to provide listeners with an interactive layer to their art. Built using React, Redux, JavaScript, TypeScript, MUI, Django ORM, and AWS.

### Dynamic Movie Ranking System
Developed a dynamic ranking tool incorporating React Drag-and-Drop features for an intuitive, engaging interface, empowering content creators to easily sort and share lists. Built using C#, .NET Minimal API, and React.

### Personal Developer Portfolio
Built an interactive personal portfolio to showcase development work and hobbies, emphasizing clean design and responsive user experience. Developed using React and GitHub Pages.

---

## School Projects

### E-commerce Website
Created an e-commerce website Front-end, API and database for selling skateboards and accessories online (JavaScript, MUI, HTML, CSS, Express.js, and Morgan JS)

### Web Arcade Platform
Developed a web-based arcade platform that features classic games like Snake, and Tic-Tac-Toe, with slick animations and a simple AI to play against (HTML, CSS, JavaScript)
`;

const Resume = () => {

    return (
        <div className="resumeDiv" style={{
            pointerEvents: 'auto',
            // paddingBottom: '4rem',
            marginTop: '4rem',
        }}>
            <div style={resumePageStyle}>
                <ReactMarkdown
                    components={{
                        h1: ({children}) => <h1 style={{ color: '#00d4d4', marginBottom: '0.5rem' }}>{children}</h1>,
                        h2: ({children}) => <h2 style={{ color: '#00d4d4', marginTop: '2rem', borderBottom: '1px solid rgba(0, 212, 212, 0.3)', paddingBottom: '0.5rem' }}>{children}</h2>,
                        h3: ({children}) => <h3 style={{ color: 'white', marginBottom: '0.25rem' }}>{children}</h3>,
                        hr: () => <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.2)', margin: '1.5rem 0' }} />,
                        a: ({href, children}) => <a href={href} style={{ color: '#00d4d4' }} target="_blank" rel="noopener noreferrer">{children}</a>,
                        li: ({children}) => <li style={{ marginBottom: '0.5rem' }}>{children}</li>,
                        strong: ({children}) => <strong style={{ color: '#00d4d4' }}>{children}</strong>,
                    }}
                >
                    {resumeContent}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default Resume;