import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchRandomJoke, getSavedJokes, saveJoke, deleteJoke, updateJoke } from "../api/jokes.ts";
import { Joke, SavedJoke } from "@portfolio/shared/types.ts";


const Jokes = () => {

    const [dadJoke, setDadJoke] = useState<Joke | null>(null);
    const [savedJokes, setSavedJokes] = useState<SavedJoke[]>([]);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editContent, setEditContent] = useState<string>("");

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

    const startEditing = (joke: SavedJoke) => {
        setEditingId(joke.id);
        setEditContent(joke.content);
    }

    const cancelEditing = () => {
        setEditingId(null);
        setEditContent("");
    }

    const saveEdit = async (jokeId: number) => {
        try {
            await updateJoke(jokeId, { content: editContent });
            await fetchSavedJokes();
            setEditingId(null);
            setEditContent("");
        } catch (error) {
            console.error("Can't edit joke", error);
        }
    }

    useEffect(() => {
        fetchJoke()
        fetchSavedJokes()
    }, []);

    return (
        <div className="terminal">
            <div className="scanline"></div>
            <div className="terminalSection">
                <h2 style={{
                    borderLeft: '3px solid #00d4d4',
                    paddingLeft: '1rem',
                }}>
                    Dad Joke Dispenser
                </h2>
                <p style={{ lineHeight: 1.8, opacity: 0.9, minHeight: '3rem' }}>{dadJoke?.content ?? ""}</p>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                    <Button
                        variant="outlined"
                        onClick={fetchJoke}
                        sx={{
                            color: '#00dd00',
                            borderColor: '#00dd00',
                            '&:hover': {
                                backgroundColor: '#00dd00',
                                color: 'black',
                            }
                        }}
                    >
                        New Joke
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => dadJoke && saveAJoke(dadJoke)}
                        sx={{
                            color: '#00dd00',
                            borderColor: '#00dd00',
                            '&:hover': {
                                backgroundColor: '#00dd00',
                                color: 'black',
                            }
                        }}
                    >
                        Save Joke
                    </Button>
                </div>
            </div>
            {savedJokes.length > 0 && (
                <div className="terminalSection">
                    {savedJokes.map((joke) => (
                        <div key={joke.id}>
                            <div className="joke-item-wrapper">
                                <div className="scanline"></div>
                                <div className="joke-content">
                                    {editingId === joke.id ? (
                                        <input
                                            type="text"
                                            value={editContent}
                                            onChange={(e) => setEditContent(e.target.value)}
                                            className="joke-input"
                                            autoFocus
                                        />
                                    ) : (
                                        <p className="joke-text">{joke.content}</p>
                                    )}
                                </div>
                                <Button
                                    variant="outlined"
                                    size="small"
                                    onClick={() => startEditing(joke)}
                                    sx={{
                                        color: '#00dd00',
                                        borderColor: '#00dd00',
                                        minWidth: '60px',
                                        '&:hover': {
                                            backgroundColor: '#00dd00',
                                            color: 'black',
                                        }
                                    }}
                                >
                                    Edit
                                </Button>
                            </div>
                            {editingId === joke.id && (
                                <div className="joke-actions">
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={() => saveEdit(joke.id)}
                                        sx={{
                                            color: '#00dd00',
                                            borderColor: '#00dd00',
                                            '&:hover': {
                                                backgroundColor: '#00dd00',
                                                color: 'black',
                                            }
                                        }}
                                    >
                                        Save Changes
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={() => deleteAJoke(joke)}
                                        sx={{
                                            color: '#ff5555',
                                            borderColor: '#ff5555',
                                            '&:hover': {
                                                backgroundColor: '#ff5555',
                                                color: 'black',
                                            }
                                        }}
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={cancelEditing}
                                        sx={{
                                            color: '#ffaa00',
                                            borderColor: '#ffaa00',
                                            '&:hover': {
                                                backgroundColor: '#ffaa00',
                                                color: 'black',
                                            }
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Jokes;