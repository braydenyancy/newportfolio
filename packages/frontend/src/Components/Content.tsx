import getSectionStyle from './sections.tsx';
import Jokes from './Jokes.tsx';
import { useEffect, useState } from 'react';

const Content = () => {

    const [crypticText, setCrypticText] = useState('████████');
    // The jokes demo needs the backend; hide it entirely on static
    // deploys (no VITE_API_URL) or when the API is unreachable.
    const [jokesAvailable, setJokesAvailable] = useState(!!import.meta.env.VITE_API_URL);

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
                    <div className="scanline"></div>
                    <h1 style={{
                        fontSize: '6rem',
                        padding: '0.5rem 4rem',
                        animation: 'slideIn 2s ease-out forwards',
                    }}>YANCY</h1>
                    <p>NOTE: This top secret documentation contains hazardous information, read at your own risk</p>
                </div>
            </section>

            <section className="hInfo" style={getSectionStyle('7 / 12')}>
                <div className="terminal">
                    <div className="scanline"></div>
                    <div className='terminalSection'>
                        <h2 style={{
                            borderLeft: '3px solid #00d4d4',
                            paddingLeft: '1rem',
                            letterSpacing: '0.05em',
                        }}>About  Bra{crypticText}y</h2>
                    </div>
                    <div className='terminalSection'>
                        <p style={{ lineHeight: 1.8, opacity: 0.9 }}>
                            This highly capable developer has addictive tendencies to learn all technologies. They specialize in interactive web applications using React JS.
                            In their past, they created end to end applications and designed cloud architectures from ideas to release while practicing and using agile methodologies.
                            This person of interest works heavily on design, carefully considering usability across all desktop and mobile platforms while always commiting to a recognizable,
                            yet intuitive design for users.
                        </p>
                    </div>
                </div>
            </section>

            <section className="description" style={getSectionStyle('2 / 7')}>
                <div className="terminal">
                    <div className="scanline"></div>
                    <div className='terminalSection'>
                        <h2 style={{
                            borderLeft: '3px solid #00d4d4',
                            paddingLeft: '1rem',
                            letterSpacing: '0.05em',
                        }}>Confidental</h2>
                    </div>
                    <div className='terminalSection'>
                        <p style={{ lineHeight: 1.8, opacity: 0.9 }}>
                            This portfolio was built using React JS and Three JS with GSAP to showcase my skills and projects.
                        </p>
                    </div>
                </div>
            </section>

            {jokesAvailable && (
                <section className='dad-joke' style={getSectionStyle('6 / 12')}>
                    <Jokes onApiUnavailable={() => setJokesAvailable(false)} />
                </section>
            )}

        </div>
    )
}

export default Content;