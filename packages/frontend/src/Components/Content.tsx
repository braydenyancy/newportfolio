import getSectionStyle from './sections.tsx';
import Jokes from './Jokes.tsx';
import { useEffect, useState } from 'react';

const Content = () => {

    const [crypticText, setCrypticText] = useState('████████');

    useEffect(() => {
        const chars = '█▓▒░▀▄■┼┤┴├─│╬╔╗╚╝╠╣╦╩';

        const interval = setInterval(() => {
            setCrypticText(
                Array.from({ length: 8 }, () =>
                    chars[Math.floor(Math.random() * chars.length)]
                ).join('')
            );
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="contentDiv">

            <section className="header" style={getSectionStyle('3 /11')}>
                <div className="terminal" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}>
                    <h1 style={{
                        fontSize: '6rem',
                        padding: '0.5rem 4rem',
                        animation: 'slideIn 2s ease-out forwards',
                    }}>CONFIDENTIAL</h1>
                    <p>NOTE: This is top secret documentation and contains hazardous information, read at your own risk</p>
                </div>
            </section>

            <section className="hInfo" style={getSectionStyle('6 / 12')}>
                <div className="terminal">
                    <h2 style={{
                        borderLeft: '3px solid #00d4d4',
                        paddingLeft: '1rem',
                        letterSpacing: '0.05em',
                    }}>About</h2>
                    <p style={{ lineHeight: 1.8, opacity: 0.9 }}>
                        This developer is highly capable with addictive tendencies to learn all technology, Bra{crypticText}y specializes in interactive web applications using React JS.
                        In their prior roles, they owned front end applications and designed cloud architectures from ideas to release while practicing and using agile methodologies.
                        This person of interest works heavily on design, carefully considering usability across all desktop and mobile platforms while always commiting to a recognizable,
                        yet intuitive design for users.
                    </p>
                </div>
            </section>

            <section className="description" style={getSectionStyle('2 / 8')}>
                <div className="terminal">
                    <h2 style={{
                        borderLeft: '3px solid #00d4d4',
                        paddingLeft: '1rem',
                        letterSpacing: '0.05em',
                    }}>Confidental</h2>
                    <p style={{ lineHeight: 1.8, opacity: 0.9 }}>
                        This portfolio was built using React JS and Three JS with GSAP to showcase my skills and projects.
                    </p>
                </div>
            </section>

            <section className='dad-joke' style={getSectionStyle('6 / 12')}>
                <Jokes />
            </section>

        </div>
    )
}

export default Content;