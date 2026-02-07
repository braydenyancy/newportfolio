import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchRandomJoke } from "../api/jokes.ts";
import { Joke } from "@portfolio/shared/types.ts";


const Jokes = () => {

    const [dadJoke, setDadJoke] = useState<Joke | null>(null);

    const fetchJoke = () => {
        fetchRandomJoke()
            .then((data) => setDadJoke(data))
            .catch((error) => console.error('Error fetching joke:', error));
    };

    useEffect(() => {
        fetchJoke()
    }, []);

    return (
        <div>
            <h2 style={{
                borderLeft: '3px solid #00d4d4',
                paddingLeft: '1rem',
                letterSpacing: '0.05em',
            }}>Dad Joke Dispenser</h2>
            <p style={{ lineHeight: 1.8, opacity: 0.9, minHeight: '3rem' }}>{dadJoke?.content ?? ""}</p>
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
        </div>
    )
}

export default Jokes;