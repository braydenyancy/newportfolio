import { useEffect, useState } from 'react';
import { randomColor } from '../assets/colors';

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
        marginTop: '18rem',
        marginBottom: '32rem',
    });

    return (
        <div className="contentDiv">

            <section className="header" style={getSectionStyle('4 / 10')}>
                <h1>Hi, My name is Brayden!</h1>
                <p>Welcome to my portfolio!</p>
            </section>

            <section className="hInfo" style={getSectionStyle('6 / 12')}>
                <h2>About Me</h2>
                <p>I'm a developer with addictive tendencies to play around with new tech, I specialize in interactive web experiences using React JS.</p>
            </section>

            <section className="description" style={getSectionStyle('2 / 8')}>
            <h2>
                About this Portfolio
            </h2>
                <p>
                    This portfolio was built using React JS and Three JS with GSAP to showcase my skills and projects. 
                    In it, you will find dad jokes, flying cats, my hobbies and links to other projects I've worked on.
                </p>
            </section>

            <section className='dad-joke' style={getSectionStyle('7 / 12')}>
                <h1>Dad joke Dispenser</h1>
                <p>{dadJoke}</p>
                <button onClick={fetchJoke} style={{
                    backgroundColor: 'black',
                    color: randomColor(),
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                }}>
                    New Joke
                </button>
            </section>

            <section className='hobbies' style={getSectionStyle('1 / 13')}>
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
            </section>

        </div>
    )
}

export default Content;