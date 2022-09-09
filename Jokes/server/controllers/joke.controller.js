const {createJoke, getAllJokes, getJokeById, deleteJoke, updateJoke, randomJoke} = require('../services/joke.service');

const handleCreateJoke = async (req, res) => {
    try {
        const joke = await createJoke(req.body);
        return res.json(joke);
    }catch (error) {
        return res.status(400).json(error);
    }
};
const handleGetAllJokes = async (req, res) => {
    try {
        const jokes = await getAllJokes();
        return res.json(jokes);
    }catch (error) {
        return res.status(400).json(error);
    }
};
const handleGetJokeById = async (req, res) => {
    try {
        const joke = await getJokeById(req.params.id);
        return res.json(joke);
    }catch (error) {
        return res.status(400).json(error);
    }
};
const handleDeleteJoke = async (req, res) => {
    try {
        const joke = await deleteJoke(req.params.id);
        return res.json(joke);
    }catch (error) {
        return res.status(400).json(error);
    }
};
const handleUpdateJoke = async (req, res) => {
    try {
        const joke = await updateJoke(req.params.id, req.body);
        return res.json(joke);
    }catch (error) {
        return res.status(400).json(error);
    }
};
const handleRandomJoke = async (req, res) => {
    try {
        const joke = await randomJoke();
        return res.json(joke);
    }catch (error) {
        return res.status(400).json(error);
    }
};

module.exports = {handleCreateJoke, handleGetAllJokes, handleGetJokeById, handleDeleteJoke, handleUpdateJoke, handleRandomJoke}

