import { useEffect, useRef, useState } from 'react';
import { Project } from '@portfolio/shared/types.ts';
import projects from '../data/projects.ts';

const SCRAMBLE_CHARS = '█▓▒░▀▄■┼┤┴├─│╬╔╗╚╝╠╣╦╩ABCDEF0123456789';

// Scrambles then resolves text left-to-right, like a decryption readout.
const DecryptText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [display, setDisplay] = useState(text.replace(/\S/g, '█'));
    const frame = useRef(0);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        const timeout = setTimeout(() => {
            interval = setInterval(() => {
                frame.current += 1;
                const revealed = Math.floor(frame.current / 2);
                setDisplay(
                    text
                        .split('')
                        .map((char, i) => {
                            if (char === ' ' || i < revealed) return char;
                            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
                        })
                        .join('')
                );
                if (revealed >= text.length) clearInterval(interval);
            }, 40);
        }, delay);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, delay]);

    return <span>{display}</span>;
};

const StatusBadge = ({ status }: { status: Project['status'] }) => (
    <span className={`project-status status-${status.replace(/\s/g, '-').toLowerCase()}`}>
        <span className="status-dot" />
        {status}
    </span>
);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <article
        className={`project-card ${project.featured ? 'project-featured' : ''}`}
        style={{ animationDelay: `${index * 0.15}s` }}
    >
        <div className="terminal project-terminal">
            <div className="scanline"></div>

            <header className="project-card-header">
                <span className="project-case-number">CASE FILE №{project.caseNumber}</span>
                <StatusBadge status={project.status} />
            </header>

            <h2 className="project-name" data-text={project.name}>
                <DecryptText text={project.name} delay={300 + index * 150} />
            </h2>
            <p className="project-tagline">▸ {project.tagline}</p>

            <p className="project-description">{project.description}</p>

            <div className="project-tech">
                {project.tech.map((t) => (
                    <span key={t} className="tech-chip">[{t}]</span>
                ))}
            </div>

            <footer className="project-links">
                {project.liveUrl && (
                    <a
                        className="project-access-btn"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ► ACCESS LIVE SITE
                    </a>
                )}
                {project.repoUrl && (
                    <a
                        className="project-access-btn"
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        ► VIEW SOURCE
                    </a>
                )}
            </footer>
        </div>
    </article>
);

const Projects = () => {
    const featured = projects.filter((p) => p.featured);
    const archive = projects.filter((p) => !p.featured);

    return (
        <div className="projectsDiv">
            <header className="projects-header">
                <div className="terminal projects-header-terminal">
                    <div className="scanline"></div>
                    <p className="projects-header-kicker">// ACCESSING RESTRICTED DATABASE...</p>
                    <h1 className="projects-title">
                        <DecryptText text="PROJECT ARCHIVES" />
                    </h1>
                    <p className="projects-header-sub">
                        {projects.length} FILES RECOVERED — CLEARANCE LEVEL: VISITOR
                    </p>
                </div>
            </header>

            <section className="projects-featured-grid">
                {featured.map((p, i) => (
                    <ProjectCard key={p.id} project={p} index={i} />
                ))}
            </section>

            <p className="projects-divider">─── DECLASSIFIED RECORDS ───</p>

            <section className="projects-archive-grid">
                {archive.map((p, i) => (
                    <ProjectCard key={p.id} project={p} index={featured.length + i} />
                ))}
            </section>
        </div>
    );
};

export default Projects;
