import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchRandomJoke, getSavedJokes, saveJoke, deleteJoke } from "../api/jokes.ts";
import { Joke, SavedJoke } from "@portfolio/shared/types.ts";


const Jokes = () => {

    const [dadJoke, setDadJoke] = useState<Joke | null>(null);
    const [savedJokes, setSavedJokes] = useState<SavedJoke[]>([]);

    const fetchJoke = () => {
        fetchRandomJoke()
            .then((data) => setDadJoke(data))
            .catch((error) => console.error('Error fetching joke:', error));
    };

    const fetchSavedJokes = async () => {
        try {
            const jokes = await getSavedJokes();
            setSavedJokes(jokes);
        } catch (error) {
            console.error('Error fetching saved jokes:', error);
        }
    }

    const saveAJoke = async (newSavedJoke: Joke) => {
        try {
            await saveJoke(newSavedJoke)
            console.log("Saved joke")
            await fetchSavedJokes()
        } catch (error) {
            console.error('Failed to save joke', error)
        }
    }

    const deleteAJoke = async (joke: SavedJoke) => {
        try {
            await deleteJoke(joke.id)
            await fetchSavedJokes()
        } catch (error) {
            console.error("Can't delete joke", error)
        }
    }

    useEffect(() => {
        fetchJoke()
        fetchSavedJokes()
    }, []);

    return (
        <div className="terminal">

            <div style={{
                border: 'solid 1px white',
                padding: '0.5rem'
            }}>
                <h2 style={{
                    borderLeft: '3px solid #00d4d4',
                    paddingLeft: '1rem',
                    letterSpacing: '0.05em',
                }}>Dad Joke Dispenser</h2>
                <p style={{ lineHeight: 1.8, opacity: 0.9, minHeight: '3rem' }}>{dadJoke?.content ?? ""}</p>
                {/* <Button
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
                <Button
                    variant="outlined"
                    onClick={() => dadJoke && saveAJoke(dadJoke)}
                >
                    Save Joke
                </Button> */}
            </div>

            <div>
                {savedJokes.map((joke) => (
                    <div key={joke.id} style={{
                        padding: '0.5rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: 'white',
                    }}>
                        {joke.content}
                        {/* <Button
                            variant="contained"
                            onClick={() => deleteAJoke(joke)}
                        >
                            Delete
                        </Button> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Jokes;