import { Project } from '@portfolio/shared/types.ts';

// Centrail and Avesa run in-theme classified warnings until real copy
// is written — swap description/tech when ready.
const projects: Project[] = [
    {
        id: 'centrail',
        caseNumber: '001',
        name: 'CENTRAIL',
        tagline: 'Live at centrail.org',
        description:
            '⚠ WARNING: This dossier is sealed under Directive 7-C. ' +
            'All intelligence regarding Operation CENTRAIL — its purpose, capabilities, ' +
            'and underlying technology — remains CLASSIFIED. Unauthorized disclosure is ' +
            'punishable by ████████. Cleared visitors may access the live site below. ' +
            'You were never here.',
        tech: ['████████', '[REDACTED]', 'CLASSIFIED'],
        status: 'LIVE',
        liveUrl: 'https://centrail.org',
        featured: true,
    },
    {
        id: 'avesa',
        caseNumber: '002',
        name: 'AVESA',
        tagline: 'Live at avesa.online',
        description:
            '⚠ WARNING: The following record has been redacted by order of ████████. ' +
            'Project AVESA is operational, but its mission parameters and system ' +
            'architecture are CLASSIFIED — EYES ONLY. Proceed to the live site strictly ' +
            'on a need-to-know basis. This message will not self-destruct, but it ' +
            'reserves the right to.',
        tech: ['[REDACTED]', 'CLASSIFIED', '████████'],
        status: 'LIVE',
        liveUrl: 'https://avesa.online',
        featured: true,
    },
    {
        id: 'dvoid-ecosystem',
        caseNumber: '003',
        name: 'DVOID ECOSYSTEM',
        tagline: 'Modular AI-driven platform',
        description:
            'A modular ecosystem of applications centered around Dvoid Shell, a cross-platform ' +
            'Flutter wrapper that dynamically embeds internal web apps. Intelligent agent workflows ' +
            'and interactive front-end automation, with Python and FastAPI services orchestrating ' +
            'LangGraph tasks for event-driven data flows.',
        tech: ['Flutter', 'React', 'Next.js', 'LangGraph', 'CopilotKit', 'AG-UI', 'FastAPI', 'Python'],
        status: 'LIVE',
        liveUrl: 'https://dvoid.ai',
    },
    {
        id: 'dvoid-shell',
        caseNumber: '004',
        name: 'DVOID SHELL',
        tagline: 'Cross-platform Flutter shell',
        description:
            'A cross-platform Flutter shell app embedding webviews for multiple web apps. Riverpod ' +
            'for global state, AppAuth with Zitadel for secure authentication using PKCE, OAuth2, ' +
            'OIDC, and JWT standards. Firebase App Distribution wired in for continuous deployment ' +
            'and tester analytics.',
        tech: ['Flutter', 'Riverpod', 'AppAuth', 'Zitadel', 'OAuth2', 'Firebase'],
        status: 'ARCHIVED',
    },
    {
        id: 'workout-pwa',
        caseNumber: '005',
        name: 'WORKOUT BUILDER',
        tagline: 'Progressive web app on AWS serverless',
        description:
            'A full-stack PWA for creating, managing, and tracking custom workouts over time. ' +
            'Offline support and mobile optimization on the front end; AWS Lambda, API Gateway, ' +
            'and DynamoDB behind it, with infrastructure provisioned through Pulumi and ' +
            'fine-grained permissions on CI/CD pipelines.',
        tech: ['React', 'PWA', 'AWS Lambda', 'DynamoDB', 'API Gateway', 'Pulumi'],
        status: 'ARCHIVED',
    },
    {
        id: 'movie-ranker',
        caseNumber: '006',
        name: 'MOVIE RANKING SYSTEM',
        tagline: 'Drag-and-drop list builder',
        description:
            'A dynamic ranking tool with drag-and-drop for an intuitive, engaging interface, ' +
            'letting content creators easily sort and share lists. C# and .NET Minimal API on ' +
            'the back end with a React front end.',
        tech: ['C#', '.NET Minimal API', 'React'],
        status: 'ARCHIVED',
    },
];

export default projects;
