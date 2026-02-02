import { useEffect, useState } from 'react';
import { colors } from '../assets/colors';
import { Button } from '@mui/material';

const Content = () => {

    const [dadJoke, setDadJoke] = useState("");

    const fetchJoke = () => {
        fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setDadJoke(data.joke)
            })
            .catch(error => console.error("Error fetching dad joke", error))
    };

    useEffect(() => {
        fetchJoke()
    }, []);

    const getSectionStyle = (gridColumn) => ({
        // border: `solid 4px white`,
        // borderRadius: '8px',
        // padding: '1rem',
        // background: `linear-gradient(135deg, ${colors.darkcyan}, ${colors.teal})`,
        gridColumn: gridColumn,
        marginTop: '8rem',
        marginBottom: '48rem',
    });

    return (
        <div className="contentDiv">

            <section className="header" style={{
                ...getSectionStyle('3 /11'),
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <h1 style={{
                    fontSize: '8rem',
                    // background: 'black',
                    // opacity: '0.75',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    textShadow: `0 0 20px ${colors.teal}`,
                    animation: 'slideIn 2s ease-out forwards',
                }}>YANCY</h1>
                {/* <h2>My name is Brayden</h2> */}
                <h2>Scroll to see more!</h2>
            </section>

            <section className="hInfo" style={getSectionStyle('6 / 12')}>
                <h2 style={{
                    borderLeft: '3px solid #00d4d4',
                    paddingLeft: '1rem',
                    letterSpacing: '0.05em',
                }}>About Me</h2>
                <p style={{ lineHeight: 1.8, opacity: 0.9 }}>
                    I'm a developer with addictive tendencies to play around with new tech, I specialize in interactive web experiences using React JS.
                    In my prior roles, I owned front end applications from ideas to release while practicing and using agile methodologies.
                    I worked heavily on design, thinking carefully about usability across desktop and mobile platforms and always considered a recognizable,
                    yet intuitive design for our users' experience across the platform.
                </p>
            </section>

            <section className="description" style={getSectionStyle('2 / 8')}>
                <h2 style={{
                    borderLeft: '3px solid #00d4d4',
                    paddingLeft: '1rem',
                    letterSpacing: '0.05em',
                }}>About this Portfolio</h2>
                <p style={{ lineHeight: 1.8, opacity: 0.9 }}>
                    This portfolio was built using React JS and Three JS with GSAP to showcase my skills and projects.
                </p>
            </section>

            <section className='dad-joke' style={getSectionStyle('7 / 12')}>
                <h2 style={{
                    borderLeft: '3px solid #00d4d4',
                    paddingLeft: '1rem',
                    letterSpacing: '0.05em',
                }}>Dad Joke Dispenser</h2>
                <p style={{ lineHeight: 1.8, opacity: 0.9, minHeight: '3rem' }}>{dadJoke}</p>
                <Button
                    variant="outlined"
                    onClick={fetchJoke}
                    sx={{
                        color: 'white',
                        borderColor: 'white',
                        fontWeight: 'bold',
                        '&:hover': {
                            borderColor: '#00d4d4',
                            color: '#00d4d4',
                        }
                    }}
                >
                    New Joke
                </Button>
            </section>

            {/* <section className='hobbies' style={getSectionStyle('1 / 13')}>
                <h1>My hobbies include...</h1>
            </section>

            <section className='list' style={getSectionStyle('1 / 13')}>
                <li>Creating and listening to music!</li>
            </section>

            <section className='list' style={getSectionStyle('1 / 13')}>
                <li>Cooking and definitely eating!</li>
            </section>

            <section className='list' style={getSectionStyle('1 / 13')}>
                <li>Developing applications and using them.</li>
            </section> */}

        </div>
    )
}

export default Content;